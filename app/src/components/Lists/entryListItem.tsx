import React from 'react';
import { ListItem } from '@ui-kitten/components';
import { getDateFormated } from '../../utils/helpers';
import { IconButton } from '../Buttons';

type EntryListItemProps = {
	title: string;
	from: string;
	to: string;
	comment?: string;
	id: string;
	date: string;
	onEdit: () => void;
	onCardPress: (id: string) => void;
};

function AccessoryRight(callback: () => void) {
	return <IconButton icon="edit" onPress={callback} />;
}

function EntryListItem({
	title,
	from,
	to,
	id,
	date,
	comment = '',
	onEdit,
	onCardPress,
}: EntryListItemProps) {
	const formattedDate = getDateFormated(date);
	return (
		<ListItem
			title={title}
			description={`Dags: ${formattedDate} | Bls: ${from} - ${to} ${
				comment ? `| ${comment}` : ''
			}`}
			accessoryRight={() => AccessoryRight(onEdit)}
			onPress={() => onCardPress(id)}
		/>
	);
}

export default EntryListItem;
