'use client';

import { zhCN } from 'date-fns/locale';
import { useState } from 'react';

import { DateTimePicker } from './datetime';

interface Props {
  id?: string;
  date?: Date;
  onSelected?: (date?: Date) => void;
  placeholder?: string;
  className?: string;
}

export const DatePicker: React.FC<Props> = (props) => {
  const { id, onSelected, placeholder, className } = props;
  const [date, setDate] = useState<Date | undefined>(props.date);

  return (
    <div className="w-auto">
      <DateTimePicker
        id={id}
        className={className}
        locale={zhCN}
        granularity="day"
        value={date}
        onChange={(date) => {
          onSelected?.(date);
          setDate(date);
        }}
        placeholder={placeholder || '选择日期'}
        type="normal"
      />
    </div>
  );
};
