import { PropsWithChildren } from 'react';

import { TaskFilter } from './task-filter';

interface Props extends PropsWithChildren {
  type: StatusType;
}

export const FilterListWrapper: React.FC<Props> = ({ type, children }) => (
  <div>
    <TaskFilter type={type} />
    <div className="mt-3">{children}</div>
  </div>
);
