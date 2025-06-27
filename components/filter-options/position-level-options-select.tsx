'use client';

import { useGetPositionLevels } from '@/hooks/use-get-position-level';

import { CustomSelect } from '../molecules/select';

interface Props {
  disable?: boolean;
  className?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const PositionLevelOptionsSelect: React.FC<Props> = ({
  disable,
  className,
  placeholder,
  onChange,
}) => {
  const { data } = useGetPositionLevels();
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
