'use client';
import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Title,
	Tooltip,
} from 'chart.js';
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

//const labels = ['HOGS', 'GAMEFOWL', 'MEDIUM', 'SMAHC', 'PETFOOD'];

// export const data = {
// 	labels,
// 	datasets: [
// 		{
// 			label: 'Actual',
// 			data: [1321, 1335, 8426, 13513, 2318],
// 			backgroundColor: 'rgb(231,121,193)',
// 		},
// 		{
// 			label: 'Target',
// 			data: [1232, 4123, 1232, 5422, 1233],
// 			backgroundColor: 'rgb(88,199,243)',
// 		},
// 	],
// };

const TargetActual = () => {
	const [activeTab, setActiveTab] = useState('Leyte&Samar'); // Set the default active tab

	// Handle tab click
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};
	const tabData = {
		'Leyte&Samar': {
			labels: ['HOGS', 'GAMEFOWL', 'MEDIUM', 'SMAHC', 'PETFOOD'],
			datasets: [
				{
					label: 'Actual',
					data: [1321, 1335, 8426, 13513, 2318],
					backgroundColor: 'rgb(231,121,193)',
				},
				{
					label: 'Target',
					data: [1232, 4123, 1232, 5422, 1233],
					backgroundColor: 'rgb(88,199,243)',
				},
			],
		},
		Calbayog: {
			labels: ['HOGS', 'GAMEFOWL', 'MEDIUM', 'SMAHC', 'PETFOOD'],
			datasets: [
				{
					label: 'Actual',
					data: [131, 135, 826, 1313, 218],
					backgroundColor: 'rgb(231,121,193)',
				},
				{
					label: 'Target',
					data: [123, 413, 122, 542, 123],
					backgroundColor: 'rgb(88,199,243)',
				},
			],
		},
		Sogod: {
			labels: ['HOGS', 'GAMEFOWL', 'MEDIUM', 'SMAHC', 'PETFOOD'],
			datasets: [
				{
					label: 'Actual',
					data: [555, 623, 522, 561, 7877],
					backgroundColor: 'rgb(231,121,193)',
				},
				{
					label: 'Target',
					data: [111, 413, 122, 542, 123],
					backgroundColor: 'rgb(88,199,243)',
				},
			],
		},
		Hilongos: {
			labels: ['HOGS', 'GAMEFOWL', 'MEDIUM', 'SMAHC', 'PETFOOD'],
			datasets: [
				{
					label: 'Actual',
					data: [131, 135, 826, 1313, 218],
					backgroundColor: 'rgb(231,121,193)',
				},
				{
					label: 'Target',
					data: [234, 444, 555, 4574, 542],
					backgroundColor: 'rgb(88,199,243)',
				},
			],
		},
		// Add more tab data as needed
	};
	const options = {
		plugins: {
			title: {
				display: true,
				text: 'SALES: Target VS Actual',
			},
		},
		responsive: true,
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
	};
	return (
		<div>
			<div className="tabs  tabs-boxed mb-4">
				<a
					className={`tab ${activeTab === 'Leyte&Samar' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('Leyte&Samar')}
				>
					Leyte&Samar
				</a>
				<a
					className={`tab ${activeTab === 'Calbayog' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('Calbayog')}
				>
					Calbayog
				</a>
				<a
					className={`tab ${activeTab === 'Sogod' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('Sogod')}
				>
					Sogod
				</a>
				<a
					className={`tab ${activeTab === 'Hilongos' ? 'tab-active' : ''}`}
					onClick={() => handleTabClick('Hilongos')}
				>
					Hilongos
				</a>
			</div>
			<Bar
				options={options}
				data={tabData[activeTab]}
				height={30}
				width="100%"
			/>
			{/* <Bar options={options} data={data} height={30} width="100%" /> */}
		</div>
	);
};

export default TargetActual;
