'use client';

import { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { CreateRequest } from '../components/base/create-task/create-request';
import { ApproveTask } from '../components/home/approve-task';
import { CompleteTask } from '../components/home/complete-task';
import { OverdueTask } from '../components/home/overdue-task';
import { ProgressTask } from '../components/home/progress-task';
import { Stats } from '../components/home/stats';
import { WaitAprovalTask } from '../components/home/wait-approve-task';

export const StaffTaskHomeScreen = () => {
  const tabs = [
    { label: '执行中', value: '执行中', content: ProgressTask },
    { label: '已完成', value: '已完成', content: CompleteTask },
    { label: '审批中', value: '审批中', content: WaitAprovalTask },
    { label: '已审批', value: '已审批', content: ApproveTask },
    { label: '已超时', value: '已超时', content: OverdueTask },
  ];

  const [value, setValue] = useState(tabs[0].value || '');

  return (
    <div className="size-full">
      {/*--- 统计展现状态  ---*/}
      <Stats />

      {/*--- 自助申请任务 ---*/}
      <div className="mt-10 mx-2">
        <CreateRequest />
      </div>

      {/*--- TAB 板块 ---*/}
      <div className="p-2 mt-2">
        <Tabs value={value} onValueChange={setValue}>
          <div className="w-fit mx-auto">
            <TabsList className="bg-primary-200/50">
              {tabs.map((tab) => (
                <TabsTrigger
                  className="data-[state=active]:bg-primary max-sm:text-sm data-[state=inactive]:text-primary font-bold"
                  key={tab.value}
                  value={tab.value}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tabs.map((tab) => (
            <TabsContent key={`content-${tab.value}`} className="border-none p-0" value={tab.value}>
              <tab.content />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* <div className="p-2 mt-1">
        <TaskList />
      </div> */}
    </div>
  );
};
