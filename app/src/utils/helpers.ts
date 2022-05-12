import { FormDataWithDate } from "./types";

export function getDateNow() {
	const date = new Date();
	return date.toISOString().split('T')[0];
}


export function getDateFormated(unFormated: string) {
	let date = new Date(unFormated);
	return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
}

export function getDateFormatedWithTime(unFormated: string) {
	let date = new Date(unFormated);
	return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}`
}


export const isToday = (someDate: Date) => {
  const today = new Date()
  return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
}


export const emptyValues: FormDataWithDate = {
	book_id: '',
	book_name: '',
	book_from: 1,
	book_to: 1,
	comment: '',
	date_of_entry: getDateNow(),
}
