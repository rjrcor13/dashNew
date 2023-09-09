import React from 'react';

const Header = ({ title, subtitle }) => {
	return (
		<div className="p-2 mb-1">
			<h1 className="font-bold text-lg  text-orange-400">{title}</h1>
			<p className="text-slate-400">{subtitle}</p>
			<div className="divider"></div>
		</div>
	);
};

export default Header;
