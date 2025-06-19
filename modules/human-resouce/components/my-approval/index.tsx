import { MyApprovalFilter } from '../base/my-approval-filter';
import { MyApprovalList } from './my-approval-list';

const items = [
  {
    id: '202506191',
    status: '已通过',
    name: '明华',
    applicationType: '请假',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  {
    id: '202506192',
    status: '已通过',
    name: '明华',
    applicationType: '加班',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  {
    id: '202506193',
    status: '已通过',
    name: '明华',
    applicationType: '调班',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  {
    id: '202506194',
    status: '已通过',
    name: '明华',
    applicationType: '调休',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  {
    id: '202506195',
    status: '已通过',
    name: '明华',
    applicationType: '免迟到',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
];

export const MyApproval = () => (
  <div className="p-1">
    <div className="bg-primary-100 pb-2 px-2 rounded-2xl">
      <MyApprovalFilter />
    </div>

    <div className="h-[80dvh] overflow-y-auto px-1 scrollbar-none">
      <MyApprovalList items={items as never} />
    </div>
  </div>
);
