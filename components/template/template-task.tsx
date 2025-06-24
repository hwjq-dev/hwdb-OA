'use client';

import { useAccountDetect } from '@/hooks/use-account-detect';
import { HighPositionScreen, LowPositionScreen } from '@/modules/task/screens';

const TemplateTask = () => {
  const { level } = useAccountDetect();

  switch (level) {
    default:
      return null;

    case '员工':
      return <LowPositionScreen />;

    case '主管':
    case '经理':
    case '总经理':
      return <HighPositionScreen />;
  }
};

export default TemplateTask;
