import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { memo } from 'react';
import { Line } from 'react-chartjs-2';

import { Col } from '@/components/layout/FlexComponents';

function MinimumEggsTrendChartBase() {
	ChartJS.register(ArcElement, Tooltip, Legend);

	return (
		<Col>
			<div>Chart</div>
		</Col>
	);
}

const MinimumEggsTrendChart = memo(MinimumEggsTrendChartBase);

export default MinimumEggsTrendChart;
