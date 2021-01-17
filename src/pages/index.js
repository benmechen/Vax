import React from 'react';
import Layout from '../components/Layout';
import Syringes from '../sections/Syringes/';
import Numbers from '../sections/Numbers';
import Population from '../sections/Population';
import DataProvider from '../data.provider';
import Graphs from '../sections/Graphs';
import '../css/index.css';

export default () => {
	return (
		<DataProvider>
			<Layout>
				<main className="max-w-full md:max-w-6xl w-full px-4 md:px-24 flex-grow mx-auto flex flex-col justify-around my-10 font-serif">
					<Syringes />
					<Numbers />
					<Population />
					<Graphs />
				</main>
			</Layout>
		</DataProvider>
	);
};
