import { GET_BOOK_REGISTRATIONS } from '../constants';

export const getBookRegistrations = (data: any) => ({
	type: GET_BOOK_REGISTRATIONS,
	payload: data,
});

export default getBookRegistrations;
