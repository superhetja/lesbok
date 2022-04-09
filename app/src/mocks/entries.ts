import { createEntityAdapter } from '@reduxjs/toolkit';
import { Entry } from '../utils/types';

const adapter = createEntityAdapter<Entry>();
// eslint-disable-next-line import/no-mutable-exports
let state = adapter.getInitialState();
state = adapter.setAll(state, [
	{
		student_id: '1',
		book_id: '1',
		page_from: 2,
		page_to: 3,
		comment: 'string',
		date_time: Date.now(),
		time_spent: '10',
		registered_by: '1',
	},
	{
		student_id: '1',
		book_id: '1',
		page_from: 4,
		page_to: 6,
		comment: 'string',
		date_time: Date.now(),
		time_spent: '10',
		registered_by: '1',
	},
]);

export default { state };
