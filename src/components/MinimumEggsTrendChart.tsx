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

import type {
	ChartData,
	ChartOptions,
	ScriptableLineSegmentContext,
} from 'chart.js';

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
			// ticks: {
			// 	// Include a dollar sign in the ticks
			// 	callback(value, index, ticks) {
			// 		const date = new Date(value);
			// 		return '$' + value;
			// 	},
			// },
			// type: 'timeseries',
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

	const up = (ctx: ScriptableLineSegmentContext, colorString: string) =>
		ctx.p0.parsed.y < ctx.p1.parsed.y ? colorString : undefined;
	const down = (ctx: ScriptableLineSegmentContext, colorString: string) =>
		ctx.p0.parsed.y > ctx.p1.parsed.y ? colorString : undefined;

	const data: ChartData<'line', number[], string> = {
		labels: minimumEggsTrendData.map(
			minimumEggsTrendDataObject => minimumEggsTrendDataObject.date,
		),
		datasets: [
			{
				label: 'Eggs Per Hour',
				data: minimumEggsTrendData.map(minimumEggsTrendDataObject =>
					Math.floor(minimumEggsTrendDataObject.value),
				),
				// borderColor: 'rgb(75,255,75)',
				backgroundColor: 'rgb(55, 55, 255)',
				segment: {
					borderColor: ctx =>
						up(ctx, 'rgb(75,255,75)') ??
						down(ctx, 'rgb(255,75,75)'),
				},
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
