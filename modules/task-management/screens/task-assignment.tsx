import { TaskAssignmentCreate } from '../components/task-assignment/task-assignment-create';
import { TaskAssignmentFilter } from '../components/task-assignment/task-assignment-filter';
import { TaskAssignmentList } from '../components/task-assignment/task-assignment-list';

export const TaskAssignmentScreen = () => {
  return (
    <div>
      <TaskAssignmentCreate />
      <TaskAssignmentFilter />
      <TaskAssignmentList />
    </div>
  );
};
