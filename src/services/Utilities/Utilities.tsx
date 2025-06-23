import dayjs from "dayjs";

const formatToMonthYear = (dateStr: string): string => {
    if (!dateStr) return 'present'; // Handle empty date string
    return dayjs(dateStr).format('MMMM YYYY'); // "June 2025"
};
export { formatToMonthYear };