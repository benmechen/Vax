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
		<div className="flex flex-col items-center w-full">
			<div className="w-full flex flex-row items-center justify-center transform rotate-90 md:rotate-0">
				<h1 className="text-5xl font-bold capitalize whitespace-no-wrap mr-4">
					№ 1
				</h1>
				<Syringe percent={firstDosePercent} />
			</div>
			<div className="w-full flex flex-row items-center justify-center transform rotate-90 md:rotate-0">
				<h1 className="text-5xl font-bold capitalize whitespace-no-wrap mr-4">
					№ 2
				</h1>
				<Syringe percent={secondDosePercent} />
			</div>
		</div>
	);
};

export default Syringes;
