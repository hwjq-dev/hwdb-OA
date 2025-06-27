'use client';

import { useGetDepartmennts } from '@/hooks/use-get-departments';

import { CustomSelect } from '../molecules/select';

interface Props {
  disable?: boolean;
  className?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const DepartmentOptionsSelect: React.FC<Props> = ({
  disable,
  className,
  placeholder,
  onChange,
}) => {
  const { data } = useGetDepartmennts();
  const transformedOptions = (data || []).map((x) => ({ lable: x.title, value: `${x.id}` }));
  return (
    <CustomSelect
      disable={disable}
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      items={transformedOptions}
    />
  );
};
