/**
 * Gets week number for date.
 * @param date :Date (the date to evaluate)
 * @returns week number of given Date
 */
export const getWeekByDate = (date: Date) => {
	const oneJan = new Date(date.getFullYear(), 0, 1);
	const numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
	return Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
};

/**
 * Gets week number for current date.
 * @returns week number of current Date
 */
export const getCurrentWeek = () => {
	const currentdate = new Date();
	return getWeekByDate(currentdate);
};

