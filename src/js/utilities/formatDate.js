/**
 * This function formats a date input into a readable string.
 *
 * @function formatDate
 * @param {string | Date} dateInput - The date to format, either as a string or a Date object.
 * @returns {string} The formatted date as a string in the format "Month Day, Year, Hour:Minute AM/PM".
 *
 * @example
 * const formattedDate = formatDate("2024-09-29T12:00:00Z");
 * console.log(formattedDate); // Output: "September 29, 2024, 12:00 PM"
 *
 * @example
 * const currentDate = new Date();
 * const formattedCurrentDate = formatDate(currentDate);
 * console.log(formattedCurrentDate); // Output: e.g. "September 29, 2024, 12:00 PM"
 */

export function formatDate(dateInput) {
  const date = new Date(dateInput);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options);
}
