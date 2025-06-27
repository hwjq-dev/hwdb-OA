'use client';

import { zhTW } from 'date-fns/locale';
import { useState } from 'react';

import { DateTimePicker } from './datetime';

interface Props {
  id?: string;
  date?: Date;
  onSelected: (date?: Date) => void;
  placeholder?: string;
  className?: string;
  disable?: boolean;
}

const DateTimeCustomPicker: React.FC<Props> = ({
  id,
  className,
  date,
  onSelected,
  placeholder,
  disable,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(date);

  return (
    <DateTimePicker
      disabled={disable}
      id={id}
      className={className}
      hourCycle={12}
      locale={zhTW}
      value={selectedDate || date}
      onChange={(date) => {
        setSelectedDate(date);
        onSelected(date);
      }}
      placeholder={placeholder}
    />
  );
};

export default DateTimeCustomPicker;
