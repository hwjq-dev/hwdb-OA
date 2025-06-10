import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Props {
  defaultValue?: string;
  placeholder: string;
  items: { lable: string; value: string }[];
  onChange: (value: string) => void;
}

export const CustomSelect: React.FC<Props> = ({ defaultValue, placeholder, items, onChange }) => {
  return (
    <Select defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTrigger className="flex !h-9 !rounded-sm w-full items-center space-x-1">
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
