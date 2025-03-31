import './App.css';
import AppTitle from './components/AppTitle';
import { Col, Row } from './components/layout/FlexComponents';
import NumberWidget from './components/NumberWidget';

function App() {
	return (
		<Row className="flex-1 py-12 px-4 poppins-regular">
			<Col className="flex-1" childrenHorizontalPosition="center">
				<Row className="pb-12">
					<AppTitle />
				</Row>
				<Row className="flex-1">
					<Col className="flex-1">
						<Row
							className="flex-1"
							childrenHorizontalPosition="center"
						>
							<NumberWidget />
						</Row>
						<Row className="flex-1">Chart</Row>
					</Col>
				</Row>
				<Row>
					<Col className="flex-1">
						<Row>Share</Row>
						<Row>Buy me an egg</Row>
						<Row>
							This application sources its data from the Federal
							Reserve bank of St. Louis's FRED api.
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default App;
