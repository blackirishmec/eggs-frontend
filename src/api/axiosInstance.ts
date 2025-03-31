import axios, { AxiosError, AxiosInstance } from 'axios';
import Logger from '../utils/Logger';
import { persistor, RootState } from '../redux/store';
import { Store } from '@reduxjs/toolkit';
import { resetStore } from '../redux/rootReducer';

export function createAxiosInstance(store: Store<RootState>): AxiosInstance {
	const axiosInstance = axios.create({
		baseURL: import.meta.env.VITE_API_BASE_URL as string,
		withCredentials: true,
		withXSRFToken: true,
	});

	// Request interceptor
	axiosInstance.interceptors.request.use(
		config => {
			const state = store.getState();

			// Skip Authorization header check if `skipAuth` is set
			if (!config.skipAuth) {
				const loggedUserId = state.auth.loggedUserId;
				if (!loggedUserId) {
					Logger.error('Missing loggedUserId for request.');
					throw new Error('Missing loggedUserId for request.');
				}
				const loggedUser = state.users.entities[loggedUserId];

				const token = loggedUser ? loggedUser.token : null;

				if (token) {
					config.headers.setAuthorization(`Bearer ${token}`);
				} else {
					Logger.error('Missing Authorization header in request.');
					throw new Error('Authorization token is missing.');
				}
			}

			if (!config.skipActiveTeamIdFetch) {
				const activeTeamId = state.userTeams.activeTeamId;
				config.headers['X-Active-Team-ID'] = activeTeamId;
			}

			if (!config.skipActiveProjectIdFetch) {
				const activeProjectId = state.userProjects.activeProjectId;
				config.headers['X-Active-Project-ID'] = activeProjectId;
			}

			return config;
		},
		async (error: AxiosError) => {
			// Check if error is due to CSRF token mismatch (419) or token expired (401)
			if (
				error.response?.status === 419
				// || error.response?.status === 401
			) {
				try {
					// Re-fetch CSRF token
					await axiosInstance.get(
						`${import.meta.env.VITE_API_BASE_URL}/sanctum/csrf-cookie`,
						{ skipAuth: true, withCredentials: true },
					);

					// Retry the original request
					return error.config && axiosInstance.request(error.config);
				} catch (retryError) {
					// If retry fails, might need to force re-login
					store.dispatch(resetStore());
					await persistor.purge().then(() => {
						Logger.warn(
							'Token fetch failed. Redux Store and Persist storage are both fully cleared!',
							'syndichat-frontend/src/api/axiosInstance.ts:70',
						);
					});

					// eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
					return Promise.reject(retryError);
				}
			}
			return Promise.reject(error);
		},
	);

	// Response interceptor
	axiosInstance.interceptors.response.use(
		response => {
			return response;
		},
		(error: Error | string) => {
			return Promise.reject(
				error instanceof Error ? error : new Error(error),
			);
		},
	);

	return axiosInstance;
}
