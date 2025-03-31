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

function CurrentMinimumEggsBase() {
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
					'src/components/CurrentMinimumEggs.tsx:24',
				),
			);
		}
	}, [readyToFetchCurrentMinimumEggs, fetchCurrentMinimumEggs]);

	return (
		currentMinimumEggs !== undefined && (
			<div>
				<Col childrenHorizontalPosition="center">
					<Row>
						<h3>Today, the poorest American worker is valued at</h3>
					</Row>
					<Row className="bg-gray-800 text-white aspect-square px-6 pb-6 mt-4 w-fit">
						<Col>
							<Row
								className="h-2/3"
								childrenVerticalPosition="center"
								childrenHorizontalPosition="center"
							>
								<h2>{Math.floor(currentMinimumEggs)} Eggs</h2>
							</Row>
							<Row
								className="h-1/3"
								childrenVerticalPosition="center"
								childrenHorizontalPosition="center"
							>
								<h3>per hour</h3>
							</Row>
						</Col>
					</Row>
				</Col>
			</div>
		)
	);
}

const CurrentMinimumEggs = memo(CurrentMinimumEggsBase);

export default CurrentMinimumEggs;
