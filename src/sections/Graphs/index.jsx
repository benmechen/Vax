import React from 'react';
import BarChart from './BarChart';

const Graphs = () => {
	const dataset = {
		title: 'Categories',
		data: [
			{
				label: 'A',
				value: 46,
			},
			{
				label: 'B',
				value: 87,
			},
		],
	};

	return (
		<div className="flex flex-col items-center w-full mt-40">
			<h1 className="text-5xl font-semibold text-center">
				Vaccines In Graphs
			</h1>
			<BarChart title={dataset.title} data={dataset.data} />
		</div>
	);
};

export default Graphs;
