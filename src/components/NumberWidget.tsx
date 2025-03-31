import { memo } from 'react';

function NumberWidgetBase() {
	return <div>Number</div>;
}

const NumberWidget = memo(NumberWidgetBase);

export default NumberWidget;
