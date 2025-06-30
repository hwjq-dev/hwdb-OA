import * as I from './api.interface';
import fetchApi from './api.main';

/**
 * Prompt : Get all department
 */
export async function getDepartments() {
  const response = await fetchApi<I.IDepartmentResponses>('/common/get_department_list', {
    method: 'POST',
  });
  if (response?.code !== 200) return [];
  return response.data || [];
}

/**
 * Prompt : Get all position level
 */
export async function getPositionLevels() {
  const response = await fetchApi<I.IDepartmentResponses>('/common/get_position_level_list', {
    method: 'POST',
  });
  if (response?.code !== 200) return [];
  return response.data || [];
}

/**
 * Prompt : Get personal info
 */
export async function getPersonalInfo() {
  const response = await fetchApi<I.IPersonalInfoReponse>('/member/info', {
    method: 'POST',
  });
  if (response?.code !== 200) return null;
  return response.data;
}

/**
 * Prompt : Create self task
 */
export async function createSelfTask(data: I.ISelfCreateTask) {
  return fetchApi<I.ISelfCreateTaskResponse>('/task/create', {
    method: 'POST',
    body: data,
  });
}

/**
 * Prompt : List Tasks
 */
export async function getTasks(options?: I.IFilterTaskOptions) {
  const response = await fetchApi<I.ITaskResponses>('/task/list', {
    method: 'POST',
    body: {
      page: options?.page || 2,
      keywords: options?.keywords ? options?.keywords : undefined,
      processor_id: options?.processor_id ? options?.processor_id : undefined,
      priority: options?.priority ? options?.priority : undefined,
      department_id: options?.department_id ? options?.department_id : undefined,
      status: options?.status ? options.status : undefined,
      query_date: options?.query_date ? options?.query_date : undefined,
    },
  });

  if (response?.code !== 200) return {};

  return {
    page: response.data.current_page,
    limit: response.data.limit,
    hasMore: response.data.has_more,
    data:
      response.data.list.map((x) => ({
        id: x.id,
        title: x.title,
        taskNumber: x.task_number,
        timeAgo: x.time_ago,
        assignee: x.processor_text,
        assigner: x.reviewer_text,
        startTime: x.created_at,
        completeTime: x.complete_time,
        priority: x.priority_text as PriorityType,
        status: x.status_text as StatusType,
      })) || [],
  };
}

/**
 * Prompt : Task Dtail
 */
export async function getTaskDetail(id: number) {
  const response = await fetchApi<I.ITaskDetailReponse>('/task/detail', {
    method: 'POST',
    body: { task_id: id },
  });
  if (response?.code != 200) return {} as I.ITaskDetail;
  return response.data as I.ITaskDetail;
}

/**
 * Prompt : Add process task
 */
export async function addProcessTask(data: I.IAddProcessTask) {
  return fetchApi<I.IAddProcessTaskResponse>('/task/handle', {
    method: 'POST',
    body: data,
  });
}

/**
 * Prompt : Get task stats
 */
export async function getTaskStats() {
  const response = await fetchApi<I.IAddProcessTaskResponse>('/task/stat', {
    method: 'POST',
  });
  if (response?.code !== 200) return {} as I.ITaskStats;
  return response.data as I.ITaskStats;
}

/**
 * Prompt : Get task stats
 */
export async function getStaffs(options?: I.IStaffOptionFilter) {
  const response = await fetchApi<I.IAddProcessTaskResponse>('/common/get_member_list', {
    method: 'POST',
    body: {
      department_id: options?.department_id ? options?.department_id : undefined,
      position_level: options?.position_level ? options?.position_level : undefined,
      job_number: options?.job_number ? options?.job_number : undefined,
    },
  });

  if (response?.code !== 200) return {} as I.IStaff[];
  return response.data as I.IStaff[];
}
