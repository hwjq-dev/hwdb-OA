import { CustomSelect } from '../molecules/select';

interface Props {
  disable?: boolean;
  className?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const PriorityOptionsSelect: React.FC<Props> = ({
  disable,
  className,
  placeholder,
  onChange,
}) => {
  return (
    <CustomSelect
      disable={disable}
      className={className}
      placeholder={placeholder}
      items={[
        { lable: '高优先', value: '3' },
        { lable: '中优先', value: '2' },
        { lable: '低优先', value: '1' },
      ]}
      onChange={onChange}
    />
  );
};
