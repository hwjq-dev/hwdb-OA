import { Step } from '@/components/molecules/step';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getDiff, getFormatDatetime } from '@/lib/dayjs';
import { cn } from '@/lib/utils';

const data = {
  id: '202506191',
  name: '明华',
  status: '审批中',
  requestType: '请假',
  title: '事假',
  cardNumber: 'CP-23',
  department: '产品',
  position: '员工',
  createdAt: '2025-06-17T10:02:00+07:00',
  startAt: '2025-06-17T10:02:00+07:00',
  endAt: '2025-06-19T15:40:09+07:00',
  reason: '因身体不适，请假一天休息。',
};

export const LeaveRequestDetail = () => {
  return (
    <div className="space-y-3">
      <div className="relative rounded-2xl p-2 shadow-[0px_0px_23px_0px_rgba(0,_0,_0,_0.1)]">
        <div className="bg-white p-2 rounded-xl">
          <div className="flex space-x-3 items-center mt-1">
            <div className="p-1 bg-white rounded-full">
              <Avatar className="size-12">
                <AvatarImage src="#" alt="xxx.png" />
                <AvatarFallback
                  className={cn('bg-yellow-500/10 text-yellow-500 font-bold text-sm', {
                    'bg-green-500/10 text-green-500': data.status === '已通过',
                  })}
                >
                  {data.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
            </div>
            <div>
              <p className="font-bold">{data.name}</p>
              <p
                className={cn('text-xs text-yellow-500', {
                  'text-green-500': data.status === '已通过',
                })}
              >
                {data.status}
              </p>
            </div>
          </div>

          <Badge
            className="absolute top-5 right-5 bg-white text-primary border-primary-200"
            variant="outline"
          >
            工号： {data.cardNumber}
          </Badge>

          <div className="w-[95%] mt-4 mx-auto border-gray-200 h-0.5 border-t border-dashed" />

          <div className="[&>*]:pl-2 space-y-2 pt-5 pb-2">
            <p className="grid grid-cols-3">
              <span className="font-bold text-sm col-span-1">审批编号</span>
              <span className="col-span-2 text-sm ml-1">{data.id}</span>
            </p>

            <p className="grid grid-cols-3">
              <span className="font-bold col-span-1 text-sm">申请者</span>
              <span className="col-span-2 ml-1">
                {data.name} - {data.position}
              </span>
            </p>

            <p className="grid grid-cols-3 items-center">
              <span className="font-bold col-span-1 text-sm">审批类型</span>
              <span className="col-span-2 ml-1">
                {data.requestType} - {data.title}
              </span>
            </p>

            <p className="grid grid-cols-3">
              <span className="font-bold col-span-1 text-sm">申请时间</span>
              <span className="text-sm ml-1 col-span-2">
                {getFormatDatetime(new Date(data.createdAt))}
              </span>
            </p>

            <p className="grid grid-cols-3">
              <span className="font-bold col-span-1 text-sm">开始时间</span>
              <span className="text-sm ml-1 col-span-2">
                {getFormatDatetime(new Date(data.startAt))}
              </span>
            </p>

            <p className="grid grid-cols-3">
              <span className="font-bold col-span-1 text-sm">截止时间</span>
              <span className="text-sm ml-1 col-span-2">
                {getFormatDatetime(new Date(data.endAt))}
              </span>
            </p>

            <p className="grid grid-cols-3">
              <span className="font-bold col-span-1 text-sm">请假时长</span>
              <span className="text-sm ml-1 col-span-2">
                {getDiff(new Date(data.startAt), new Date(data.endAt))}
              </span>
            </p>

            <p className="grid grid-cols-3">
              <span className="font-bold col-span-1 text-sm">请假原因</span>
              <span className="text-sm ml-1 col-span-2">{data.reason}</span>
            </p>
          </div>
        </div>
      </div>

      <Steppers />
    </div>
  );
};

const Steppers = () => {
  return (
    <div className="relative rounded-2xl p-2 shadow-[0px_0px_23px_0px_rgba(0,_0,_0,_0.1)]">
      <div className="bg-white p-3 rounded-xl flex flex-col space-y-8">
        {/*-- step1 --*/}
        <Step
          type="default"
          title="发起申请"
          subtitle={`${data.name} - ${data.department}${data.position}`}
          date="2025-06-20"
          label="发起"
          isApproved
        />

        {/*-- step2 --*/}
        <Step
          type="主管"
          title="部门主管"
          subtitle={`利税 - 产品主管`}
          date="2025-06-20"
          label="通过"
          isApproved
        />

        {/*-- step3 --*/}
        <Step type="人事" title="人事经理" subtitle="" label="待定" isApproved={false} />

        {/*-- step4 --*/}
        <Step
          type="经理"
          title="部门经理"
          subtitle="李敏 - 产品经理"
          date="2025-06-19"
          label="待定"
          isApproved={true}
        />

        {/*-- step5 --*/}
        <Step type="总经理" title="总经理" subtitle="" label="待定" isApproved={false} />
      </div>
    </div>
  );
};
