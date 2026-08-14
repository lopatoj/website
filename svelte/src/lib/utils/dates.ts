const dateOptions: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
  year: "numeric",
};

export const dateFrom = (date: string | null | undefined) => {
  if (!date) {
    return "";
  }

  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  return parsed.toLocaleDateString("en-US", dateOptions);
};

export const thisYear = () => new Date().getFullYear();
