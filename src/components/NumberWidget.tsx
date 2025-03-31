import { memo, useEffect } from 'react';

import Logger from '@/utilities/Logger';

import { Col, Row } from '@/components/layout/FlexComponents';
import {
	fetchCurrentMinimumEggs,
	selectCurrentMinimumEggs,
	selectReadyToFetchCurrentMinimumEggs,
} from '@/redux/features/ui/numberWidget';
import useAppDispatch from '@/redux/hooks/useAppDispatch';
import useTypedSelector from '@/redux/hooks/useTypedSelector';

function NumberWidgetBase() {
	const dispatch = useAppDispatch();

	const currentMinimumEggs = useTypedSelector(selectCurrentMinimumEggs);
	const readyToFetchCurrentMinimumEggs = useTypedSelector(
		selectReadyToFetchCurrentMinimumEggs,
	);

	useEffect(() => {
		if (readyToFetchCurrentMinimumEggs) {
			dispatch(fetchCurrentMinimumEggs()).catch(reason =>
				Logger.infoObject(
					'reason',
					reason,
					'src/components/NumberWidget.tsx:24',
				),
			);
		}
	}, [readyToFetchCurrentMinimumEggs, fetchCurrentMinimumEggs]);

	return (
		currentMinimumEggs !== undefined && (
			<div className="text-white">
				<Row className="bg-gray-800 aspect-square p-6">
					<Col>
						<Row
							className="h-1/3"
							childrenVerticalPosition="center"
							childrenHorizontalPosition="center"
						>
							<h3>1 hour =</h3>
						</Row>
						<Row
							className="h-2/3"
							childrenVerticalPosition="center"
							childrenHorizontalPosition="center"
						>
							<h2>{Math.floor(currentMinimumEggs)} Eggs</h2>
						</Row>
					</Col>
				</Row>
			</div>
		)
	);
}

const NumberWidget = memo(NumberWidgetBase);

export default NumberWidget;
