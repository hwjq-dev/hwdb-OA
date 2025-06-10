import { HeadTaskHomeScreen } from '@/modules/task-management/screens/home-head';
import { StaffTaskHomeScreen } from '@/modules/task-management/screens/home-staff';

const TemplateTask: React.FC<{ variant?: '下级' | '上级' }> = ({ variant = '下级' }) => {
  switch (variant) {
    case '下级':
      return <StaffTaskHomeScreen />;

    case '上级':
      return <HeadTaskHomeScreen />;

    default:
      return null;
  }
};

export default TemplateTask;
