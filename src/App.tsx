import './App.css';
import { Col, Row } from './components/layout/FlexComponents';

function App() {
	return (
		<Row className="flex-1 poppins-regular">
			<Col className="flex-1" childrenHorizontalPosition="center">
				<Row>
					<h1>
						On <s>y</s>
						<u>Our</u> Face
					</h1>
				</Row>
				<Row className="flex-1">
					<Col className="flex-1">
						<Row className="flex-1">Number</Row>
						<Row className="flex-1">Chart</Row>
					</Col>
				</Row>
				<Row>Footer</Row>
			</Col>
		</Row>
	);
}

export default App;
