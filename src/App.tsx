import BuyUsAEgg from '@/components/BuyUsAEgg';
import Disclaimer from '@/components/Disclaimer';
import MinimumEggsTrendChart from '@/components/MinimumEggsTrendChart';
import './App.css';

import AppTitle from './components/AppTitle';
import CurrentMinimumEggs from './components/CurrentMinimumEggs';
import { Col, Row } from './components/layout/FlexComponents';

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
							// className="flex-1"
							childrenHorizontalPosition="center"
						>
							<CurrentMinimumEggs />
						</Row>
						<Row className="flex-1 mt-20">
							<MinimumEggsTrendChart />
						</Row>
					</Col>
				</Row>
				<Row className="mt-12">
					<Col className="flex-1" childrenHorizontalPosition="center">
						<Row>
							<a href="https://bsky.app/intent/compose?text=I%27m%20reading%20through%20the%20Bluesky%20API%20docs%21%20%F0%9F%A6%8B%0Ahttps%3A//docs.bsky.app">
								Share on Bluesky
							</a>
						</Row>
						<Row className="mt-4">
							<BuyUsAEgg />
						</Row>
						<Row className="my-6">
							<Disclaimer />
						</Row>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}

export default App;
