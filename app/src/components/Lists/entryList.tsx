import { SafeAreaView, FlatList, StyleSheet, StatusBar, View, Text, ListRenderItem } from "react-native";
import { StringMappingType } from "typescript";
import {Entry} from '../../lib/types'
import { useGetEntriesQuery } from "../../services/backend";
import { Edit2 } from 'react-native-feather';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
		flexDirection: "row",
    backgroundColor: '#f9c2ff',
    padding: 20,
		justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
		color: '#000000'
  },
});

type ItemProps = {
	title: string;
	from: number;
	to: number;
	comment?: string;
}

const Item = ({ title, from, to, comment='' }: ItemProps) => (
  <View style={styles.item}>
		<View>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.title}>{from}</Text>
			<Text style={styles.title}>{to}</Text>
			<Text style={styles.title}>{comment}</Text>
		</View>
		<Edit2 />
  </View>
);

type EntryListProps = {
	entries: Entry[]
}

const EntryList = () => {
	const { data: entries, isLoading } = useGetEntriesQuery()

	const renderItem = ({ item }: any) => {
		return (
    <Item title={item.book_name} from={item.page_from} to={item.page_to} comment={item.comment} />
  )};

	return (
    <SafeAreaView style={styles.container}>
			{
				isLoading && <Text>Loading...</Text>
			}
			{
				entries &&
					<FlatList
						data={entries}
						renderItem={renderItem}
						keyExtractor={item => item.id}
					/>
			}
    </SafeAreaView>
  );
}

export default EntryList;
