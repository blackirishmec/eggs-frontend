import { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

import { createAxiosInstance } from './api/axiosInstance';
import App from './App';

export const axiosInstance = createAxiosInstance();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
);
