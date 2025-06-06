import dayjs, { extend } from 'dayjs';
import 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';

/**
 * @link (参考链接) : https://day.js.org/docs/en/installation/installation
 */
export function getHumanReadablePeriod(date: Date) {
  extend(relativeTime);
  return dayjs(date).locale('zh-cn').format('YYYY年 MM月 DD日');
}

export function getFormatDate(date: Date) {
  return dayjs(date).format('MMMM D, YYYY h:mm A');
}
