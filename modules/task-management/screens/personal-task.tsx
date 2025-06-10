import { PersonalTaskCreate } from '../components/personal-task/personal-task-create';
import { PersonalTaskFilter } from '../components/personal-task/personal-task-filter';
import { PersonalTaskList } from '../components/personal-task/personal-task-list';

export const PersonalTaskScreen = () => {
  return (
    <div className="px-2">
      <PersonalTaskCreate />
      <PersonalTaskFilter />
      <PersonalTaskList />
    </div>
  );
};
