export const ROUTES = {
  HOME: '/',
  NOTIFICATION: '/notification',
  REQUEST: '/request',
  TASK: '/task',
  ABOUT: '/about',
  TASK_ASSIGNMENT: '/task/assignment',
  REPORT: '/task/report',
  REQUEST_APPROVAL: '/task/request-approval',
  PERSONAL_TASK: '/task/personal-task',

  $TASK: function (id: string | number) {
    return `${this.TASK}/${id}`;
  },

  $REQUEST_APPROVE: function (id: string | number) {
    return `${this.REQUEST_APPROVAL}/${id}`;
  },
} as const;
