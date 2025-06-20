'use client';

import { useAccountDetect } from '@/hooks/use-account-detect';
import { HighPositionScreen, LowPositionScreen } from '@/modules/task/screens';

const TemplateTask = () => {
  const { level } = useAccountDetect();

  switch (level) {
    case '员工':
      return <LowPositionScreen />;

    default:
      return <HighPositionScreen />;
  }
};

export default TemplateTask;
