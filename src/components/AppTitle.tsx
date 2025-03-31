import { memo } from 'react';

function AppTitleBase() {
	return (
		<h1>
			On <s>y</s>
			<u>Our</u> Face
		</h1>
	);
}

const AppTitle = memo(AppTitleBase);

export default AppTitle;
