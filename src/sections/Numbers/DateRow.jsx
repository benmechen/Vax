import React from 'react';
import DateCard from './DateCard';

const DateRow = ({ priority, group, one, two }) => (
	<div
		className={`grid grid-cols-3 gap-4 items-center px-4 py-1  ${
			priority && 'shadow-md pb-4'
		}`}
	>
		<h4
			className={`w-24 break-words text-right ${
				priority && 'font-semibold'
			}`}
		>
			{group}
		</h4>
		<DateCard value={one} />
		<DateCard value={two} />
	</div>
);

export default DateRow;
