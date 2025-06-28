//-- Official integration type
interface UserDataType {
  id: number;
  nickname: string;
  job_number: string;
  job_title: string;
  department_id: number;
  position_level: number;
  department_text: string;
  position_level_text: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

interface UserRealData {
  avatar: string;
  nickname: string;
  department_id: number;
  position_level: number;
  job_number: string;
  job_title: string;
  department_text: string;
  position_level_text: string;
  lang_text: string;
  address: string;
  gender: string;
  check_in_date: string;
  phone: string;
  email: string;
  birthday: string;
  tg_id: string | number;
}

type PriorityType = '高优先' | '中优先' | '低优先';
type StatusType = '审核中' | '执行中' | '已完成,待审核' | '审核完成' | '已关闭' | '超时';

interface TaskCardProps {
  id: number;
  taskNumber: string;
  title: string;
  timeAgo: string;
  assignee: string;
  assigner: string;
  startTime: string;
  completeTime: string;
  priority: PriorityType;
  status: StatusType;
}

//-- Temperay type
// TODO remove
// interface TaskProps {
//   id?: string | number;
//   tgId: string;
//   title: string;
//   subtitle: string;
//   assignedAt: string;
//   tgUsername?: string;
//   nickName?: string;
//   assigner?: string;
//   assignee?: string;
//   startAt?: string;
//   endAt?: string;
//   department?: string;
//   status: 'in-progress' | 'done' | 'wait-approval' | 'approved' | 'overdue' | 'under-request';
//   priority: '高优先' | '中优先' | '低优先';
// }

type ApplicationType =
  | '申请请假'
  | '申请加班'
  | '申请调休'
  | '申请调班'
  | '申请排班'
  | '申请免迟到'
  | '申请补打卡'
  | '申请转正'
  | '申请转刚'
  | '申请处罚'
  | '申请离职';

type ApprovalType =
  | '审批请假'
  | '审批加班'
  | '审批调休'
  | '审批调班'
  | '审批排班'
  | '审批免迟到'
  | '审批补打卡'
  | '审批转正'
  | '审批转刚'
  | '审批处罚'
  | '审批离职';
