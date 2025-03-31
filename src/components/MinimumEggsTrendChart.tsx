import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { memo } from 'react';
import { Line } from 'react-chartjs-2';

import { Col, Row } from '@/components/layout/FlexComponents';

function MinimumEggsTrendChartBase() {
	ChartJS.register(ArcElement, Tooltip, Legend);

	return (
		<Col>
			<Row>
				<div>Chart</div>
			</Row>
			<Row>
				{/* <Line
					options={...}
					data={...}
					{...props}
				/> */}
			</Row>
		</Col>
	);
}

const MinimumEggsTrendChart = memo(MinimumEggsTrendChartBase);

export default MinimumEggsTrendChart;
