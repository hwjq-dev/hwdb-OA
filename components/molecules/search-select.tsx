'use client';

import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface Props {
  placeholder: string;
  items: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export const SearchSelect: React.FC<Props> = ({ items, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-auto justify-between rounded-sm font-normal"
        >
          {value ? (
            <span>{items.find((item) => item.value === value)?.label}</span>
          ) : (
            <span className="text-dark">选择部门</span>
          )}
          <ChevronDown className="opacity-50 text-primary" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-1 ml-10 w-52" side="bottom">
        <Command defaultValue={value}>
          <CommandInput placeholder="搜素部门..." className="h-9" />
          <CommandList>
            <CommandEmpty>未找到您在搜素部门</CommandEmpty>
            <CommandGroup>
              {items.map((f) => (
                <CommandItem
                  key={f.value}
                  value={f.value}
                  onSelect={(currentValue) => {
                    const selectedValue = currentValue === value ? '' : currentValue;
                    setValue(selectedValue);
                    onChange(selectedValue);
                    setOpen(false);
                  }}
                >
                  {f.label}
                  <Check
                    className={cn(
                      'ml-auto size-3.5 text-primary',
                      value === f.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
