import { DatePicker } from '@/components/molecules/date';

export const AttendanceFilter = () => {
  return (
    <div className="grid grid-cols-2 gap-3 pb-4 pt-1">
      <div className="flex flex-col space-y-1">
        <span className="text-sm">开始日期 : </span>
        <DatePicker className="rounded-md" placeholder="选择日期" />
      </div>
      <div className="flex flex-col space-y-1">
        <span className="text-sm">截止日期 : </span>
        <DatePicker className="rounded-md" placeholder="选择日期" />
      </div>
    </div>
  );
};
