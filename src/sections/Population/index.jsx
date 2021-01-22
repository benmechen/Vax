import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../data.provider';
import Dot from './Dot';

const Population = () => {
	const dotSize = 2500;

	const { population: totalPopulation, totalDoses } = useContext(DataContext);
	const [population, setPopulation] = useState([]);

	const generatePopulation = (first, second) => {
		const population = [];
		for (let i = 0; i < totalPopulation; i += dotSize) {
			let dose = 0;
			if (i <= first) dose = 1;
			if (i <= second) dose = 2;
			population.push(dose);
		}
		return population;
	};

	useEffect(() => {
		setPopulation(generatePopulation(totalDoses.first, totalDoses.second));
		// eslint-disable-next-line
	}, [totalPopulation, totalDoses]);

	return (
		<div className="flex flex-col items-center w-full mt-40">
			<h1 className="text-5xl font-semibold text-center">
				Vaccines In Population
			</h1>
			<h5 className="font-light mt-10">
				Each dot represents {dotSize} people
			</h5>
			<div className="mt-5 flex flex-row flex-wrap items-center justify-around w-1/2">
				<div className="flex flex-row items-center justify-center gap-2">
					No dose
					<Dot large dose={0} />
				</div>
				<div className="flex flex-row items-center justify-center gap-2">
					First dose
					<Dot large dose={1} />
				</div>
				<div className="flex flex-row items-center justify-center gap-2">
					Second dose
					<Dot large dose={2} />
				</div>
			</div>
			<div className="flex flex-row flex-wrap mt-10">
				{population.map((dose, index) => (
					<Dot dose={dose} key={index} />
				))}
			</div>
		</div>
	);
};

export default Population;
