import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { createAxiosInstance } from './api/axiosInstance';
import App from './App';

export const axiosInstance = createAxiosInstance();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
