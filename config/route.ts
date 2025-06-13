export const ROUTES = {
  // Main routing (主要路由)
  HOME: '/',
  NOTIFICATION: '/notification',
  HR: '/hr',
  TASK: '/task',
  ABOUT: '/about',

  // Sub routing (副路由)
  TASK_ASSIGNMENT: '/task/assignment',
  REPORT: '/task/report',
  REQUEST_APPROVAL: '/task/request-approval',
  PERSONAL_TASK: '/task/personal-task',
  ABOUT_ACCOUNTS: '/about/accounts',
  ABOUT_ATTENDENCES: '/about/attendances',
  ABOUT_PUNISHMENTS: '/about/punishments',

  $NOTIFICATION: function (id: string | number) {
    return `${this.NOTIFICATION}/${id}`;
  },

  $TASK: function (id: string | number) {
    return `${this.TASK}/${id}`;
  },

  $REQUEST_APPROVE: function (id: string | number) {
    return `${this.REQUEST_APPROVAL}/${id}`;
  },
} as const;
