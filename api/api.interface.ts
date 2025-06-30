//-----------------------------------------
//    API INTERFACE
//-----------------------------------------

type IApiResponse<TData> = {
  code: number;
  msg: string;
  data: TData;
};

type IPaginateList<TData> = {
  current_page: number;
  limit: number;
  has_more: number;
  total: number;
  list: Array<TData>;
};

//-- DEPARTMENT TYPE
interface IDepartment {
  id: number;
  title: string;
}

//-- POSITION LEVEL
interface IPositionLevel {
  id: number;
  title: string;
}

//-- PERSONAL INFO
interface IPersonalInfo {
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
  tg_id: number;
}

//-- SELF CREATE TASK
export interface ISelfCreateTask {
  title: string;
  content: string;
  attachment?: any;
  priority: number;
  type: number;
  department_id: number;
  position_level: number;
  processor_id: number;
  start_time: string;
  complete_time: string;
}

//-- TASK

export interface IFilterTaskOptions {
  page?: number;
  keywords?: string;
  processor_id?: number;
  department_id?: number;
  priority?: number;
  status?: number;
  query_date?: string;
}

export interface ITask {
  id: number;
  task_number: string;
  title: string;
  status: number;
  priority: number;
  department_id: number;
  position_level: number;
  reviewer_id: number;
  processor_id: number;
  creator_id: number;
  type: number;
  created_at: string;
  complete_time: string;
  creator_text: string;
  time_ago: string;
  processor_text: string;
  reviewer_text: string;
  priority_text: string;
  status_text: string;
  department_text: string;
}

//-- IAttachment
export interface IAttachment {
  file_name: string;
  file_path: string;
  file_url: string;
}

//--- TASK PROCESS
export interface ITaskProcess {
  id: number;
  task_id: number;
  title: string;
  content: string;
  attachment?: Array<IAttachment>;
  type: number;
  type_text: string;
  operator: string;
  processor: string;
  reviewer: string;
  created_at: string;
  updated_at: string;
}

//--- TASK DETAIL
export interface ITaskDetail {
  id: number;
  task_number: string;
  title: string;
  status_text: string;
  content: string;
  department_id: number;
  attachment: Array<IAttachment>;
  status: number;
  priority: number;
  type: number;
  remark: string;
  complete_time: string;
  created_at: string;
  process: Array<ITaskProcess>;
}

//--- ADD TASK PROCESS
export interface IAddProcessTask {
  task_id: number;
  title?: string;
  content: string;
  type: number;
  attachment?: Array<any>;
  processor_id?: number;
  reviewer_id?: number;
}

//--- GET TASK STATS
export interface ITaskStats {
  total: number;
  assign_total: number;
  myself_total: number;
  pending_approval_total: number;
  approved_total: number;
  assigned_people_total: number;
  executing_total: number;
  completed_total: number;
  timeout_total: number;
  department_total: {
    executing_total: number;
    completed_total: number;
    pending_approval_total: number;
    approved_total: number;
    timeout_total: number;
  };
}

//--- GET STAFFS
export interface IStaffOptionFilter {
  department_id?: number;
  position_level?: number;
  job_number?: number;
}

export interface IStaff {
  id: number;
  nickname: string;
  department_id: number;
  position_level: number;
  job_title: string;
  department_text: string;
}

//--- ALL RESOURCE TYPE
export type IDepartmentResponses = IApiResponse<Array<IDepartment>>;
export type IPersonalInfoReponse = IApiResponse<IPersonalInfo>;
export type IPositionLevelResposes = IApiResponse<Array<IPositionLevel>>;
export type ISelfCreateTaskResponse = IApiResponse<object | null>;
export type ITaskResponses = IApiResponse<IPaginateList<ITask>>;
export type ITaskDetailReponse = IApiResponse<ITaskDetail>;
export type IAddProcessTaskResponse = IApiResponse<object | null>;
export type IITaskStatsResponse = IApiResponse<ITaskStats>;
export type IStaffsResponses = IApiResponse<IStaff>;
