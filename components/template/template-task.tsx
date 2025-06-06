import { TaskHomeScreen } from '@/modules/task-management/screens/home';

const TemplateTask: React.FC<{ variant?: '下级' | '上级' }> = ({ variant = '下级' }) => {
  switch (variant) {
    case '下级':
      return <TaskHomeScreen />;

    case '上级':
      return null;

    default:
      return null;
  }
};

export default TemplateTask;
