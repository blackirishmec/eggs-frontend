import { memo } from 'react';

import { Col, Row } from './layout/FlexComponents';

function NumberWidgetBase() {
	return (
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
						<h2>17 Eggs</h2>
					</Row>
				</Col>
			</Row>
		</div>
	);
}

const NumberWidget = memo(NumberWidgetBase);

export default NumberWidget;
