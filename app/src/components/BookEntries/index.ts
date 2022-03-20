import { useGetEntriesByIdQuery } from '../../services/backend';

export default function BookEntries() {
	const { data, error, isLoading } = useGetEntriesByIdQuery('1');
	console.log(data);
	console.log(error);
	console.log(isLoading);
}
