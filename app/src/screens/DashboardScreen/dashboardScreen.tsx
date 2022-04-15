import { Text, Layout, Spinner } from "@ui-kitten/components";
import { useDispatch } from "react-redux";
import LatestEntry from "../../components/Cards/latestEntry";
import ScoreCard from "../../components/Cards/scoreCard";
import DonutChart from "../../components/Charts/donutChart";
import { useGetReadThisWeekQuery, useGetStudentScoreQuery, useGetEntriesQuery } from "../../services/backend";
import styles from "../styles";
import {EntryResponse} from '../../utils/types'

const DashboardScreen = () => {

	const {data: readThisWeek, isLoading: loadingRead} = useGetReadThisWeekQuery();
	const {data: score, isLoading: loadingScore} = useGetStudentScoreQuery();

	const { entry } = useGetEntriesQuery(undefined, {
		selectFromResult: ({ data }) => ({
			entry: (data!== undefined && data[0]) ?? []
		})
	});
	const dispatch = useDispatch();
	console.log(entry)
	return(
		<Layout level='3' style={styles.container}>
			<Layout style={[styles.row, {flex: 2}]}>
			</Layout>
			<Layout style={[styles.row, {flex: 3}]}>
				{ entry &&
				<LatestEntry book_name={entry.book_name} page_from={entry.page_from} page_to={entry.page_to} comment={entry.comment} date={entry.date_of_entry}/>
				}
			</Layout>
			<Layout style={[styles.row, {flex: 2}]}>
				<Layout style={[styles.column, {marginRight: 6}]}>
					{ loadingRead
						? <Spinner />
						: typeof(readThisWeek) === 'number' ?
						<DonutChart divident={readThisWeek}/>
						: <Text>Error</Text>
					}
				</Layout>
				<Layout style={[styles.column, {marginLeft: 6}]}>
					{loadingScore
						? <Spinner />
						: score ?
						<ScoreCard score={score} />
						: <Text>ERROR</Text>
					}
				</Layout>
			</Layout>
		</Layout>
	)
}

export default DashboardScreen;
