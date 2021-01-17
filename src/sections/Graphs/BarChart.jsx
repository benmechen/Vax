import React, { useEffect, useState } from 'react';
import Chart from 'chart.js';

const BarChart = ({ data, title, colour }) => {
	const [chart, setChart] = useState();
	const canvasRef = React.createRef();

	useEffect(() => {
		const chart = new Chart(canvasRef.current, {
			type: 'horizontalBar',
			data: {
				labels: data.map((d) => d.label),
				datasets: [
					{
						label: title,
						data: data.map((d) => d.value),
						backgroundColor: colour,
					},
				],
			},
		});

		setChart(chart);
	});

	return <canvas ref={canvasRef} />;
};

export default BarChart;
