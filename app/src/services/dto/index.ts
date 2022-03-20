export interface CreateEntryDto {
	student_id: string;

	book_name: string;

	registered_by: string;

	page_from: number;

	page_to: number;

	date_of_entry: string;

	comment?: string;

	time_spent?: number;
}

export interface UpdateEntryDto {
	id: string;
	
	student_id: string;

	book_name: string;

	page_from: string;

	page_to: string;

	date_of_entry: string;

	comment: string;

	time_spent: number;
}
