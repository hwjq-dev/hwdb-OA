'use client';

import { Clock, User } from 'lucide-react';

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { getFormatDatetime } from '@/lib/dayjs';
import { cn } from '@/lib/utils';
import { TaskStatusType } from '../../base/task-list/interface';
import { getIcon, TaskStatusData } from '../../base/task-list/task-status';

const data = {
  id: 12,
  tgId: '100012',
  title: '修复系统异常Bug',
  subtitle: '定位用户反馈的崩溃问题',
  assignedAt: '2025-06-08T09:00:00+07:00',
  tgUsername: 'lili_dev',
  nickName: '丽姐',
  assigner: '开发组长',
  assignee: '丽丽',
  startAt: '2025-06-08T10:00:00+07:00',
  endAt: '2025-06-10T18:30:00+07:00',
  department: '技术部门',
  status: 'wait-approval',
  priority: '高优先',
};

export const ApproveHeaderSection = () => {
  return (
    <div className="relative grid grid-cols-5 gap-3 shadow-[0px_0px_32px_0px_#dae7f5] m-2 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center col-span-2">
        <div className="relative">
          <ChartTest />
          <Status status={data.status as never} />
        </div>
      </div>

      <div className="absolute h-3/5 border-r border-gray-200 border-dashed left-[36%] top-1/2 -translate-y-1/2" />

      <div className="py-4 col-span-3">
        <p className="font-semibold pb-2">任务状态</p>
        <div className="space-y-2">
          <div className="flex space-x-2 items-center">
            <div className="flex items-center space-x-1.5">
              <Clock className="text-primary size-4" />
              <span className="text-xs font-bold text-primary">开始时间</span>
            </div>
            <p className="text-xs text-dark">{getFormatDatetime(new Date(data.startAt))}</p>
          </div>

          <div className="flex items-center space-x-1.5">
            <div className="flex items-center space-x-1.5">
              <Clock className="text-primary size-4" />
              <span className="text-xs font-bold text-primary">截止时间</span>
            </div>
            <p className="text-xs text-dark">{getFormatDatetime(new Date(data.endAt))}</p>
          </div>
        </div>

        <div className="flex items-center space-x-1 mt-2">
          <User className="size-4 text-primary" />
          <span className="text-xs mt-0.5 text-dark">{data.assignee}</span>
        </div>
      </div>
    </div>
  );
};

export const ChartTest = () => {
  const chartData = [{ month: 'january', desktop: 2, mobile: 4 }];

  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'var(--chart-1)',
    },
    mobile: {
      label: 'Mobile',
      color: 'var(--chart-2)',
    },
  } satisfies ChartConfig;

  const totalVisitors = chartData[0].mobile;

  return (
    <div className="relative mt-1 ml-1">
      <ChartContainer config={chartConfig} className="size-32">
        <RadialBarChart data={chartData} endAngle={180} innerRadius={50} outerRadius={80}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 16}
                        className="fill-foreground text-lg font-semibold"
                      >
                        {totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 4}
                        className="fill-muted-foreground"
                      >
                        任务进度
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="desktop"
            stackId="a"
            cornerRadius={5}
            fill="#F4631E"
            className="stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="mobile"
            fill="#FF9F00"
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          />
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
};

const Status: React.FC<{ status: TaskStatusType }> = ({ status }) => {
  const Icon = getIcon(status);
  const label = TaskStatusData[status];

  return (
    <div className="absolute top-4/6 left-6">
      <p className="bg-gray-800 relative px-4.5 text-sm py-1.5 rounded-2xl text-white flex space-x-2 items-center">
        <span className="p-1 bg-white rounded-full absolute left-1 top-1 shadow-md">
          <Icon
            className={cn(
              'size-4',
              { 'text-orange-500': status == 'approved' },
              { 'text-green-500': status == 'done' },
              { 'text-gray-500': status == 'wait-approval' },
              { 'text-primary': status == 'in-progress' },
              { 'text-red-500': status == 'overdue' },
            )}
          />
        </span>
        <span className="ml-4 font-medium">{label}</span>
      </p>
    </div>
  );
};
