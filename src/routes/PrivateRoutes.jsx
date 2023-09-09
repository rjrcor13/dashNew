import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
	//const signstatus = Boolean(sessionStorage.getItem('tokenstatus'));
	//console.log(signstatus)

	//const auth = { token: signstatus };
	const auth = { token: true };
	return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
