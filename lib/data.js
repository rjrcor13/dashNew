import { BiSolidReport } from 'react-icons/bi';
import { GiFarmTractor } from 'react-icons/gi';
import {
	MdOutlineAllInbox,
	MdOutlineLogout,
	MdOutlineModeOfTravel,
	MdOutlineStackedBarChart,
	MdStorefront,
	PiTargetBold,
} from 'react-icons/md';

import { TiGroup } from 'react-icons/ti';
export const Menus = [
	{ title: 'Dashboard', href: 'dashboard' },
	{ title: 'Calls', icon: <MdOutlineModeOfTravel />, href: 'calls' },
	{
		title: 'Product Placement',
		icon: <MdOutlineAllInbox />,
		href: 'productplacement',
	},
	{ title: 'Open Store / Account', icon: <MdStorefront />, href: 'openstore' },
	{
		title: 'Demand Creation',
		icon: <MdOutlineStackedBarChart />,
		href: 'demandcreation',
	},
	{ title: 'Breeders Club', icon: <TiGroup />, href: 'breedersclub' },
	{ title: 'Farm Conversion', icon: <GiFarmTractor />, href: 'farmconversion' },

	{
		title: 'Reports',
		icon: <BiSolidReport />,
		submenu: true,
		submenuItems: [
			{ title: 'SOV', href: 'sov' },
			{ title: 'submenu2', href: 'submenu2' },
			{ title: 'submenu3', href: 'submenu3' },
		],
	},

	{
		title: 'Logout',
		href: 'logout',
		icon: <MdOutlineLogout />,
		spacing: true,
	},
];

export const BarChartdata = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];
