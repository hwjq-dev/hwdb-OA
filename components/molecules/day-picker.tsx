'use client';

import { zhTW } from 'date-fns/locale';
import { useState } from 'react';

import { DateTimePicker } from './datetime';

interface Props {
  date?: Date;
  onSelected: (date?: Date) => void;
}

const DateTimeCustomPicker: React.FC<Props> = ({ date, onSelected }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(date);

  return (
    <DateTimePicker
      locale={zhTW}
      value={selectedDate || date}
      onChange={(date) => {
        setSelectedDate(date);
        onSelected(date);
      }}
      placeholder="开始日期"
    />
  );
};

export default DateTimeCustomPicker;
