import { ApprovalRequestFilter } from '../components/approval-request/approval-request-filter';
import { ApprovalRequestList } from '../components/approval-request/approval-request-list';

export const RequestApprovalScreen = () => {
  return (
    <div>
      <ApprovalRequestFilter />
      <ApprovalRequestList />
    </div>
  );
};
