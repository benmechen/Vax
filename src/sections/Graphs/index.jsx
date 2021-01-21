import React from 'react';
import BarChart from './BarChart';
import DoughnutChart from './PieChart';
import RadarChart from './RadarChart';

const Graphs = () => {
	return (
		<div className="flex flex-col items-center w-full mt-40">
			<h1 className="text-5xl font-semibold text-center mb-20">
				Vaccines In Graphs
			</h1>
			<BarChart />
			<div className="mt-16"></div>
			<DoughnutChart />
			<div className="mt-16"></div>
			<RadarChart />
		</div>
	);
};

export default Graphs;
