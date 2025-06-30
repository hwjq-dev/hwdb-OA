'use client';

import { debounce } from 'radash';

import { useAuthStore } from '@/hooks/use-auth';
import { useGetStaffs } from '@/modules/task/hooks/use-staffs';

import { SearchSelect } from '../molecules/search-select';

interface Props {
  defaultValue?: string;
  disable?: boolean;
  className?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const StaffOptionsSelect: React.FC<Props> = ({
  disable,
  defaultValue,
  className,
  placeholder,
  onChange,
}) => {
  const { data: auth } = useAuthStore();
  const { data } = useGetStaffs({ department_id: auth?.department_id });

  const options = (data || [])?.map((opt) => ({
    label: `${opt.nickname}-${opt.job_title}`,
    value: `${opt.id}`,
  }));

  return (
    <SearchSelect
      disable={disable}
      className={className}
      defaultValue={defaultValue}
      placeholder={placeholder ?? '选择负责任'}
      items={[{ label: '全部', value: '-1' }, ...options]}
      onChange={(value) => {
        debounce({ delay: 500 }, function () {
          onChange(value);
        });
      }}
    />
  );
};
