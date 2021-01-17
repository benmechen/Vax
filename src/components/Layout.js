import React, { useContext } from 'react';
import { DataContext } from '../data.provider';
import SEO from './SEO';

const Layout = ({ children }) => {
	const { date } = useContext(DataContext);

	return (
		<>
			<SEO />
			<div className="flex flex-col min-h-screen bg-gray-200">
				<header className="p-4 bg-black text-white font-semibold flex items-center">
					<h1 className="max-w-4xl mx-auto text-xl">
						UK Covid 19 Vaccination Tracker
					</h1>
					<span className="font-light float-right">
						{date && `Data from ${date.toLocaleDateString()}`}
					</span>
				</header>
				{children}
				<footer className="py-2 text-center text-gray-600 text-xs">
					&copy;{' '}
					<a href="https://ben.mechen.co" target="_blank">
						Ben Mechen
					</a>{' '}
					2021
				</footer>
			</div>
		</>
	);
};

export default Layout;
