import { AnnoucementCard } from './annoucement-card';

const items = [
  {
    id: 1,
    date: '2025-05-18',
    title: '五一假期放假安排通',
    description:
      '根据国家法定节假日安排，我司将于5月1日至5月5日放假五天，5月6日正常上班，请各部门提前做好工作安排。',
  },
  {
    id: 2,
    date: '2025-06-01',
    title: '办公区域临时停电通知',
    description:
      '因电力设备检修，公司将于6月3日（周二）上午9点至下午5点临时停电，期间请提前保存重要资料，并关闭电源设备。',
  },
  {
    id: 3,
    date: '2025-06-10',
    title: '新员工入职培训安排',
    description:
      '欢迎新同事加入！公司将于6月12日上午10点在会议室A举行新员工培训，培训内容包括企业文化、规章制度及系统使用流程。',
  },
];

export const AnnoucementList = () => {
  return (
    <div>
      {items.map((x, i) => (
        <AnnoucementCard key={i} {...x} />
      ))}
    </div>
  );
};
