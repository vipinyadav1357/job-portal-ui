import dayjs from "dayjs";

const formatToMonthYear = (dateStr: string): string => {
    if (!dateStr) return 'present'; // Handle empty date string
    return dayjs(dateStr).format('MMMM YYYY'); // "June 2025"
};

const formatDateToDayFromCurrentDate = (dateStr: string): string => {
    if (!dateStr) return '';

    const now = dayjs();
    const givenDate = dayjs(dateStr);

    const secondsDiff = now.diff(givenDate, 'second');
    if (secondsDiff < 60) {
        return `${secondsDiff} second${secondsDiff === 1 ? '' : 's'} `;
    }

    const minutesDiff = now.diff(givenDate, 'minute');
    if (minutesDiff < 60) {
        return `${minutesDiff} minute${minutesDiff === 1 ? '' : 's'} `;
    }

    const hoursDiff = now.diff(givenDate, 'hour');
    if (hoursDiff < 24) {
        return `${hoursDiff} hour${hoursDiff === 1 ? '' : 's'} `;
    }

    const daysDiff = now.diff(givenDate, 'day');
    if (daysDiff <= 31) {
        return `${daysDiff} day${daysDiff === 1 ? '' : 's'}  `;
    }

    const monthsDiff = now.diff(givenDate, 'month');
    if (monthsDiff < 12) {
        return `${monthsDiff} month${monthsDiff === 1 ? '' : 's'} `;
    }

    const yearsDiff = now.diff(givenDate, 'year');
    return `${yearsDiff} year${yearsDiff === 1 ? '' : 's'} `;
};
const openResume = (base64: string) => {
    openBase64InNewTab(base64);
};
const openBase64InNewTab = (base64String: string) => {
    const newWindow = window.open();
    if (newWindow) {
        newWindow.document.writeln(`
        <iframe 
          src="${base64String}" 
          frameborder="0" 
          style="border:0; top:0; left:0; bottom:0; right:0; 
                 width:100%; height:100%;" 
          allowfullscreen>
        </iframe>
      `);
        newWindow.document.title = "Applicant Resume";
        newWindow?.document.close();
    } else {
        console.error("Could not open new window. Check pop-up blockers.");
    }
}
export { formatToMonthYear, formatDateToDayFromCurrentDate, openResume };