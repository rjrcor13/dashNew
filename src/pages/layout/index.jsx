import { useState } from 'react';
import { Outlet } from 'react-router-dom';

// import Navbar from '../global/Navbar';
// import Sidebar from '../global/Sidebar';
import Navbar from '../../components/global/Navbar';
import Sidebar from '../../components/global/Sidebar';

const Layout = () => {
	const [isSidebar, setIsSidebar] = useState(true);
	return (
		<>
			<Navbar setIsSidebar={setIsSidebar} />

			<main className="flex">
				<Sidebar isSidebar={isSidebar} />
				<main className="flex-1 p-8 bg-base-200  mb-10 ">
					<Outlet />
				</main>
			</main>
			{/* <SpeedDialTooltipOpen /> */}
		</>
	);
};

export default Layout;
