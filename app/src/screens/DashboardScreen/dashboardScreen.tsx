import { Text, Layout, Spinner } from "@ui-kitten/components";
import LatestEntry from "../../components/Cards/latestEntry";
import ScoreCard from "../../components/Cards/scoreCard";
import DonutChart from "../../components/Charts/donutChart";
import { useGetReadThisWeekQuery, useGetStudentScoreQuery } from "../../services/backend";
import styles from "../styles";

const DashboardScreen = () => {

	const {data: readThisWeek, isLoading: loadingRead} = useGetReadThisWeekQuery();
	const {data: score, isLoading: loadingScore} = useGetStudentScoreQuery();

	return(
		<Layout level='3' style={styles.container}>
			<Layout style={[styles.row, {flex: 2}]}>
			</Layout>
			<Layout style={[styles.row, {flex: 3}]}>
				<LatestEntry/>
			</Layout>
			<Layout style={[styles.row, {flex: 2}]}>
				<Layout style={[styles.column, {marginRight: 6}]}>
					{ loadingRead
						? <Spinner />
						: typeof(readThisWeek) === 'number' ?
						<DonutChart divident={readThisWeek}/>
						: <Text>ERROR</Text>
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
