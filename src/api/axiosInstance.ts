import axios from 'axios';

import type { AxiosInstance } from 'axios';

export function createAxiosInstance(): AxiosInstance {
	const axiosInstance = axios.create({
		baseURL: import.meta.env.VITE_API_BASE_URL as string,
		withCredentials: true,
		withXSRFToken: true,
	});

	// Request interceptor

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
