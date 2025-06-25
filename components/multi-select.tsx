import MultipleSelector from '@/components/ui/multiselect';
import React from 'react';

type Options = Array<{ label: string; value: string }>;

interface Props {
  values: Options;
  onChange?: (items: Options) => void;
  placehoder?: string;
  className?: string;
}

export const MultiSelect: React.FC<Props> = ({ values, placehoder, className, onChange }) => {
  return (
    <div className="*:not-first:mt-2">
      <MultipleSelector
        commandProps={{
          label: placehoder ? placehoder : '选项',
        }}
        defaultOptions={values}
        placeholder={placehoder ? placehoder : '选项'}
        className={className}
        onChange={onChange}
        hideClearAllButton
        hidePlaceholderWhenSelected
        emptyIndicator={<p className="text-center text-sm">没有部门</p>}
      />
    </div>
  );
};
