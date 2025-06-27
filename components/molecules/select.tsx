import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface Props {
  disable?: boolean;
  defaultValue?: string;
  placeholder: string;
  className?: string;
  items: { lable: string; value: string }[];
  onChange: (value: string) => void;
}

export const CustomSelect: React.FC<Props> = ({
  disable,
  defaultValue,
  placeholder,
  className,
  items,
  onChange,
}) => {
  return (
    <Select disabled={disable} defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTrigger
        disabled={disable}
        className={cn('flex h-9 rounded-sm w-full items-center space-x-1', className)}
      >
        <SelectValue className="text-dark" placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {items.map((x) => (
            <SelectItem className="text-dark" key={x.value} value={x.value}>
              {x.lable}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
