import { PropsWithChildren } from 'react';

import { TaskFilter } from './task-filter';

export const FilterListWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div>
    <TaskFilter />
    <div className="mt-3">{children}</div>
  </div>
);
