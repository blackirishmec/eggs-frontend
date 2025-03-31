import { memo } from 'react';

function DisclaimerBase() {
	return (
		<i className="text-gray-600">
			This application sources its data from the Federal Reserve bank of
			St. Louis's FRED api.
		</i>
	);
}

const Disclaimer = memo(DisclaimerBase);

export default Disclaimer;
