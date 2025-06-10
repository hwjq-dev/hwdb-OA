import { TaskHomeDetailScreen } from '@/modules/task-management/screens/home-detail';
import { HeadTaskHomeDetailScreen } from '@/modules/task-management/screens/home-head-detail';

const TemplateTaskDetail: React.FC<{ variant?: '下级' | '上级' }> = ({ variant = '下级' }) => {
  switch (variant) {
    case '下级':
      return <TaskHomeDetailScreen />;

    case '上级':
      return <HeadTaskHomeDetailScreen />;

    default:
      return null;
  }
};

export default TemplateTaskDetail;
