'use client';

import { HeadMenu } from '../components/home-head/head-menu';
import { HeadStats } from '../components/home-head/head-stats';
import { HeadFilter } from '../components/home-head/home-filter';
import { HomeList } from '../components/home-head/home-list';
import { ApproveTask } from '../components/home/approve-task';
import { CompleteTask } from '../components/home/complete-task';
import { OverdueTask } from '../components/home/overdue-task';
import { ProgressTask } from '../components/home/progress-task';
import { WaitAprovalTask } from '../components/home/wait-approve-task';

export const HeadTaskHomeScreen = () => {
  const tabs = [
    { label: '执行中', value: '执行中', content: ProgressTask },
    { label: '已完成', value: '已完成', content: CompleteTask },
    { label: '审批中', value: '审批中', content: WaitAprovalTask },
    { label: '已审批', value: '已审批', content: ApproveTask },
    { label: '已超时', value: '已超时', content: OverdueTask },
  ];

  return (
    <div className="size-full overflow-auto">
      {/*--- 统计展现状态  ---*/}
      <HeadStats />
      <HeadMenu />

      <div className="border-l-4 rounded-xs border-primary/90 pl-2 mx-2 mt-2">
        <p className="font-medium text-gray-800">所有任务</p>
      </div>

      <HeadFilter />
      <HomeList />
    </div>
  );
};
