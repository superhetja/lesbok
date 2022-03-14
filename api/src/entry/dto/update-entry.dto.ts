export class UpdateEntryDto {
	readonly student_id: string;

	readonly book_name: string;

	readonly page_from: string;

	readonly page_to: string;

	readonly date_of_entry: Date;

	readonly comment: string;

	readonly time_spent: number;
}
