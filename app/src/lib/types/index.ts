export interface Entry {
	id: string;
	student_id: string;
	book_name: string;
	page_from: string;
	page_to: string;
	comment?: string;
	date_time: string;
	time_spent?: string;
	registered_by: string;
	date_of_entry: string;
}
