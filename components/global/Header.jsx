import React from 'react';

const Header = ({ title, subtitle }) => {
	return (
		<div className="p-2 mb-5">
			<h1 className="font-bold text-lg  text-orange-400">{title}</h1>
			<p className="text-slate-400">{subtitle}</p>
		</div>
	);
};

export default Header;
