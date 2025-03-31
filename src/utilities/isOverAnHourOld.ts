export function isOverAnHourOld(isoString: string): boolean {
	// Parse the ISO string into a Date object
	const date = new Date(isoString);

	// Calculate the difference in milliseconds between now and the given date
	const diffMs = Date.now() - date.getTime();

	// Define one hour in milliseconds
	const oneHourMs = 60 * 60 * 1000;

	// Check if the difference is greater than one hour
	return diffMs > oneHourMs;
}
