import React from 'react';
import user from '../img/user.png';
const Stats = () => {
	return (
		<div>
			<div className="stats stats-vertical lg:stats-horizontal shadow ">
				<div className="stat">
					<div className="stat-figure text-primary ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block w-8 h-8 stroke-current"
						>
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g
								id="SVGRepo_tracerCarrier"
								strokeLinecap="round"
								strokeLinejoin="round"
							></g>
							<g id="SVGRepo_iconCarrier"></g>

							<circle cx="17" cy="4" r="2"></circle>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15.777 10.969a2.007 2.007 0 0 0 2.148.83l3.316-.829-.483-1.94-3.316.829-1.379-2.067a2.01 2.01 0 0 0-1.272-.854l-3.846-.77a1.998 1.998 0 0 0-2.181 1.067l-1.658 3.316 1.789.895 1.658-3.317 1.967.394L7.434 17H3v2h4.434c.698 0 1.355-.372 1.715-.971l1.918-3.196 5.169 1.034 1.816 5.449 1.896-.633-1.815-5.448a2.007 2.007 0 0 0-1.506-1.33l-3.039-.607 1.772-2.954.417.625z"
							></path>
						</svg>
					</div>
					<div className="stat-title">Percentage Average Rate</div>
					<div className="stat-value text-primary">60%</div>
					<div className="stat-desc">12 days left</div>
				</div>

				<div className="stat">
					<div className="stat-figure text-secondary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block w-8 h-8 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							></path>
						</svg>
					</div>
					<div className="stat-title">Percent to Target</div>
					<div className="stat-value text-secondary">72%</div>
					<div className="stat-desc">21% more than last month</div>
				</div>

				<div className="stat">
					<div className="stat-figure text-secondary">
						<div className="avatar online">
							<div className="w-16 rounded-full">
								<img src={user} alt="user" />
							</div>
						</div>
					</div>
					<div className="stat-value">86%</div>
					<div className="stat-title">Calls done</div>
					<div className="stat-desc text-secondary">31 calls remaining</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
