import { Text, } from "react-native";
import { selectEntry } from "../../slices/globalSlice";
import { List } from "@ui-kitten/components";
import EntryListItem from "./entryListItem";
import styles from './styles';
import { EntryResponse } from "../../utils/types";
import { Dispatch } from "react";

type EntryListProps = {
	entries: EntryResponse[] |undefined,
	isLoading: boolean,
	dispatch:Dispatch<any>
}

const EntryList = ({
	entries,
	isLoading,
	dispatch
}: EntryListProps) => {

	return (
    <>
			{
				isLoading && <Text>Loading...</Text>
			}
			{
				entries &&
					<List
						data={entries}
						renderItem={({item}) => (
							<EntryListItem
								title={item.book.name}
								from={item.page_from}
								to={item.page_to}
								comment={item.comment}
								date={item.date_of_entry}
								onEdit={
									() => dispatch(
										selectEntry({
											selectedEntryId: item.id,
											formData: {
												book_id: item.book.id,
												book_name: item.book.name,
												book_to: parseInt(item.page_to),
												book_from: parseInt(item.page_from),
												date_of_entry: item.date_of_entry,
												comment: item.comment? item.comment : ''
											}
										})
									)
								}
								id={item.id}
							/>
						)}
						keyExtractor={item => item.id}
						style={styles.container}
					/>
			}
    </>
  );
}

export default EntryList;
