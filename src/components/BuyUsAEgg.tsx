import { memo } from 'react';
import { FaEgg } from 'react-icons/fa6';

import { Col, Row } from '@/components/layout/FlexComponents';

function BuyUsAEggBase() {
	return (
		<a
			href="https://ko-fi.com/E1E71CS5IC"
			target="_blank"
			className="bg-[#72a4f2] rounded-2xl py-3 px-2.5 text-white"
		>
			<Row childrenVerticalPosition="center">
				<Col>
					<FaEgg
						strokeWidth={40}
						stroke="white"
						color="#ff5f5f"
						size={24}
					/>
				</Col>
				<Col className="ml-1.5 font-semibold text-base">
					Buy Us a Egg
				</Col>
			</Row>
		</a>
	);
}

const BuyUsAEgg = memo(BuyUsAEggBase);

export default BuyUsAEgg;
