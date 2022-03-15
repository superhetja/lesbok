import { useGetEntriesByIdQuery } from '../../services/backend';

function BookEntries() {
	const { data, error, isLoading } = useGetEntriesByIdQuery('1');
	console.log(data);
	console.log(error);
	console.log(isLoading);
}
export default BookEntries;
