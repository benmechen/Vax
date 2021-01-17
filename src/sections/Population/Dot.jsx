import React from 'react';

const Dot = ({ dose, large }) => (
	<span
		className={`rounded-full ${large ? 'w-4 h-4' : 'w-1 h-1'} m-px ${
			dose === 0
				? 'bg-gray-400'
				: dose === 1
				? 'bg-red-300'
				: 'bg-red-600'
		}`}
	>
		{' '}
	</span>
);

export default Dot;
