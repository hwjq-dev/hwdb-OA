import { TaskReportHeaderSection } from '../components/task-report/task-report-header-section';
import { TaskReportPieChar } from '../components/task-report/task-report-pie-chart';

export const TaskReportScreen = () => {
  return (
    <div className="p-2 space-y-2">
      <TaskReportHeaderSection />
      <TaskReportPieChar />
    </div>
  );
};
