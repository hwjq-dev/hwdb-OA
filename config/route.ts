export const ROUTES = {
  //-- Default-Routing
  HOME: '/',
  DASHBOARD: '/dashboard',

  //-- Organization Structure-Routing
  ORGANIZATIONAL_STRUCTURE: '/organizational-structure',
  $ORGANZATIONAL_STRUCTURE: function (id: string | number) {
    return `${this.ORGANIZATIONAL_STRUCTURE}/${id}`;
  },

  //-- Annoucement-Routing
  ANNOUCEMENT: '/annoucement',

  //-- Notification-Routing
  NOTIFICATION: '/notification',
  $NOTIFICATION: function (id: string | number) {
    return `${this.NOTIFICATION}/${id}`;
  },

  //-- Task-Routing
  TASK: '/task',
  TASK_ASSIGNMENT: '/task/assignment',
  TASK_PERSONAL_TASK: '/task/personal-task',
  TASK_REPORT: '/task/report',
  TASK_REQUEST_APPROVAL: '/task/request-approval',

  $TASK: function (id: string | number) {
    return `${this.TASK}/${id}`;
  },

  $TASK_REQUEST_APPROVE: function (id: string | number) {
    return `${this.TASK_REQUEST_APPROVAL}/${id}`;
  },

  //-- HR-Routing
  HR: '/hr',
  HR_APPLICATION: '/hr/application',
  HR_APPROVED: '/hr/approved',
  HR_WAIT_APPROVAL: '/hr/wait-approval',
  HR_SUBMISSION: '/hr/submission',
  $HR_APPLICATION: function (params: ApplicationType) {
    return `${this.HR_APPLICATION}?type=${params}`;
  },
  HR_APPROVAL: '/hr/approval',
  //TODO: add type to params
  $HR_APPROVAL: function (params: string) {
    return `${this.HR_APPROVAL}?type=${params}`;
  },

  //-- Profile-Routing
  PROFILE: '/profile',
  PROFILE_ACCOUNTS: '/profile/accounts',
  PROFILE_ATTENDENCES: '/profile/attendances',
  PROFILE_PUNISHMENTS: '/profile/punishments',
} as const;
