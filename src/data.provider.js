import React, { useEffect, useState } from 'react';

export const DataContext = React.createContext({
	date: null,
	population: 52453550,
	topPriorityPopulation: 15000000,
	midPriorityPopulation: 32000000,
	totalDoses: {
		first: 0,
		second: 0,
	},
	dailyDoses: {
		first: 0,
		second: 0,
	},
	averageDailyDoses: {
		first: 0,
		second: 0,
		total: 0,
	},
});

const DataProvider = ({ children }) => {
	const [date, setDate] = useState(null);
	const [totalFirstDose, setTotalFirstDose] = useState(0);
	const [totalSecondDose, setTotalSecondDose] = useState(0);
	const [dailyFirstDose, setDailyFirstDose] = useState(0);
	const [dailySecondDose, setDailySecondDose] = useState(0);
	const [averageFirstDose, setAverageFirstDose] = useState(0);
	const [averageSecondDose, setAverageSecondDose] = useState(0);
	const [averageTotal, setAverageTotal] = useState(0);

	useEffect(() => {
		const getData = async () => {
			// const res = await fetch(process.env.GATSBY_API_URL);
			const res = await fetch(
				'https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=overview&structure=%7B%22areaType%22:%22areaType%22,%22areaName%22:%22areaName%22,%22areaCode%22:%22areaCode%22,%22date%22:%22date%22,%22newPeopleVaccinatedFirstDoseByPublishDate%22:%22newPeopleVaccinatedFirstDoseByPublishDate%22,%22newPeopleVaccinatedSecondDoseByPublishDate%22:%22newPeopleVaccinatedSecondDoseByPublishDate%22,%22cumPeopleVaccinatedFirstDoseByPublishDate%22:%22cumPeopleVaccinatedFirstDoseByPublishDate%22,%22cumPeopleVaccinatedSecondDoseByPublishDate%22:%22cumPeopleVaccinatedSecondDoseByPublishDate%22%7D&format=json',
			);
			const data = await res.json();

			if (data.data && Array.isArray(data.data)) {
				if (data.data[0]) {
					const {
						newPeopleVaccinatedFirstDoseByPublishDate,
						newPeopleVaccinatedSecondDoseByPublishDate,
						cumPeopleVaccinatedFirstDoseByPublishDate,
						cumPeopleVaccinatedSecondDoseByPublishDate,
					} = data.data[0];

					setDailyFirstDose(
						Number(newPeopleVaccinatedFirstDoseByPublishDate),
					);
					setDailySecondDose(
						Number(newPeopleVaccinatedSecondDoseByPublishDate),
					);
					setTotalFirstDose(
						Number(cumPeopleVaccinatedFirstDoseByPublishDate),
					);
					setTotalSecondDose(
						Number(cumPeopleVaccinatedSecondDoseByPublishDate),
					);
					setDate(new Date(data.data[0].date));
				}

				setAverageFirstDose(
					data.data.reduce((accumulator, value) => {
						if (value.newPeopleVaccinatedFirstDoseByPublishDate)
							return (
								accumulator +
								value.newPeopleVaccinatedFirstDoseByPublishDate
							);
						return accumulator;
					}, 0) / data.data.length,
				);
				setAverageSecondDose(
					data.data.reduce((accumulator, value) => {
						if (value.newPeopleVaccinatedSecondDoseByPublishDate)
							return (
								accumulator +
								value.newPeopleVaccinatedSecondDoseByPublishDate
							);
						return accumulator;
					}, 0) / data.data.length,
				);
				setAverageTotal(data.data.length);
			}
		};
		getData();
	}, []);

	return (
		<DataContext.Provider
			value={{
				date,
				population: 52453550,
				topPriorityPopulation: 15000000,
				midPriorityPopulation: 32000000,
				totalDoses: {
					first: totalFirstDose,
					second: totalSecondDose,
				},
				dailyDoses: {
					first: dailyFirstDose,
					second: dailySecondDose,
				},
				averageDailyDoses: {
					first: averageFirstDose,
					second: averageSecondDose,
					total: averageTotal,
				},
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataProvider;
