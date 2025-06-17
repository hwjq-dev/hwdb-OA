'use client';

import { useAccountDetect } from '@/hooks/use-account-detect';
import { HighPositionScreen, LowPositionScreen } from '@/modules/task/screens';

const TemplateTask = () => {
  const { level } = useAccountDetect();

  switch (level) {
    case '下级':
      return <LowPositionScreen />;

    case '上级':
      return <HighPositionScreen />;

    default:
      return null;
  }
};

export default TemplateTask;
