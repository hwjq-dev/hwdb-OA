'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { usePreserveTab } from '../../store/use-preserve-tab';
import {
  TabApproveTaskListSection,
  TabOverdueTaskListSection,
  TabProgressTaskListSection,
  TabUnderRequestTaskListSection,
  TabWaitApproveTaskListSection,
} from '../shared';

const tabs = [
  { label: '审核中', value: '审核中', content: TabUnderRequestTaskListSection },
  { label: '执行中', value: '执行中', content: TabProgressTaskListSection },
  { label: '待审核', value: '待审核', content: TabWaitApproveTaskListSection },
  // { label: '已完成', value: '已完成', content: TabCompleteTaskListSection },
  { label: '已审核', value: '已审批', content: TabApproveTaskListSection },
  { label: '已超时', value: '已超时', content: TabOverdueTaskListSection },
];

export const LowPositionTabSectionList = () => {
  const { activeTab, setActiveTab } = usePreserveTab();

  return (
    <div className="p-2 mt-2">
      <Tabs value={activeTab || tabs[0].value} onValueChange={setActiveTab}>
        <div className="w-fit mx-auto">
          <TabsList className="rounded-xl bg-primary-200/50">
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
  );
};
