import React from 'react';
import { toMonth } from '../../utils/date';

const DateCard = ({ value }) => {
	const date = new Date(value);

	return (
		<div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default w-full md:w-auto my-4 md:my-0">
			<h4 className="bg-red-600 text-white w-full text-center font-light text-xl shadow">
				{!value
					? '-'
					: `${toMonth(date.getMonth())} '${
							date.getFullYear() - 2000
					  }`}
			</h4>
			<h2 className="text-5xl font-bold py-2 px-8">
				{!value ? '-' : date.getDate()}
			</h2>
		</div>
	);
};

export default DateCard;
