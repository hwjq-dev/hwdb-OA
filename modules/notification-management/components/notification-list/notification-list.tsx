import { NotificationCard } from './notification-card';

export const NotificationList = () => {
  return (
    <div className="flex flex-col space-y-3">
      {[1, 2, 3, 4, 5].map((x, i) => (
        <NotificationCard key={i} />
      ))}
    </div>
  );
};
