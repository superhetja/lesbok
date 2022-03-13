export class CreateEntryDto {
	student_id: string;

	book_id: string;

	registered_by: string;

	page_from: number;

	page_to: number;

	date_of_entry: Date;

	comment?: string;

	time_spent?: number;
}
