'use client';
import { Menus } from '@/lib/data';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { RiArrowDownSFill, RiDashboardFill } from 'react-icons/ri';
const Sidebar = () => {
	const [open, setOpen] = useState(true);
	const [subMenuOpen, setSubMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	const handleWindowSizeChange = () => {
		setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
	};

	useEffect(() => {
		// Set initial mobile state
		handleWindowSizeChange();

		// Attach event listener to window resize
		window.addEventListener('resize', handleWindowSizeChange);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	useEffect(() => {
		// Automatically collapse sidebar on mobile
		if (isMobile) {
			setOpen(false);
		}
	}, [isMobile]);

	// Rest of your component code

	return (
		<div className="flex text-white">
			<div
				className={`h-screen p-5 pt-8  relative bg-base-100 ${
					open ? 'w-72' : 'w-20'
				} duration-300`}
			>
				<button
					className={`btn  btn-circle absolute right-4 top-3
					}`}
					onClick={() => setOpen(!open)}
				>
					<svg
						className="swap-off fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 512 512"
					>
						<path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
					</svg>
				</button>

				<div className="mt-4">
					<ul className="pt-2">
						{Menus.map((menu, index) => (
							<>
								<li
									key={index}
									className={`text-sm flex item-center gap-x-4 cursor-pointer p-2 hover:bg-neutral rounded-md ${
										menu.spacing ? 'mt-9' : 'mt-2'
									} `}
								>
									<span
										className={`text-2xl block float-left duration-500 ${
											open && 'rotate-[360deg]'
										}`}
									>
										<span className="hover:rotate-180 duraion-500 bg-black">
											{menu.icon ? menu.icon : <RiDashboardFill />}
										</span>
									</span>

									{menu.submenu && open ? (
										<>
											<span
												className={`text-base font-medium flex-1 duration-[900] ${
													!open && 'hidden'
												}`}
												onClick={() => setSubMenuOpen(!subMenuOpen)}
											>
												{menu.title}
											</span>
											<RiArrowDownSFill
												className={` text-xl duration-300 ${
													subMenuOpen && 'rotate-180'
												}`}
											/>
										</>
									) : (
										<span
											className={`text-base font-medium flex-1 duration-[900] ${
												!open && 'hidden'
											}`}
										>
											<Link href={menu.href}>{menu.title}</Link>
										</span>
									)}
								</li>
								{menu.submenu && subMenuOpen && open && (
									<ul className="bg-base-200">
										{menu.submenuItems.map((submenuItem, subIndex) => (
											<li
												key={subIndex}
												className={`text-sm flex item-center gap-x-4 cursor-pointer p-3 hover:bg-neutral-focus rounded-md px-5 duration-500 `}
											>
												{submenuItem.title}
											</li>
										))}
									</ul>
								)}
							</>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
