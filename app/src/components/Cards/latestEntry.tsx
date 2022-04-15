import { Card, Layout, Text } from "@ui-kitten/components";
import { EntryResponse } from "../../utils/types";
import { Dispatch } from 'react';
import { MessageSquare } from 'react-native-feather'
import { getDateFormated } from "../../utils/helpers";
import { format } from "prettier";



type LatestEntryProp = {
	book_name: string,
	page_from: string,
	page_to: string,
	comment: string,
	date: string
}

const LatestEntry = (
	{
	book_name,
	page_from,
	page_to,
	comment,
	date,
}: LatestEntryProp ) => {
const formattedDate = getDateFormated(date);
	return (
			<Card>
			<Text>Seinasta færsla</Text>
			<Text></Text>
			<Text>{book_name}</Text>
			<Text>{page_from}-{page_to}</Text>
			{ comment !== '' &&
			<><MessageSquare color={'black'} /><Text>{comment}</Text></>
			}
			<Text>{formattedDate}</Text>
		</Card>

	)
}

export default LatestEntry;
