import { memo } from 'react';

function AppTitleBase() {
	return (
		<h1>
			On <s className="text-gray-500">y</s>
			<u>Our</u> Face
		</h1>
	);
}

const AppTitle = memo(AppTitleBase);

export default AppTitle;
