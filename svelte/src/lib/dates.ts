const dateOptions: Intl.DateTimeFormatOptions = {
	month: "long",
	day: "numeric",
	year: "numeric"
}

export const dateFrom = (date: string) => new Date(date).toLocaleDateString("en-US", dateOptions);