'use client';

import { ROLE_CONFIG } from '@/config/role';
import { ROUTES } from '@/config/route';
import { useAuthStore } from '@/hooks/use-auth';
import RequestAddionalScan from '@/public/images/request-additional-scan.png';
import RequestChangeShift from '@/public/images/request-change-shift.png';
import RequestLate from '@/public/images/request-late.png';
import RequestOvertime from '@/public/images/request-overtime.png';
import RequestPermission from '@/public/images/request-permission.png';
import RequestPunishment from '@/public/images/request-punishment.png';
import RequestShiftDayOff from '@/public/images/request-shift-day-off.png';

import { FeatureItemsList } from './feature-item-list';

export const HrApprovalSection = () => {
  const { data } = useAuthStore();
  const position = data?.position_level;

  const approval = [
    {
      id: 1,
      alt: 'RequestPermission.png',
      icon: RequestPermission,
      label: '审批请假',
      link: ROUTES.$HR_APPROVAL('审批请假'),
      isHide: false,
    },
    {
      id: 2,
      alt: 'RequestOvertime.png',
      icon: RequestOvertime,
      label: '审批加班',
      link: ROUTES.$HR_APPROVAL('审批加班'),
      isHide: false,
    },
    {
      id: 3,
      alt: 'RequestChangeShift.png',
      icon: RequestChangeShift,
      label: '审批调班',
      link: ROUTES.$HR_APPROVAL('审批调班'),
      isHide: false,
    },
    {
      id: 4,
      alt: 'RequestShiftDayOff.png',
      icon: RequestShiftDayOff,
      label: '审批调休',
      link: ROUTES.$HR_APPROVAL('审批调休'),
      isHide: false,
    },
    {
      id: 5,
      alt: 'RequestLate.png',
      icon: RequestLate,
      label: '审批免迟到',
      link: ROUTES.$HR_APPROVAL('审批免迟到'),
      isHide: false,
    },
    {
      id: 6,
      alt: 'RequestAddionalScan.png',
      icon: RequestAddionalScan,
      label: '审批补打卡',
      link: ROUTES.$HR_APPROVAL('审批补打卡'),
      isHide: false,
    },
    // {
    //   id: 7,
    //   alt: 'RequestPassProbation.png',
    //   icon: RequestPassProbation,
    //   label: '审批转正',
    //   link: ROUTES.$HR_APPROVAL('审批转正'),
    // },
    // {
    //   id: 8,
    //   alt: 'RequestChangePosition.png',
    //   icon: RequestChangePosition,
    //   label: '审批转岗',
    //   link: ROUTES.$HR_APPROVAL('审批转刚'),
    // },
    // {
    //   id: 9,
    //   alt: 'RequestResign.png',
    //   icon: RequestResign,
    //   label: '审批离职',
    //   link: ROUTES.$HR_APPROVAL('审批离职'),
    // },
    {
      id: 10,
      alt: 'RequestPunishment.png',
      icon: RequestPunishment,
      label: '审批处罚',
      link: ROUTES.$HR_APPROVAL('审批处罚'),
      isHide: [ROLE_CONFIG.组员.id, ROLE_CONFIG.组长.id, ROLE_CONFIG.部门主管.id].includes(
        position as never,
      ),
    },
    // {
    //   id: 11,
    //   alt: 'RequestTask.png',
    //   icon: RequestTask,
    //   label: '审批任务',
    //   link: ROUTES.TASK_REQUEST_APPROVAL,
    //   isHide: level === '员工',
    // },
  ];

  if ([ROLE_CONFIG.组员.id, ROLE_CONFIG.组长.id].includes(position as never)) return null;
  return <FeatureItemsList label="审批管理" items={approval} />;
};
