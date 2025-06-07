export const ROUTES = {
  HOME: '/',
  NOTIFICATION: '/notification',
  REQUEST: '/request',
  TASK: '/task',
  ABOUT: '/about',

  $TASK: function (id: string | number) {
    return `${this.TASK}/${id}`;
  },
} as const;
