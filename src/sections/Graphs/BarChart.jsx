import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { DataContext } from '../../data.provider';

const BarChart = () => {
	const { data } = useContext(DataContext);

	const datasets = [
		{
			title: 'Daily Total (2nd Dose)',
			data: (data || []).map((dataPoint) => ({
				label: new Date(dataPoint.date).toLocaleDateString(),
				value: dataPoint.secondDose,
			})),
			colour: '#e53e3e',
		},
		{
			title: 'Daily Total (1st Dose)',
			data: (data || []).map((dataPoint) => ({
				label: new Date(dataPoint.date).toLocaleDateString(),
				value: dataPoint.firstDose,
			})),
			colour: '#feb2b2',
		},
	];

	return (
		<>
			<h3 className="text-xl">Daily Doses</h3>

			<Bar
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
				options={{
					scales: {
						yAxes: [
							{
								stacked: true,
								ticks: {
									beginAtZero: true,
								},
							},
						],
						xAxes: [
							{
								stacked: true,
							},
						],
					},
				}}
			/>
		</>
	);
};

export default BarChart;
