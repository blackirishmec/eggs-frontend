import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';
import { memo, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import type { ChartOptions } from 'chart.js';

import Logger from '@/utilities/Logger';

import { Col, Row } from '@/components/layout/FlexComponents';
import {
	fetchMinimumEggsTrendData,
	selectMinimumEggsTrendData,
	selectReadyToFetchMinimumEggsTrendData,
} from '@/redux/features/ui/trendChart';
import useAppDispatch from '@/redux/hooks/useAppDispatch';
import useTypedSelector from '@/redux/hooks/useTypedSelector';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

export const options: ChartOptions<'line'> = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			titleFont: {
				size: 24,
			},
			bodyFont: {
				size: 24,
			},
			usePointStyle: true,
		},
	},
	scales: {
		x: {
			display: true,
			title: {
				display: true,
				text: 'Date',
			},
		},
		y: {
			display: true,
			title: {
				display: true,
				text: 'Eggs per Hour',
			},
		},
	},
};

function MinimumEggsTrendChartBase() {
	const dispatch = useAppDispatch();

	const minimumEggsTrendData = useTypedSelector(selectMinimumEggsTrendData);
	const readyToFetchMinimumEggsTrendData = useTypedSelector(
		selectReadyToFetchMinimumEggsTrendData,
	);

	useEffect(() => {
		if (readyToFetchMinimumEggsTrendData) {
			dispatch(fetchMinimumEggsTrendData()).catch(reason =>
				Logger.infoObject(
					'reason',
					reason,
					'src/components/MinimumEggsTrendChart.tsx:24',
				),
			);
		}
	}, [readyToFetchMinimumEggsTrendData, fetchMinimumEggsTrendData]);

	const data = {
		labels: minimumEggsTrendData.map(
			minimumEggsTrendDataObject => minimumEggsTrendDataObject.date,
		),
		datasets: [
			{
				label: 'Eggs Per Hour',
				data: minimumEggsTrendData.map(minimumEggsTrendDataObject =>
					Math.floor(minimumEggsTrendDataObject.value),
				),
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	};

	return (
		minimumEggsTrendData.length > 0 && (
			<Col>
				<Row childrenHorizontalPosition="center">
					<h3>Eggs Per Hour Over Time</h3>
				</Row>
				<Row className="h-100">
					<Line options={options} data={data} />
				</Row>
			</Col>
		)
	);
}

const MinimumEggsTrendChart = memo(MinimumEggsTrendChartBase);

export default MinimumEggsTrendChart;
