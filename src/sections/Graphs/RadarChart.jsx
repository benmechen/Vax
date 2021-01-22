import React, { useContext } from 'react';
import { Radar } from 'react-chartjs-2';
import { DataContext } from '../../data.provider';

const RadarChart = () => {
	const { totalDoses } = useContext(DataContext);

	const priorityGroups = [
		300000,
		500000,
		3300000,
		2400000,
		1400000,
		2300000,
		4400000,
		2900000,
		7300000,
		1800000,
		2400000,
		2800000,
	];

	const percentagesFirst = [];
	let remainingPopulationFirst = totalDoses.first;
	for (let i = 0; i < priorityGroups.length; i++) {
		const percent = Math.min(
			(remainingPopulationFirst / priorityGroups[i]) * 100,
			100,
		);
		percentagesFirst.push(Math.max(percent, 0));
		remainingPopulationFirst -= priorityGroups[i];
	}

	const percentagesSecond = [];
	let remainingPopulationSecond = totalDoses.second;
	for (let i = 0; i < priorityGroups.length; i++) {
		const percent = Math.min(
			(remainingPopulationSecond / priorityGroups[i]) * 100,
			100,
		);
		percentagesSecond.push(Math.max(percent, 0));
		remainingPopulationSecond -= priorityGroups[i];
	}

	const dataset = {
		labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
		datasets: [
			{
				label: '% of 1st doses',
				data: percentagesFirst,
				backgroundColor: 'rgba(252,129,129, 0.5)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
			},
			{
				label: '% of 2nd doses',
				data: percentagesSecond,
				backgroundColor: 'rgba(245,101,101, 0.5)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 1,
			},
		],
	};

	return (
		<>
			<h3 className="text-xl">
				Doses as a percentage of Priority Groups 1-9
			</h3>
			<Radar data={dataset} />
		</>
	);
};

export default RadarChart;
