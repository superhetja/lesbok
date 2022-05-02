import { View, StyleSheet } from 'react-native';
import { Text } from '@ui-kitten/components'
import { EntryResponse, EntryWithUser } from '../../utils/types';
import { getDateFormated, getDateFormatedWithTime } from '../../utils/helpers';
import { ChildrenProp } from '@ui-kitten/components/devsupport';

type EntryProps = {
	entry: EntryWithUser;

}

const DetailedEntry = ({
	entry
}: EntryProps) => {
	const created = new Date(entry.created)
return (

	<View style={{padding: 10}}>
			<View style={{alignItems: 'center', paddingTop: 30, paddingBottom: 20}}>
				<Text category={'h1'} >{entry.book.name}</Text>
			</View>
			<View style={{marginRight: 100}}>
			<View style={{flexDirection: 'row'}}>
				<Text style={styles.bold}>Blaðsíða: </Text>
				<Text style={styles.text}>{entry.page_from}-{entry.page_to}</Text>
			</View>
			{ entry.time_spent ?
				<View style={{flexDirection: 'row'}}>
					<Text style={styles.bold}>Tími: </Text>
					<Text style={styles.text}>{entry.time_spent}</Text>
				</View>
				:
				<View style={{flexDirection: 'row'}}>
					<Text style={styles.bold}>Tími: </Text>
					<Text style={styles.text}>Enginn tími skráður</Text>
				</View>
			}
			{
				entry.comment ?
				<View style={{flexDirection: 'row'}}>
				<Text style={styles.bold}>Athugasemd: </Text>
				<Text style={styles.text}>{entry.comment}</Text>
				</View>
				:
				<View style={{flexDirection: 'row'}}>
					<Text style={styles.bold}>Athugasemd:</Text>
					<Text style={styles.text}> Engin skráð athugasemd</Text>
				</View>
			}
			<View style={{flexDirection: 'row'}}>
				<Text style={styles.bold}>Skráð: </Text>
				<Text style={styles.text}>{getDateFormated(entry.date_of_entry)}</Text>
			</View>
			<View style={{flexDirection: 'row'}}>
				<Text style={styles.bold}>Búin til:  </Text>
				<Text style={styles.text}>{getDateFormatedWithTime(entry.created)} </Text>
			</View>
			<View style={{flexDirection: 'row'}}>
				<Text style={styles.bold}>Síðast Breytt: </Text>
				<Text style={styles.text}>{getDateFormatedWithTime(entry.modified)}</Text>
			</View>
			<View style={{flexDirection: 'row'}}>
				<Text style={styles.bold}>Skráð af: </Text>
				<Text style={styles.text}>{entry.user.name}</Text>
			</View>
		</View>
			</View>
	)
}

const styles = StyleSheet.create({
	text: {
		marginTop: 4,
		fontSize: 18,
		paddingRight: 10,
	},
	bold: {
		marginTop: 4,
		fontSize: 18,
		fontWeight: 'bold'
	}
})
export default DetailedEntry;
