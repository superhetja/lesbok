export enum Gender {
	MALE = 'Male',
	FEMALE = 'Female',
	OTHER = 'Other',
}

export enum Roles {
	SUPERADMIN = 'SuperAdmin',
	ADMIN = 'Admin',
	TEACHER = 'Teacher',
	ASSISTANT = 'Assistant',
	GUARDIAN = 'Guardian',
}

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
	};
}

export type UserResponse = {
	id: string;
	name: string;
	national_id: string;
	email: string;
	created: string;
	modified: string;
};

export interface EntryWithUser extends EntryResponse {
	user: UserResponse;
}

export interface BookWithLastPage extends Book {
	last_page: string;
}

export type FormDataWithDate = {
	book_name: string;
	book_from: number;
	book_to: number;
	comment?: string;
	date_of_entry: string;
	book_id: string;
};

export type NotificationData = {
	time: Date;
	days: boolean[];
};

export interface Book {
	id: string;
	name: string;
	created: string;
	modified: string;
}

export type User = {
	id: string;
	name: string;
	email: string;
	national_id: string;
};

export interface StudentResponse {
	id: string;
	name: string;
	national_id: string;
	group_id: string;
	gender: Gender;
	created: Date;
	modified: Date;
}

export interface StudentResponseWithScore {
	score: number;
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

export type AccessResponse = {
	user_id: string;
	group_id: string;
	role: Roles;
	created: Date;
	modified: Date;
};

export type UserGroupResponse = {
	id: string;
	name: string;
	school_id: string;
	description: string;
	Access: AccessResponse;
	created: Date;
	modified: Date;
};

export type GroupDetailedResponse = {
	id: string;
	name: string;
	school_id: string;
	description: string;
	students: StudentResponse[];
	created: Date;
	modified: Date;
};

export type UserDetailResponse = {
	id: string;
	name: string;
	national_id: string;
	email: string;
	created: Date;
	modified: Date;
	children: StudentResponse[];
	groups: UserGroupResponse[];
};

export type StudentEntryResponse = {
	id: string;
	entries: EntryResponse[];
};
