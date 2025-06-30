import { CustomSelect } from '../molecules/select';

interface Props {
  defaultValue?: string;
  disable?: boolean;
  className?: string;
  placeholder: string;
  onChange: (value: string) => void;
}

export const StatusOptionsSelect: React.FC<Props> = ({
  disable,
  defaultValue,
  className,
  placeholder,
  onChange,
}) => {
  return (
    <CustomSelect
      value={defaultValue ?? '-1'}
      disable={disable}
      className={className}
      placeholder={placeholder}
      items={[
        { lable: '全部', value: '-1' },
        { lable: '审核中', value: '1' },
        { lable: '执行中', value: '2' },
        { lable: '待审核', value: '3' },
        { lable: '审核完成', value: '4' },
        { lable: '已关闭', value: '5' },
      ]}
      onChange={onChange}
    />
  );
};
