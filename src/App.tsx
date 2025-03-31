import './App.css';
import { Col, Row } from './components/layout/FlexComponents';

function App() {
	return (
		<Row className="flex-1">
			<Col className="flex-1">
				<Row>
					<div>Header</div>
				</Row>
				<Row className="flex-1"></Row>
				<Row>Footer</Row>
			</Col>
		</Row>
	);
}

export default App;
