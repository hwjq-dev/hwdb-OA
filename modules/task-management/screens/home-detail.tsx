import { CreateProgress } from '../components/base/create-task-progress';
import { HeaderSection } from '../components/home/detail/header-section';
import { ProgressList } from '../components/home/detail/progress-list';

export const TaskHomeDetailScreen: React.FC = () => {
  return (
    <div>
      <HeaderSection />
      <CreateProgress />
      <ProgressList />
    </div>
  );
};
