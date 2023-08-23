'use client';

import Stats from './Stats';
import TargetActual from './charts/barchart/TargetActual';
import Header from './global/Header';

const Dashboard = () => {
	return (
		<div>
			<Header title="Dashboard" subtitle="Welcome to your dashboard." />
			<div className=" flex flex-col gap-7">
				<div className=" ">
					<Stats />
				</div>

				<div
					id="barChart "
					className="card bg-base-100 shadow-xl p-5 w-2/2 h-full"
				>
					<TargetActual />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
