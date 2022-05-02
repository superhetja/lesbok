import { Layout, Text } from "@ui-kitten/components";
import { DetailedEntry } from "../../components/Cards";
import { RootStackScreenProps } from "../../navigation";
import { useGetEntryByIdQuery } from "../../services/backend";

type DetailedEntryScreenProps = RootStackScreenProps<'DetailedEntry'>;


const DetailedEntryScreen = ({navigation, route}: DetailedEntryScreenProps) => {
	const {data: entry, isFetching, isLoading} = useGetEntryByIdQuery(route.params.entryId);
	
	return (
		<Layout>
			{ entry ?
				<DetailedEntry entry={entry}/>
				: <Text>Villa færsla fannst ekki </Text>
			}
		</Layout>
	)
}

export default DetailedEntryScreen;