import { ListItem } from "@ui-kitten/components";
import { getDateFormated } from "../../utils/helpers";
import { EditButton } from "../Buttons";


type EntryListItemProps = {
	title: string;
	from: string;
	to: string;
	comment?: string;
	id: string;
	date: string;
	onEdit: () => void;
}

const AccessoryRight = (callback: () => void) => (
	<EditButton onPress={callback} />
)

const EntryListItem = ({ title, from, to, id, date, comment='', onEdit }: EntryListItemProps) => {
	const formattedDate = getDateFormated(date);
	return (
		<ListItem
			title={title}
			description={`Bls: ${from} - ${to} ${comment? '| ' + comment : ''}`}
			accessoryRight={() => AccessoryRight(onEdit)}
		/>
	)
}

export default EntryListItem;
