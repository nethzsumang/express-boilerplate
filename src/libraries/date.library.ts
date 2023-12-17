import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

/**
 * Gets current UTC date and formats it
 * @param   {string} format 
 * @returns {string}
 */
export function getCurrentUtc(format: string = 'YYYY-MM-DD HH:mm:ss'): string {
    return dayjs.utc().format(format);
}