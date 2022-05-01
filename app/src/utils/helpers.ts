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
