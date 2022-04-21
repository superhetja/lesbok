import { Card, Layout, Text } from "@ui-kitten/components";
import { EntryResponse } from "../../utils/types";
import { Dispatch } from 'react';
import { MessageSquare } from 'react-native-feather'
import { getDateFormated } from "../../utils/helpers";
import { format } from "prettier";
import { GestureResponderEvent, View } from "react-native";
import { EditButton } from "../Buttons";



type LatestEntryProp = {
	book_name: string,
	page_from: string,
	page_to: string,
	comment?: string,
	date: string,
	onEditClick: (event: GestureResponderEvent) => void
}

const LatestEntry = (
	{
	book_name,
	page_from,
	page_to,
	comment,
	date,
	onEditClick
}: LatestEntryProp ) => {
const formattedDate = getDateFormated(date);
	return (
			<View style={{flex:1}}>
				<View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:-20}}>

					<Text category="label">Seinasta færsla</Text>
					<EditButton onPress={onEditClick} />
				</View>
				<View style={{justifyContent:'center', flex: 1}}>

					<Text>{formattedDate}</Text>
				<View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
					<Text category="h3">{book_name}</Text>
					<Text style={{fontSize: 50}}>{page_from}-{page_to}</Text>
					{ comment !== '' &&
						<><MessageSquare color={'black'} /><Text>{comment}</Text></>
					}
				</View>
					</View>
			</View>

	)
}

export default LatestEntry;
