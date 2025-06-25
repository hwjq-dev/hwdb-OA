'use client';

import { useAccountDetect } from '@/hooks/use-account-detect';
import { HighPositionScreen, LowPositionScreen } from '@/modules/task/screens';

const TemplateTask = () => {
  const { level } = useAccountDetect();

  switch (level) {
    default:
      return null;

    //-- 下级类型
    case '组长':
    case '组员':
      return <LowPositionScreen />;

    //-- 上级类型
    case '部门主管':
    case '部门经理':
    case '总经理':
      return <HighPositionScreen />;
  }
};

export default TemplateTask;
