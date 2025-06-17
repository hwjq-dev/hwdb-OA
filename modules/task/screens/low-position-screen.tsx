import { LowPositionStats } from '../components/low-position/low-position-stats';
import { LowPositionTabSectionList } from '../components/low-position/low-position-tab-section-list';
import { CreateTaskForm } from '../components/shared/create-task-from';

export const LowPositionScreen = () => {
  return (
    <div className="size-full">
      <LowPositionStats />
      <div className="mt-10 mx-2">
        <CreateTaskForm />
      </div>
      <LowPositionTabSectionList />
    </div>
  );
};
