import React from 'react';
import './App.scss';
import Layout from './components/layout/layout';
import { ToastProvider } from 'react-toast-notifications';

const App: React.FC = () => {
	return (
		<ToastProvider placement="top-center">
			<Layout />
		</ToastProvider>
	);
}
export default App;