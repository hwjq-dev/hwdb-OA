import { NextPage } from 'next';

import { ScreenContainer } from '@/components/molecules/screen-container';
import { AttendanceList } from '@/modules/human-resouce/components/attendance';
import { AttendanceFilter } from '@/modules/human-resouce/components/attendance/attendance-filter';

const Page: NextPage = () => {
  return (
    <ScreenContainer headerLabel="考勤记录" containerClassName="h-[90dvh]" showBack>
      <AttendanceFilter />
      <AttendanceList />
    </ScreenContainer>
  );
};

export default Page;
