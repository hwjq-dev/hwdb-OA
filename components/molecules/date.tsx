'use client';

import { zhCN } from 'date-fns/locale';
import { useState } from 'react';

import { DateTimePicker } from './datetime';

export const DatePicker = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="w-auto">
      <DateTimePicker
        locale={zhCN}
        granularity="day"
        value={date}
        onChange={setDate}
        placeholder="选择日期"
        type="normal"
      />
    </div>
  );
};
