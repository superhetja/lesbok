export interface Entry {
	student_id: string;
	book_id: string;
	page_from: number;
	page_to: number;
	comment?: string;
	date_time: Number;
	time_spent?: string;
	registered_by: string;
}
