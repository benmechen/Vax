import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../data.provider';
import DateRow from './DateRow';
import NumbersCard from './NumbersCard';

const Numbers = () => {
	const {
		totalDoses,
		dailyDoses,
		averageDailyDoses,
		topPriorityPopulation,
		midPriorityPopulation,
		population,
	} = useContext(DataContext);

	const [firstPercent, setFirstPercent] = useState(0);
	const [secondPercent, setSecondPercent] = useState(0);
	const [topPriorityFirst, setTopPriorityFirst] = useState(null);
	const [topPrioritySecond, setTopPrioritySecond] = useState(null);
	const [midPriorityFirst, setMidPriorityFirst] = useState(null);
	const [midPrioritySecond, setMidPrioritySecond] = useState(null);
	const [everyoneFirst, setEveryoneFirst] = useState(null);
	const [everyoneSecond, setEveryoneSecond] = useState(null);

	const calculateDate = (population, dailyRate, start) => {
		const daysLeft = population / dailyRate;
		start.setDate(start.getDate() + daysLeft);
		return start;
	};

	// const addWeeks = (date, weeks) => {
	// 	date = new Date(date);
	// 	date.setDate(date.getDate() + weeks * 7);
	// 	return date;
	// };

	useEffect(() => {
		// Top Priority
		const tpf = calculateDate(
			topPriorityPopulation,
			averageDailyDoses.first,
			new Date(),
		);
		setTopPriorityFirst(tpf);

		const tps = calculateDate(
			topPriorityPopulation,
			averageDailyDoses.second,
			new Date(),
		);
		setTopPrioritySecond(tps);

		// Mid priority
		const mpf = calculateDate(
			midPriorityPopulation,
			averageDailyDoses.first,
			new Date(tpf),
		);
		setMidPriorityFirst(mpf);
		const mps = calculateDate(
			midPriorityPopulation,
			averageDailyDoses.second,
			new Date(tpf),
		);
		setMidPrioritySecond(mps);

		// Everyone
		const ef = calculateDate(
			population,
			averageDailyDoses.first,
			new Date(mpf),
		);
		setEveryoneFirst(ef);
		const es = calculateDate(
			population,
			averageDailyDoses.second,
			new Date(mpf),
		);
		setEveryoneSecond(es);
		// eslint-disable-next-line
	}, [averageDailyDoses]);

	useEffect(() => {
		console.log(((totalDoses.first / population) * 100).toFixed(2));
		if (totalDoses.first)
			setFirstPercent(((totalDoses.first / population) * 100).toFixed(2));
		if (totalDoses.second)
			setSecondPercent(
				((totalDoses.second / population) * 100).toFixed(2),
			);
	}, [totalDoses, population]);

	return (
		<div className="flex flex-col items-center w-full mt-40">
			<h1 className="text-5xl font-semibold text-center">
				Vaccines In Numbers
			</h1>

			<div className="flex flex-col md:flex-row items-center justify-center mt-20 w-full px-8 md:px-0">
				<NumbersCard
					value={firstPercent}
					suffix="%"
					title="1st Dose"
					className="mr-2"
				/>
				<NumbersCard
					value={secondPercent}
					suffix="%"
					title="2nd Dose"
					className="ml-2"
				/>
			</div>
			{/* <div className="flex flex-col md:flex-row items-center justify-around mt-4 w-full px-8 md:px-0 "> */}
			<div className="flex flex-col md:flex-row items-center justify-center w-full px-8 md:px-0 mt-4">
				<NumbersCard
					value={totalDoses.first}
					title="1st Dose Total"
					className="mr-2"
				/>
				<NumbersCard
					value={totalDoses.second}
					title="2nd Dose Total"
					className="ml-2"
				/>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center w-full px-8 md:px-0 mt-4">
				<NumbersCard
					value={dailyDoses.first}
					title="1st Dose Daily Rate"
					className="mr-2"
				/>
				<NumbersCard
					value={dailyDoses.second}
					title="2nd Dose Daily Rate"
					className="ml-2"
				/>
			</div>

			<h1 className="text-3xl mt-20 text-center max-w-lg">
				Based on this data, we can estimate the completion date of the
				Covid 19 immunisation programme
			</h1>

			<div className="flex flex-col mt-10 gap-4">
				<div className="grid grid-cols-3 mb-2 font-bold text-lg text-center">
					<h4 className="text-center">Group</h4>
					<h4>Dose 1</h4>
					<h4>Dose 2</h4>
				</div>
				<DateRow
					group="Priority cohorts 1-4"
					one={topPriorityFirst}
					two={topPrioritySecond}
				/>
				<DateRow
					group="Priority cohorts 5-9"
					one={midPriorityFirst}
					two={midPrioritySecond}
				/>
				<DateRow
					priority
					group="Total Adult Population"
					one={everyoneFirst}
					two={everyoneSecond}
				/>
			</div>
			<div className="text-sm font-hairline mt-4">
				<p>
					Average Daily Rate, {averageDailyDoses.total} days (Dose 1):{' '}
					{Number(averageDailyDoses.first.toFixed()).toLocaleString()}
				</p>
				<p>
					Average Daily Rate, {averageDailyDoses.total} days (Dose 2):{' '}
					{Number(
						averageDailyDoses.second.toFixed(),
					).toLocaleString()}
				</p>
			</div>
		</div>
	);
};

export default Numbers;
