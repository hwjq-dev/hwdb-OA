'use client';

import { CircularProgressBar } from '@/components/molecules/circular-progress-bar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getFormatDate } from '@/lib/dayjs';

export const TaskReportHeaderSection = () => {
  return (
    <Card className="relative !pt-2 flex flex-col border-gray-200/60 shadow-[0px_0px_38px_-17px_#a6a6a6]">
      <CardHeader className="px-0">
        <div className="flex items-center py-0">
          <CircularProgressBar value={60} showLabel={false} color="green" />
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <CardTitle>日常总生产力</CardTitle>
            </div>
            <p className="text-sm text-primary font-medium">12 任务</p>
          </div>
        </div>
        <div className="px-5">
          <div className="flex justify-between items-center pb-1">
            <p className="pb-2 font-semibold">总结报告</p>
            <p className="text-xs">{getFormatDate(new Date())}</p>
          </div>
          <div className="border-t border-dashed" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-xs bg-primary py-2 px-3 font-medium text-white rounded-md">
            已分配人员 ：
            <span className="ml-3 font-bold">
              5 <span className="text-xs">个人</span>
            </span>
          </p>
          <p className="text-xs font-medium bg-primary py-2 px-3 text-white rounded-md">
            按时已完成 ：
            <span className="ml-3 font-bold">
              3 <span className="text-xs">个任务</span>
            </span>
          </p>
          <p className="text-xs font-medium bg-primary py-2 px-3 text-white rounded-md">
            已超时总数 ：
            <span className="ml-3 font-bold">
              1 <span className="text-xs">个任务</span>
            </span>
          </p>
          <p className="text-xs font-medium bg-primary py-2 px-3 text-white rounded-md">
            自助分配人员 ：<span className="ml-3 font-bold">没有</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
