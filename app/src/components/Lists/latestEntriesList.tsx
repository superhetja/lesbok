import { FlatList } from "react-native"
import { EntryResponse } from "../../utils/types"
import { LatestEntry } from "../Cards"

type LatestEntriesListProps = {
	data: EntryResponse[]
	onEntrySelect: (id: string) => void
}

export const LatestEntriesList = ({data, onEntrySelect}: LatestEntriesListProps) => {

	const renderItem = ({item}: {item: EntryResponse}) => {
		return(
			<LatestEntry
				book_name={item.book.name}
				page_from={item.page_from}
				page_to={item.page_to}
				comment={item.comment}
				date={item.date_of_entry}
				onCardPress={() => onEntrySelect(item.id)}
			/>
		)
	}

	return (
		<FlatList
			contentContainerStyle={{paddingBottom: 40}}
			data={data}
			renderItem={renderItem}
		/>
	)
}
