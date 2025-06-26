'use client';

import { ROLE_CONFIG } from '@/config/role';
import { useAuthStore } from '@/hooks/use-auth';
import { HighPositionScreen, LowPositionScreen } from '@/modules/task/screens';

const TemplateTask = () => {
  const { data } = useAuthStore();
  const positon = data?.position_level;

  switch (positon) {
    default:
      return null;

    //-- 下级类型
    case ROLE_CONFIG.组员.id:
    case ROLE_CONFIG.组长.id:
      return <LowPositionScreen />;

    //-- 上级类型
    case ROLE_CONFIG.部门主管.id:
    case ROLE_CONFIG.部门经理.id:
    case ROLE_CONFIG.总经理.id:
      return <HighPositionScreen />;
  }
};

export default TemplateTask;
