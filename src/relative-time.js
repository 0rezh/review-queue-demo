/**
 * Describes how long ago a date was, in hours or days.
 * @param {Date} date Date in the past.
 * @param {Date} [now] Reference date, defaults to the current time.
 */
export function relativeTime(date, now = new Date()) {
  const hours = Math.floor((now - date) / 36e5);
  return hours < 24 ? `${hours}h ago` : `${Math.floor(hours / 24)}d ago`;
}
