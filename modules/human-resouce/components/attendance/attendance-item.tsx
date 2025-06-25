import { IconCalendarTime, IconCalendarUser } from '@tabler/icons-react';

import { CollapseWrapper } from '@/components/molecules/callapse-wrapper';
import { Badge } from '@/components/ui/badge';
import { getFormatDate, getFormatDatetime } from '@/lib/dayjs';
import { cn } from '@/lib/utils';

interface AttendanceItemProps {
  id: string | number;
  cardNumber: string;
  name: string;
  position: string;
  currentDate: string;
  department: string;
  workShift: string;
  defaultWorkStartAt: string;
  defautlWorkEndAt: string;
  workStartAt: string;
  workEndAt: string;
  isLate: boolean;
  isLeaveEarly: boolean;
  leaveEarlyAt?: string;
  lateAt?: string;
  absentAt?: string;
  isOverTime: boolean;
  isDayOff: boolean;
  overtimeStartAt?: string;
  overtimeEndAt?: string;
}

export const AttendanceItem: React.FC<AttendanceItemProps> = (props) => {
  return (
    <div className="grid grid-cols-2 border rounded-2xl relative overflow-hidden">
      <div className="relative col-span-2 px-4 py-3 bg-gray-100/60">
        <div className="flex items-center space-x-3">
          <span className="p-1.5 outline-2 outline-orange rounded-full">
            <IconCalendarUser className="text-orange size-5" />
          </span>
          <div>
            <p className="text-[11px]">工号 {props.cardNumber}</p>
            <p className="font-semibold text-sm">
              {props.name} - {props.position}
            </p>
          </div>
        </div>
        <div className="absolute right-3 top-1">
          <Badge className="text-xs mt-2">
            <IconCalendarTime className="size-5" />
            {getFormatDate(new Date(props.currentDate))}
          </Badge>
        </div>
      </div>

      <Item label="名下部门" value={props.department} />
      <Item label="班次" value={props.workShift} />
      <Item label="原定上班时间" value={getFormatDatetime(new Date(props.defaultWorkStartAt))} />
      <Item label="原定下班时间" value={getFormatDatetime(new Date(props.defautlWorkEndAt))} />
      <Item label="上班时间" value={getFormatDatetime(new Date(props.workStartAt))} />
      <Item label="下班时间" value={getFormatDatetime(new Date(props.workEndAt))} />
      <Item
        label="迟到时间"
        value={!props.absentAt ? '没有' : getFormatDatetime(new Date(props.absentAt))}
      />
      <Item
        label="早退时间"
        value={!props.leaveEarlyAt ? '没有' : getFormatDatetime(new Date(props.leaveEarlyAt))}
      />
      <CollapseWrapper>
        <Item
          label="缺勤时间"
          value={!props.absentAt ? '没有' : getFormatDatetime(new Date(props.absentAt))}
        />
        <Item label="是否迟到" value={props.isLate ? '是' : '否'} />
        <Item label="是否早退" value={props.isLeaveEarly ? '是' : '否'} />
        <Item label="是否加班" value={props.isOverTime ? '是' : '否'} />
        <Item label="是否休假" value={props.isDayOff ? '是' : '否'} />
        <Item
          label="加班开始时间"
          value={
            props.overtimeStartAt ? getFormatDatetime(new Date(props.overtimeStartAt)) : '没有'
          }
        />
        <Item
          label="加班结束时间"
          value={props.overtimeEndAt ? getFormatDatetime(new Date(props.overtimeEndAt)) : '没有'}
        />
      </CollapseWrapper>

      <div className="py-4 bg-gray-100 col-span-2" />
    </div>
  );
};

const Item: React.FC<{ label: string; value: string; className?: string }> = ({
  label,
  value,
  className,
}) => (
  <div className={cn('col-span-1 p-2 text-xs border flex flex-col space-y-1', className)}>
    <span className="font-bold">{label}</span>
    <span className="text-center text-[11px] text-dark">{value}</span>
  </div>
);
