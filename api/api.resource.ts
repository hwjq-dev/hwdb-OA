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
      processor_id: options?.processor_id ? options?.processor_id : undefined,
      priority: options?.priority ? options?.priority : undefined,
      department_id: options?.department_id ? options?.department_id : undefined,
      status: options?.status ? options.status : undefined,
      query_date: options?.query_date ? options?.query_date : undefined,
    },
  });

  console.log('real : ', response);

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
