import { Group } from 'group';
import { Student } from 'student';

export interface School {
	id: string;
	name: string;
	active: boolean;
	phoneNumber?: string;
	email?: string;
	location?: string;
}

export interface Book {
	id: string;
	name: string;
}

interface StudentWithScore extends Student {
	score: number;
}

export interface GroupWithStudentScore extends Group {
	students: StudentWithScore[];
}
