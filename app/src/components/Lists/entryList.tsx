import { Text, } from "react-native";
import { useGetEntriesQuery } from "../../services/backend";
import { useDispatch } from "react-redux";
import { selectEntry } from "../../slices/globalSlice";
import { List } from "@ui-kitten/components";
import EntryListItem from "./entryListItem";
import styles from './styles';



const EntryList = () => {
	const { data: entries, isLoading } = useGetEntriesQuery();
	const dispatch = useDispatch();
	// console.log(entrie)
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
								date={item.date_of_entry}
								onEdit={() => dispatch(selectEntry({selectedEntryId: item.id, formData: {book_name: item.book_name, book_to: parseInt(item.page_to), book_from: parseInt(item.page_from), date_of_entry: item.date_of_entry, comment: item.comment? item.comment : ''}}))}
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
