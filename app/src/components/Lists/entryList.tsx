import { Divider, List } from '@ui-kitten/components';
import React from 'react';
import EntryListItem from './entryListItem';
import styles from './styles';
import { EntryResponse } from '../../utils/types';

type EntryListProps = {
	entries: EntryResponse[] | undefined;
	onEdit: (id: string) => void;
	onCardPress: (id: string) => void;
};

function EntryList({ entries, onEdit, onCardPress }: EntryListProps) {
	return (
		<>
			{entries && (
				<List
					data={entries}
					ItemSeparatorComponent={Divider}
					renderItem={({ item }) => (
						<EntryListItem
							title={item.book.name}
							from={item.page_from}
							to={item.page_to}
							comment={item.comment}
							date={item.date_of_entry}
							onEdit={() => onEdit(item.id)}
							onCardPress={onCardPress}
							id={item.id}
						/>
					)}
					keyExtractor={item => item.id}
					style={styles.container}
				/>
			)}
		</>
	);
}

export default EntryList;
