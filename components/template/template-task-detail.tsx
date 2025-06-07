import { TaskHomeDetailScreen } from '@/modules/task-management/screens/home-detail';

const TemplateTaskDetail: React.FC<{ variant?: '下级' | '上级' }> = ({ variant = '下级' }) => {
  switch (variant) {
    case '下级':
      return <TaskHomeDetailScreen />;

    case '上级':
      return null;

    default:
      return null;
  }
};

export default TemplateTaskDetail;
