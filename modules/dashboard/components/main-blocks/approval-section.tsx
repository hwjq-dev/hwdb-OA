'use client';

import { ROUTES } from '@/config/route';
import { useAccountDetect } from '@/hooks/use-account-detect';
import RequestAddionalScan from '@/public/images/request-additional-scan.png';
import RequestChangeShift from '@/public/images/request-change-shift.png';
import RequestLate from '@/public/images/request-late.png';
import RequestOvertime from '@/public/images/request-overtime.png';
import RequestPermission from '@/public/images/request-permission.png';
import RequestPunishment from '@/public/images/request-punishment.png';
import RequestShiftDayOff from '@/public/images/request-shift-day-off.png';

import { FeatureItemsList } from './feature-item-list';

export const HrApprovalSection = () => {
  const { level } = useAccountDetect();

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
      isHide: level === '组长' || level === '组员' || level === '部门主管',
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

  if (level === '组长' || level === '组员') return null;
  return <FeatureItemsList label="审批管理" items={approval} />;
};
