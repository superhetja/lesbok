export function getDateNow() {
	const date = new Date();
	return date.toISOString().split('T')[0];
}


export function getDateFormated(unFormated: string) {
	let date = new Date(unFormated);
	return `${date.getDay()}. ${date.getMonth()} ${date.getFullYear()}`
}
