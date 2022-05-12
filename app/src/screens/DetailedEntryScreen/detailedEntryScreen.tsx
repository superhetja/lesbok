import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { DetailedEntry } from '../../components/Cards';
import { GuardianStackScreenProps } from '../../navigation/types';
import { useGetEntryByIdQuery } from '../../services/backend';

type DetailedEntryScreenProps = GuardianStackScreenProps<'DetailedEntry'>;

function DetailedEntryScreen({ navigation, route }: DetailedEntryScreenProps) {
	const {
		data: entry,
		isFetching,
		isLoading,
	} = useGetEntryByIdQuery(route.params.entryId);

	return (
		<Layout>
			{entry ? (
				<DetailedEntry entry={entry} />
			) : (
				<Text>Villa færsla fannst ekki </Text>
			)}
		</Layout>
	);
}

export default DetailedEntryScreen;
