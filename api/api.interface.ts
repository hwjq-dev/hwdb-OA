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

//--- ALL RESOURCE TYPE
export type IDepartmentResponses = IApiResponse<Array<IDepartment>>;
export type IPersonalInfoReponse = IApiResponse<IPersonalInfo>;
export type IPositionLevelResposes = IApiResponse<Array<IPositionLevel>>;
export type ISelfCreateTaskResponse = IApiResponse<object | null>;
export type ITaskResponses = IApiResponse<IPaginateList<ITask>>;
