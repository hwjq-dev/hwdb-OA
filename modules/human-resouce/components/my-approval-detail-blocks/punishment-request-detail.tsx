import { OfficialBadge } from '@/components/molecules/official-badge';
import { Step } from '@/components/molecules/step';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getFormatDatetime } from '@/lib/dayjs';
import { cn } from '@/lib/utils';

const data = {
  id: '202506192',
  name: 'KK',
  status: '审批中',
  requestType: '处罚',
  title: '',
  cardNumber: 'CP-21',
  department: '产品',
  position: '主管',
  createdAt: '2025-06-17T10:02:00+07:00',

  punishedStaffCardNumber: 'CP-23',
  punishedStaffName: '明华',
  punishedType: '罚款',
  punishedDate: '2025-06-17T10:02:00+07:00',
  punishedResult: '空白空白空白空白空',
  reason: '空白空白空白空白空白',
};

export const PunishmentRequestDetail = () => {
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
            <p className="grid grid-cols-3 items-center">
              <span className="font-bold text-sm col-span-1">审批编号</span>
              <span className="col-span-2 text-sm ml-1">{data.id}</span>
            </p>

            <p className="grid grid-cols-3 items-center">
              <span className="font-bold col-span-1 text-sm">申请者</span>
              <span className="col-span-2 ml-1">
                {data.name} - {data.position}
              </span>
            </p>

            <p className="grid grid-cols-3 items-center">
              <span className="font-bold col-span-1 text-sm">部门</span>
              <span className="col-span-2 ml-1">{data.department}</span>
            </p>

            <p className="grid grid-cols-3 items-center">
              <span className="font-bold col-span-1 text-sm">审批类型</span>
              <span className="col-span-2 ml-1">
                {data.requestType} {data.title && `- ${data.title}`}
              </span>
            </p>

            <p className="grid grid-cols-3 items-center">
              <span className="font-bold col-span-1 text-sm">申请时间</span>
              <span className="text-sm ml-1 col-span-2">
                {getFormatDatetime(new Date(data.createdAt))}
              </span>
            </p>

            <p className="grid grid-cols-3 items-center">
              <span className="font-bold col-span-1 text-sm">人员工号</span>
              <span className="text-sm ml-1 col-span-2">{data.punishedStaffCardNumber}</span>
            </p>

            <p className="grid grid-cols-3 items-center">
              <span className="font-bold col-span-1 text-sm">人员姓名</span>
              <span className="text-sm ml-1 col-span-2">{data.punishedStaffName}</span>
            </p>

            <p className="grid grid-cols-3 items-center">
              <span className="font-bold col-span-1 text-sm">处罚类型</span>
              <span className="text-sm ml-1 col-span-2">{data.punishedType}</span>
            </p>

            <p className="grid grid-cols-3 items-center">
              <span className="font-bold col-span-1 text-sm">生效日期</span>
              <span className="text-sm ml-1 col-span-2">
                {getFormatDatetime(new Date(data.punishedDate))}
              </span>
            </p>

            <p className="grid grid-cols-3 items-center">
              <span className="font-bold col-span-1 text-sm">处罚原因</span>
              <span className="text-sm ml-1 col-span-2">{data.reason}</span>
            </p>

            <p className="grid grid-cols-3 items-center">
              <span className="font-bold col-span-1 text-sm">处罚结果</span>
              <span className="text-sm ml-1 col-span-2">{data.punishedResult}</span>
            </p>
          </div>
        </div>

        {data.status === '已通过' && (
          <div className="absolute bottom-6 z-20 right-3">
            <OfficialBadge label="已通过" />
          </div>
        )}
      </div>

      <Steppers />
    </div>
  );
};

const Steppers = () => {
  return (
    <div className="relative rounded-2xl px-2 pb-2 pt-6 shadow-[0px_0px_23px_0px_rgba(0,_0,_0,_0.1)]">
      <div className="bg-white p-3 rounded-xl flex flex-col space-y-8">
        {/*-- step1 --*/}
        <Step
          type="default"
          title="发起申请"
          subtitle={`${data.name} - ${data.department}部门`}
          date="2025-06-20"
          label="发起"
          isApproved
        />

        {/*-- step2 --*/}
        <Step
          //
          type="经理"
          title={`产品经理`}
          //  subtitle={`利税 - 产品部门`}
          isApproved={false}
        />

        {/*-- step4 --*/}
        <Step
          type="主管"
          title="行政主管"
          subtitle="安民 - 行政部门"
          date="2025-06-20"
          isApproved={true}
        />
      </div>
    </div>
  );
};
