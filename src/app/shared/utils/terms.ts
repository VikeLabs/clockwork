import dayjs from 'dayjs';

/**
 * Fetches the readable text version of a term.
 *
 * @param {string} term i.e. '202101'
 * @return {string} 'Spring 2021'
 */
export function getReadableTerm(term: string): string {
  const yearRegex = /\d{4}/g;
  const monthRegex = /(\d{4})(\d{2})/;
  const year = yearRegex.exec(term)![0];
  let month = monthRegex.exec(term)![2];

  if (month === '01') month = 'Spring';
  else if (month === '05') month = 'Summer';
  else month = 'Fall';

  return `${month} ${year}`;
}

/**
 * Fetches the current terms of a school year given a date.
 *
 * @param {dayjs.Dayjs} date
 * @return {string[]} array of terms ['202009', '202101', '202105']
 */
export function getCurrentTerms(date: dayjs.Dayjs = dayjs()): string[] {
  const year = date.year().toString();
  const prevYear = (date.year() - 1).toString();
  const nextYear = (date.year() + 1).toString();
  const currMonth = date.month();

  if (0 <= currMonth && currMonth < 4) {
    return [`${prevYear}09`, `${year}01`, `${year}05`];
  } else if (4 <= currMonth && currMonth < 10) {
    return [`${year}05`, `${year}09`, `${nextYear}01`];
  } else {
    return [`${year}09`, `${nextYear}01`, `${nextYear}05`];
  }
}

/**
 * Fetches the current term given a date.
 *
 * @param {dayjs.Dayjs} date
 * @return {string} current term i.e. '202101'
 */
export function getCurrentTerm(date: dayjs.Dayjs = dayjs()): string {
  const year = date.year().toString();
  const currMonth = date.month();
  let month = '';

  if (0 <= currMonth && currMonth < 4) month = '01';
  else if (4 <= currMonth && currMonth < 10) month = '05';
  else month = '09';

  return `${year}${month}`;
}
