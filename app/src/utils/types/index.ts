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
	book: {
		id: string;
		title: string;
	}
}

export interface Book {
	id: string;
	name: string;
	created: string;
	modified: string;
}

export interface BookWithLastPage extends Book {
	last_page: string;
}

export interface EntryResponse {
	id: string;
	student_id: string;
	page_from: string;
	page_to: string;
	comment?: string;
	time_spent?: string;
	registered_by: string;
	date_of_entry: string;
	book_id: string;
	created: string;
	modified: string;
	book: Book;
}


export type FormDataWithDate = {
	book_name: string;
	book_from: number;
	book_to: number;
	comment: string;
	date_of_entry: any;
	book_id: string;
}

export type NotificationData = {
	time: Date;
	monday: boolean;
	tuesday: boolean;
	wednsday: boolean;
	thursday: boolean;
	friday: boolean;
	saturday: boolean;
	sunday: boolean
}
