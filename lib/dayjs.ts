import dayjs, { extend } from 'dayjs';
import 'dayjs/locale/zh-cn';
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

export function getFormatHumanReadable(date: Date) {
  extend(relativeTime);
  const relative = dayjs(date).locale('zh-cn').fromNow(); // "3天前" or "1分钟前"
  return relative;
}
