export interface CreateEntryDto {
	student_id: string;

	book_name: string;

	registered_by: string;

	page_from: number;

	page_to: number;

	date_of_entry: string;

	comment?: string;

	time_spent?: number;

	book_id?: string;
}

export interface UpdateEntryDto {
	id: string;

	student_id?: string;

	book_name?: string;

	page_from?: number;

	page_to?: number;

	date_of_entry?: string;

	comment?: string;

	time_spent?: number;
}
