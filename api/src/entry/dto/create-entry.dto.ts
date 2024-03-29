export class CreateEntryDto {
	student_id: string;

	book_name: string;

	registered_by: string;

	page_from: number;

	page_to: number;

	date_of_entry: Date;

	comment?: string;

	time_spent?: number;

	book_id?: string;
}
