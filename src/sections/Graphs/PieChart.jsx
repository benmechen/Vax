import React, { useContext } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { DataContext } from '../../data.provider';

const DoughnutChart = () => {
	const { totalDoses, population } = useContext(DataContext);

	const datasets = [
		{
			title: 'Total Doses',
			data: [
				{
					label: '1st Dose',
					value: totalDoses.first,
				},
				{
					label: '2nd Dose',
					value: totalDoses.second,
				},
				{
					label: 'Remaining Population',
					value: population + totalDoses.first + totalDoses.second,
				},
			],
			colour: ['#fc8181', '#f56565'],
		},
	];

	return (
		<Doughnut
			data={{
				labels: datasets[0].data.map((d) => d.label),
				datasets: datasets.map((dataset) => {
					const { data, title, colour } = dataset;
					return {
						label: title,
						data: data.map((d) => d.value),
						backgroundColor: colour,
					};
				}),
			}}
		/>
	);
};

export default DoughnutChart;
