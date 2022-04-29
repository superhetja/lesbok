import { Card, Layout, Text } from "@ui-kitten/components";
import { EntryResponse } from "../../utils/types";
import { Dispatch } from 'react';
import { MessageSquare } from 'react-native-feather'
import { getDateFormated } from "../../utils/helpers";
import { format } from "prettier";
import { GestureResponderEvent, Pressable, Touchable, View } from "react-native";
import { EditButton } from "../Buttons";



type LatestEntryProp = {
	book_name: string,
	page_from: string,
	page_to: string,
	comment?: string,
	date: string,
	onEditClick: (event: GestureResponderEvent) => void
	onCardPress: (event: GestureResponderEvent) => void
}

const LatestEntry = (
	{
	book_name,
	page_from,
	page_to,
	comment,
	date,
	onEditClick,
	onCardPress
}: LatestEntryProp ) => {
	const formattedDate = getDateFormated(date);

	return (
			<Pressable onPress={onCardPress} style={{flex:1}}>
				<View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:-20}}>

					<Text category="label">Seinasta færsla</Text>
					<EditButton onPress={onEditClick} />
				</View>
				<View style={{justifyContent:'center', flex: 1}}>

					<Text>{formattedDate}</Text>
				<View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
					<Text category="h3">{book_name}</Text>
					<Text style={{fontSize: 50}}>{page_from}-{page_to}</Text>
				</View>
					{ comment && comment !== '' &&
						<><MessageSquare color={'grey'} /><Text>{comment}</Text></>
					}
					</View>
			</Pressable>

	)
}

export default LatestEntry;
