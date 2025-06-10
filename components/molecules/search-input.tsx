'use client';

import { LoaderCircleIcon, SearchIcon } from 'lucide-react';
import { useEffect, useId, useState } from 'react';

import { Input } from '@/components/ui/input';

export const SearchInput = () => {
  const id = useId();

  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    setIsLoading(false);
  }, [inputValue]);

  return (
    <div className="*:not-first:mt-2 grow">
      <div className="relative">
        <Input
          id={id}
          className="peer ps-8 pe-8 h-10 text-sm font-medium text-dark bg-white rounded-lg"
          placeholder="搜素任务标题或编号..."
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
          {isLoading ? (
            <LoaderCircleIcon
              className="animate-spin text-primary"
              size={16}
              role="status"
              aria-label="Loading..."
            />
          ) : (
            <SearchIcon className="text-primary" size={14} aria-hidden="true" />
          )}
        </div>
      </div>
    </div>
  );
};
