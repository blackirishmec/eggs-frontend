import axios from 'axios';

import type { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost/api',
	withCredentials: true,
});

// Optionally add interceptors
apiClient.interceptors.response.use(
	response => response,
	(error: Error | string) => {
		// Global error handling (e.g., refresh token logic)
		return Promise.reject(
			error instanceof Error ? error : new Error(error),
		);
	},
);

export default apiClient;
