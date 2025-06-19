import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { getFormatDatetime } from '@/lib/dayjs';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface Props {
  status: '审批中' | '已通过';
  id: string;
  name: string;
  applicationType: string;
  department: string;
  position: string;
  createdAt: string;
  linkLabel?: string;
  href?: string;
}

export const MyApprovalCard: React.FC<Props> = (props) => {
  return (
    <div className="relative px-14 rounded-2xl bg-gradient-to-r from-primary-200/80 to-primary-100 py-4 space-y-1">
      <div className="absolute top-2 right-4">
        <span
          className={cn(
            'text-sm py-1 px-2.5 border border-dashed border-yellow-300 bg-white text-yellow-500 rounded-sm',
            {
              'text-green-500 border-green-300 border-solid': props.status === '已通过',
            },
          )}
        >
          {props.status}
        </span>
      </div>
      <div className="absolute -top-1 -left-2 p-1 bg-white rounded-full">
        <Avatar className="size-12">
          <AvatarImage src="#" alt="xxx.png" />
          <AvatarFallback
            className={cn('bg-yellow-500/10 text-yellow-500 font-bold text-sm', {
              'bg-green-500/10 text-green-500': props.status === '已通过',
            })}
          >
            {props.name.substring(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
      <p className="font-bold text-sm">
        发起者： {props.name} - {props.id}
      </p>
      <p className="text-sm">审批类型 : {props.applicationType}</p>
      <p className="text-sm">
        申请部门 ：{props.department} - {props.position}
      </p>
      <p className="text-sm">申请时间 : {getFormatDatetime(new Date(props.createdAt))}</p>

      <div className="p-1 bg-white rounded-xl mt-3">
        <Button variant="default" size="sm" asChild>
          <Link href={props.href || '#'} className="w-full rounded-xl">
            {props.linkLabel ? props.linkLabel : '查看审批过程中'}
          </Link>
        </Button>
      </div>
    </div>
  );
};
