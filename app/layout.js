import Navbar from '@/components/global/Navbar';
import Sidebar from '@/components/global/Sidebar';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata = {
	title: 'DaSH',
	description: 'Daily Sales Highlights',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="synthwave">
			<body>
				<Navbar />
				<div className="flex">
					<Sidebar />
					<main className="flex-1 p-8 bg-base-200  mb-10 "> {children}</main>
				</div>
			</body>
		</html>
	);
}
