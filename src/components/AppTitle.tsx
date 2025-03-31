import { memo } from 'react';

function AppTitleBase() {
	return (
		<h1>
			Minimum <s className="text-gray-500">Wage</s> Eggs
		</h1>
	);
}

const AppTitle = memo(AppTitleBase);

export default AppTitle;
