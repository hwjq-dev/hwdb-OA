import { ApprovalCard, type Props as ApprovalCardProps } from './base/approval-card';
import { ApprovalFilter } from './base/approval-filter';

const items = [
  {
    id: '202506191',
    status: '审批中',
    name: '明华',
    applicationType: '处罚',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  {
    id: '202506192',
    status: '审批中',
    name: '李处',
    applicationType: '处罚',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  {
    id: '202506193',
    status: '审批中',
    name: '笑脸',
    applicationType: '处罚',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  {
    id: '202506194',
    status: '审批中',
    name: '拦住',
    applicationType: '处罚',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
  {
    id: '202506195',
    status: '审批中',
    name: '明华',
    applicationType: '处罚',
    department: '产品',
    position: '员工',
    createdAt: '2025-06-17T10:02:00+07:00',
  },
];

export const ApprovePunishmentRequest = () => {
  return (
    <div className="p-1">
      <div className="bg-primary-100 pb-2 px-2 rounded-2xl">
        <ApprovalFilter />
      </div>

      <div className="h-[78dvh] pb-4 overflow-y-auto px-1 scrollbar-none">
        <ApprovalList items={items as never} />
      </div>
    </div>
  );
};

export const ApprovalList: React.FC<{ items: ApprovalCardProps[] }> = ({ items }) => {
  return (
    <div className="mt-3 flex flex-col space-y-3">
      {items.map((x, i) => (
        <ApprovalCard key={i} {...x} href={'#'} />
      ))}
    </div>
  );
};
