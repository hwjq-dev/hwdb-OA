'use client';

import { IconLoader3 } from '@tabler/icons-react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { MyApprovalFilter } from '../base/my-approval-filter';
import { WaitApprovalList } from './wait-approval-list';

const items = [
  {
    id: '202506191',
    status: '审批中',
    name: '明华',
    applicationType: '请假',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  // {
  //   id: '202506192',
  //   status: '审批中',
  //   name: '明华',
  //   applicationType: '加班',
  //   department: '产品',
  //   position: '员工',
  //   createdAt: '2025-06-17T10:02:00+07:00',
  // },
  {
    id: '202506193',
    status: '审批中',
    name: '明华',
    applicationType: '调班',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  {
    id: '202506194',
    status: '审批中',
    name: '明华',
    applicationType: '调休',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  {
    id: '202506195',
    status: '审批中',
    name: '明华',
    applicationType: '免迟到',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  {
    id: '202506196',
    status: '审批中',
    name: '明华',
    applicationType: '补打卡',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  {
    id: '202506196',
    status: '审批中',
    name: '明华',
    applicationType: '处罚',
    department: '产品',
    position: '主管',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
];

export const MyWaitApproval = () => {
  return (
    <div className="p-1">
      <div className="bg-primary-100 pb-2 px-2 rounded-2xl">
        <MyApprovalFilter />
      </div>

      <div
        id="waiting-approval-scroll-container"
        className="h-[78dvh] mb-2 overflow-y-auto px-1 !scrollbar-none"
      >
        <InfiniteScroll
          dataLength={items.length}
          next={() => console.log('fetch data ...')}
          hasMore={true}
          scrollableTarget="waiting-approval-scroll-container"
          className="contents"
          loader={
            <div className="flex justify-center py-1.5 items-center">
              <IconLoader3 className="animate-spin text-primary" />
            </div>
          }
        >
          <WaitApprovalList items={items as never} />
        </InfiniteScroll>
      </div>
    </div>
  );
};
