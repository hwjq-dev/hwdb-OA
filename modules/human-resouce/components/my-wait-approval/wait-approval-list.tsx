import { ROUTES } from '@/config/route';
import { MyApprovalCard, type Props as MyApprovalCardProps } from '../base/my-approval-card';

export const WaitApprovalList: React.FC<{ items: MyApprovalCardProps[] }> = ({ items }) => {
  return (
    <div className="mt-3 flex flex-col space-y-3">
      {items.map((x, i) => (
        <MyApprovalCard key={i} {...x} href={ROUTES.$HR_DETAIL(i + 1, x.applicationType)} />
      ))}
    </div>
  );
};
