import React, { useContext } from 'react';
import { DataContext } from '../data.provider';
import SEO from './SEO';
import Loading from '../images/loading.gif';

const Layout = ({ children }) => {
	const { date, totalDoses } = useContext(DataContext);

	return (
		<>
			<SEO />
			<div className="flex flex-col min-h-screen bg-gray-200">
				<header className="p-4 bg-black text-white font-semibold flex items-center flex-col md:flex-row">
					<h1 className="max-w-4xl mx-auto text-xl text-center">
						UK Covid 19 Vaccination Tracker
					</h1>
					<span className="font-light md:absolute md:right-0 md:mr-4">
						{date && `Data from ${date.toLocaleDateString()}`}
					</span>
				</header>
				{!totalDoses.first && (
					<div className="bg-black fixed top-0 left-0 bottom-0 right-0 w-screen h-screen text-white z-20 flex items-center justify-center">
						<img src={Loading} />
					</div>
				)}
				{children}
				<footer className="py-2 text-center text-gray-600 text-xs">
					&copy;{' '}
					<a
						href="https://ben.mechen.co"
						target="_blank"
						rel="noreferrer"
					>
						Ben Mechen
					</a>{' '}
					2021
				</footer>
			</div>
		</>
	);
};

export default Layout;
