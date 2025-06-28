import dayjs, { extend } from 'dayjs';
import 'dayjs/locale/zh-cn';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

/**
 * @link (参考链接) : https://day.js.org/docs/en/installation/installation
 */
export function getFormatDate(date: Date) {
  extend(relativeTime);
  return dayjs(date).locale('zh-cn').format('YYYY年 MM月 DD日');
}

export function getFormatDatetime(date: Date) {
  extend(relativeTime);
  return dayjs(date).locale('zh-cn').format('YYYY年 MM月 DD日 HH:mm');
}

export function getFormatHumanReadable(date: Date, flag?: boolean) {
  extend(relativeTime);
  const relative = dayjs(date).locale('zh-cn').fromNow(flag); // "3天前" or "1分钟前"
  return relative;
}

// not being used , but incase for other situation
// export function getDiffDate(startAt: Date, endAt: Date) {
//   extend(relativeTime);
//   const relative = dayjs(startAt).locale('zh-cn').from(endAt, true);
//   return relative;
// }

export function getChineseGreeting() {
  const hour = dayjs().hour();

  if (hour >= 5 && hour < 12) {
    return '早上好';
  } else if (hour >= 12 && hour < 18) {
    return '下午好';
  } else {
    return '晚上好';
  }
}

export function getDiff(startAt: Date, endAt: Date) {
  extend(duration);
  const diffMinute = dayjs(endAt).diff(startAt, 'minute');

  const d = dayjs.duration(diffMinute, 'minutes');
  const days = Math.floor(d.asDays());
  const hours = d.hours();
  const minutes = d.minutes();

  const formatDays = days > 0 ? `${days} 天` : '';
  const formatHours = hours > 0 ? `${hours} 小时` : '';
  const formatMinutes = minutes > 0 ? `${minutes} 分` : '';

  return `${formatDays} ${formatHours} ${formatMinutes}`;
}

export function formatToDateTimeString(date: Date | string | number): string {
  extend(relativeTime);
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}
