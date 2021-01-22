import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../data.provider';
import Syringe from './Syringe';

const Syringes = () => {
	const { totalDoses, population } = useContext(DataContext);
	const [firstDosePercent, setFirstDosePercent] = useState(0.5);
	const [secondDosePercent, setSecondDosePercent] = useState(0.25);

	useEffect(() => {
		setFirstDosePercent(totalDoses.first / population);
		setSecondDosePercent(totalDoses.second / population);
	}, [totalDoses, population]);

	return (
		<div className="flex flex-col items-center transform rotate-90 md:rotate-0 mt-24 md:mt-0 w-full scale-125 md:scale-100">
			<div className="w-full flex flex-row items-center justify-center">
				<h1 className="text-3xl md:text-5xl font-bold capitalize whitespace-no-wrap mr-4">
					№ 1
				</h1>
				<Syringe percent={firstDosePercent} />
			</div>
			<div className="w-full flex flex-row items-center justify-center">
				<h1 className="text-3xl md:text-5xl font-bold capitalize whitespace-no-wrap mr-4">
					№ 2
				</h1>
				<Syringe percent={secondDosePercent} />
			</div>
		</div>
	);
};

export default Syringes;
