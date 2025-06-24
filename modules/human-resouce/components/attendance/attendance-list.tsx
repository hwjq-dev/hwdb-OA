import { AttendanceItem } from './attendance-item';

const items = [
  {
    id: 1,
    cardNumber: 'CP-23',
    name: '明华',
    position: '员工',
    currentDate: '2025-06-24T00:00:00+07:00',
    department: '技术部',
    workShift: '早班',
    defaultWorkStartAt: '2025-06-24T00:00:00+07:00',
    defautlWorkEndAt: '2025-06-24T00:00:00+07:00',
    workStartAt: '2025-06-24T00:00:00+07:00',
    workEndAt: '2025-06-24T00:00:00+07:00',
    isLate: false,
    isLeaveEarly: false,
    isOverTime: false,
    isDayOff: false,
    overtimeStartAt: '',
    overtimeEndAt: '',
  },
  {
    id: 2,
    cardNumber: 'CP-23',
    name: '明华',
    position: '员工',
    currentDate: '2025-06-23T00:00:00+07:00',
    department: '技术部',
    workShift: '早班',
    defaultWorkStartAt: '2025-06-23T00:00:00+07:00',
    defautlWorkEndAt: '2025-06-23T00:00:00+07:00',
    workStartAt: '2025-06-23T00:00:00+07:00',
    workEndAt: '2025-06-23T00:00:00+07:00',
    isLate: false,
    isLeaveEarly: false,
    isOverTime: false,
    isDayOff: false,
    overtimeStartAt: '',
    overtimeEndAt: '',
  },
  {
    id: 3,
    cardNumber: 'CP-23',
    name: '明华',
    position: '员工',
    currentDate: '2025-06-22T00:00:00+07:00',
    department: '技术部',
    workShift: '早班',
    defaultWorkStartAt: '2025-06-22T00:00:00+07:00',
    defautlWorkEndAt: '2025-06-22T00:00:00+07:00',
    workStartAt: '2025-06-22T00:00:00+07:00',
    workEndAt: '2025-06-22T00:00:00+07:00',
    isLate: false,
    isLeaveEarly: false,
    isOverTime: false,
    isDayOff: false,
    overtimeStartAt: '',
    overtimeEndAt: '',
  },
];

export const AttendanceList = () => {
  return (
    <div className="relative h-[calc(100dvh-170px)] pb-6 overflow-y-auto scrollbar-none">
      <div className="flex flex-col space-y-4">
        {items.map((x, i) => (
          <AttendanceItem key={i} {...x} />
        ))}
      </div>
    </div>
  );
};
