export default function getFormatedDateTime(date: Date) {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return new Date(date).toLocaleString('en-GB', {
    timeZone: tz,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}
