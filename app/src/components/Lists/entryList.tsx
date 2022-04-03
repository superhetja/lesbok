import { Text, } from "react-native";
import { selectEntry } from "../../slices/globalSlice";
import { List } from "@ui-kitten/components";
import EntryListItem from "./entryListItem";
import styles from './styles';
import { Entry } from "../../lib/types";
import { Dispatch } from "react";

type EntryListProps = {
	entries: Entry[]|undefined,
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
								title={item.book_name}
								from={item.page_from}
								to={item.page_to}
								comment={item.comment}
								date={item.date_time}
								onEdit={() => dispatch(selectEntry({selectedEntryId: item.id, formData: {book_name: item.book_name, book_to: parseInt(item.page_to), book_from: parseInt(item.page_from), comment: item.comment? item.comment : ''}}))}
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
