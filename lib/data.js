import {
	RiArrowDownSFill,
	RiChatVoiceFill,
	RiDashboardFill,
	RiPagesFill,
} from 'react-icons/ri';

export const Menus = [
	{ title: 'Dashboard', href: 'dashboard' },
	{ title: 'Pages', icon: <RiPagesFill />, href: 'pages' },
	{ title: 'Media', spacing: true, href: 'media' },
	{
		title: 'Projects',
		icon: <RiChatVoiceFill />,
		submenu: true,
		submenuItems: [
			{ title: 'submenu1', href: 'submenu1' },
			{ title: 'submenu2', href: 'submenu2' },
			{ title: 'submenu3', href: 'submenu3' },
		],
	},
	{ title: 'Inbox', href: 'inbox' },
	{ title: 'Pofile', spacing: true, href: 'profile' },
	{ title: 'Logout', href: 'logout' },
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
