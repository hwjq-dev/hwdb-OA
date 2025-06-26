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
 * Prompt : Get personal info
 */
export async function getPersonalInfo() {
  const response = await fetchApi<I.IPersonalInfoReponse>('/member/info', {
    method: 'POST',
  });
  if (response?.code !== 200) return null;
  return response.data;
}
