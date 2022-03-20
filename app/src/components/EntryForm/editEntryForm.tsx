import { useState } from "react";
import { useForm } from "react-hook-form"
import { useGetEntriesQuery, useGetEntryByIdQuery } from "../../services/backend"
import {FormData} from './index'
type EntryFormProps = {
	id: string;
}

const EntryForm = ({id}: EntryFormProps) => {
	const { data: entry, isLoading } = useGetEntryByIdQuery(id);
	if(!entry) {
		console.error('Entry is undefined');
		return null;
	}
	const {...methods} = useForm<FormData>({
		defaultValues: {
			book_name: entry.book_id,
			book_from: entry.page_from,
			book_to: entry.page_to,
			comment: entry.comment? entry.comment : '',
		}

	});
	const [isVisible, setIsVisible] = useState(false);


}
