import { Text, Layout, Spinner } from "@ui-kitten/components";
import { useDispatch } from "react-redux";
import LatestEntry from "../../components/Cards/latestEntry";
import DonutChart from "../../components/Charts/donutChart";
import { useGetEntriesQuery, useGetReadThisWeekQuery } from "../../services/backend";
import styles from "../styles";
import {EntryResponse} from '../../utils/types'
import { View } from "react-native";

const DashboardScreen = () => {

	const {data: readThisWeek, isLoading} = useGetReadThisWeekQuery();
	const { entry } = useGetEntriesQuery(undefined, {
		selectFromResult: ({ data }) => ({
			entry: (data!== undefined && data[0]) ?? []
		})
	});
	const dispatch = useDispatch();
	console.log(entry)
	return(
		<Layout level='3' style={styles.container}>
			<View style={{padding: 12}}>
				<Text category={'h1'} style={{color: 'blue'}}>Pétur É. Hólmfríðarson</Text>
			</View>
			<Layout style={[styles.row, {flex: 2}]}>
			</Layout>
			<Layout style={[styles.row, {flex: 3}]}>
				{ entry &&
				<LatestEntry book_name={entry.book_name} page_from={entry.page_from} page_to={entry.page_to} comment={entry.comment} date={entry.date_of_entry}/>
				}
			</Layout>
			<Layout style={[styles.row, {flex: 2}]}>
				<Layout style={[styles.column, {marginRight: 6}]}>
					{ isLoading
						? <Spinner />
						: typeof(readThisWeek) === 'number' ?
						<DonutChart divident={readThisWeek}/>
						: <Text>Error</Text>
					}
				</Layout>
				<Layout style={[styles.column, {marginLeft: 6}]}>

				</Layout>
			</Layout>
		</Layout>
	)
}

export default DashboardScreen;
