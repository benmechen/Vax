import React from 'react';

const NumbersCard = ({ value, title, suffix, className }) => (
	<div
		className={`bg-white px-4 py-8 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default w-full md:w-auto my-4 md:my-0 ${className}`}
	>
		<h3 className="text-xl font-light">{title}</h3>
		<h2 className="text-5xl font-bold">
			{Number(value).toLocaleString()}
			{suffix}
		</h2>
	</div>
);

export default NumbersCard;
