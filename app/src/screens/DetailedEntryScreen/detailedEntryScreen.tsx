import { Layout } from "@ui-kitten/components";
import { DetailedEntry } from "../../components/Cards";
import { RootStackScreenProps } from "../../navigation";

type DetailedEntryScreenProps = RootStackScreenProps<'DetailedEntry'>;

const DetailedEntryScreen = ({navigation, route}: DetailedEntryScreenProps) => {
	return (
		<Layout>
			<DetailedEntry/>
		</Layout>
	)
}

export default DetailedEntryScreen;
