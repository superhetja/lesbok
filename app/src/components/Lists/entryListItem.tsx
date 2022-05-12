import { ListItem } from "@ui-kitten/components";
import { getDateFormated } from "../../utils/helpers";
import { IconButton } from "../Buttons";


type EntryListItemProps = {
	title: string;
	from: string;
	to: string;
	comment?: string;
	id: string;
	date: string;
	onEdit: () => void;
	onCardPress: (id: string) => void
}

const AccessoryRight = (callback: () => void) => (
	<IconButton icon='edit' onPress={callback} />
)

const EntryListItem = ({ title, from, to, id, date, comment='', onEdit, onCardPress }: EntryListItemProps) => {
	const formattedDate = getDateFormated(date);
	return (
		<ListItem
			title={title}
			description={`Dags: ${formattedDate} | Bls: ${from} - ${to} ${comment? '| ' + comment : ''}`}
			accessoryRight={() => AccessoryRight(onEdit)}
			onPress={() => onCardPress(id)}
		/>
	)
}

export default EntryListItem;
