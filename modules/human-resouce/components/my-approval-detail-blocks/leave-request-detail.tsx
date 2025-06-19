import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getDiff, getFormatDatetime } from '@/lib/dayjs';
import { cn } from '@/lib/utils';
import { IconUser } from '@tabler/icons-react';
import { CircleCheckBig } from 'lucide-react';

const data = {
  id: '202506191',
  name: '明华',
  status: '审批中',
  requestType: '请假',
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
      <div className="relative bg-gray-50 rounded-2xl p-2">
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
              <p className="text-xs text-yellow-500">{data.status}</p>
            </div>
          </div>

          <Badge
            className="absolute top-5 right-5 bg-white text-primary border-primary-200"
            variant="outline"
          >
            {data.requestType}
          </Badge>

          <div className="w-5/6 mt-4 mx-auto border-gray-200 h-0.5 border-t border-dashed" />

          <div className="px-3 [&>*]:pl-2 space-y-1.5 pt-4">
            <p>
              <span className="font-bold">审批编号</span> : {data.id}
            </p>
            <p>
              <span className="font-bold">申请者</span> : {data.name}
            </p>

            <p>
              <span className="font-bold">申请时间</span> :
              <span className="text-sm ml-1">{getFormatDatetime(new Date(data.createdAt))}</span>
            </p>
            <p>
              <span className="font-bold">开始时间</span> :
              <span className="text-sm ml-1">{getFormatDatetime(new Date(data.startAt))}</span>
            </p>
            <p>
              <span className="font-bold">截止时间</span> :
              <span className="text-sm ml-1">{getFormatDatetime(new Date(data.endAt))}</span>
            </p>
            <p>
              <span className="font-bold">合计时长</span> :
              <span className="text-sm ml-1">
                {getDiff(new Date(data.startAt), new Date(data.endAt))}
              </span>
            </p>
            <p>
              <span className="font-bold">请假原因</span> :
              <span className="text-sm ml-1">{data.reason}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 rounded-2xl p-2">
        <div className="bg-white p-3 rounded-xl flex flex-col space-y-8">
          {/*-- step1 --*/}
          <div className="relative flex items-start space-x-3">
            <div className="bg-orange-50 rounded-full p-3 w-fit">
              <IconUser className="size-6 text-orange" />
            </div>
            <div>
              <p className="text-sm font-bold flex items-center space-x-2">
                <span>发起申请</span>
                {/* <span>
                  <CircleCheckBig className="size-4 text-green-500" />
                </span> */}
              </p>
              <p className="text-[10px] mt-1">{getFormatDatetime(new Date(data.createdAt))}</p>
              <p className="text-xs font-medium">
                {data.name} - {data.department}
                {data.position}
              </p>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex space-x-2 items-center">
              <span>
                <CircleCheckBig className="size-5 text-green-500" />
              </span>
              <span className="text-sm text-dark">发起人</span>
            </div>
            <div className="h-12 w-0.5 bg-gray-100 absolute -bottom-10 left-6" />
          </div>

          {/*-- step2 --*/}
          <div className="relative flex items-start space-x-3">
            <div className="bg-orange-50 rounded-full p-3 w-fit">
              <IconUser className="size-6 text-orange" />
            </div>
            <div>
              <p className="text-sm font-bold flex items-center space-x-2">
                <span>发起申请</span>
                {/* <span>
                  <CircleCheckBig className="size-4 text-green-500" />
                </span> */}
              </p>
              <p className="text-[10px] mt-1">{getFormatDatetime(new Date(data.createdAt))}</p>
              <p className="text-xs font-medium">
                {data.name} - {data.department}
                {data.position}
              </p>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex space-x-2 items-center">
              <span>
                <CircleCheckBig className="size-5 text-green-500" />
              </span>
              <span className="text-sm text-dark">发起人</span>
            </div>
            <div className="h-12 w-0.5 bg-gray-100 absolute -bottom-10 left-6" />
          </div>

          {/*-- step3 --*/}
          <div className="relative flex items-start space-x-3">
            <div className="bg-orange-50 rounded-full p-3 w-fit">
              <IconUser className="size-6 text-orange" />
            </div>
            <div>
              <p className="text-sm font-bold flex items-center space-x-2">
                <span>发起申请</span>
                {/* <span>
                  <CircleCheckBig className="size-4 text-green-500" />
                </span> */}
              </p>
              <p className="text-[10px] mt-1">{getFormatDatetime(new Date(data.createdAt))}</p>
              <p className="text-xs font-medium">
                {data.name} - {data.department}
                {data.position}
              </p>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex space-x-2 items-center">
              <span>
                <CircleCheckBig className="size-5 text-green-500" />
              </span>
              <span className="text-sm text-dark">发起人</span>
            </div>
            <div className="h-12 w-0.5 bg-gray-100 absolute -bottom-10 left-6" />
          </div>

          {/*-- step4 --*/}
          <div className="relative flex items-start space-x-3">
            <div className="bg-orange-50 rounded-full p-3 w-fit">
              <IconUser className="size-6 text-orange" />
            </div>
            <div>
              <p className="text-sm font-bold flex items-center space-x-2">
                <span>发起申请</span>
                {/* <span>
                  <CircleCheckBig className="size-4 text-green-500" />
                </span> */}
              </p>
              <p className="text-[10px] mt-1">{getFormatDatetime(new Date(data.createdAt))}</p>
              <p className="text-xs font-medium">
                {data.name} - {data.department}
                {data.position}
              </p>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex space-x-2 items-center">
              <span>
                <CircleCheckBig className="size-5 text-green-500" />
              </span>
              <span className="text-sm text-dark">发起人</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
