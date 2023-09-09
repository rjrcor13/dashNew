import { Navigate, Route, Routes } from 'react-router-dom';
import Calls from './components/Calls';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import OpenAccount from './components/OpenAccount';
import ProductPlacement from './components/ProductPlacement';
import Login from './components/landing/Login';
import WNav from './components/landing/WNav';
import Layout from './pages/layout';
import PrivateRoutes from './routes/PrivateRoutes';
import './styles/global.css';
function App() {
	return (
		// <Provider store={store}>
		<div className="app">
			<Routes>
				<Route element={<WNav />}>
					<Route path="/login" element={<Login />} />
				</Route>

				<Route element={<PrivateRoutes />}>
					<Route element={<Layout />}>
						<Route exact path="/" element={<Navigate to="/dashboard" />} />
						<Route exact path="/dashboard" element={<Dashboard />} />
						<Route path="/calls" element={<Calls />} />
						<Route path="/productplacement" element={<ProductPlacement />} />
						<Route path="/openaccount" element={<OpenAccount />} />

						<Route path="*" element={<NotFound />} />
					</Route>
				</Route>
			</Routes>
		</div>
		// </Provider>
	);
}

export default App;
