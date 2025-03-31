import type { StatusState } from '@/types/status';

const statusInitialState: StatusState = {
	loading: 'idle',
	error: null,
};

export default statusInitialState;
