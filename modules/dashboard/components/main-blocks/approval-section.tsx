'use client';

import { ROUTES } from '@/config/route';
import { useAccountDetect } from '@/hooks/use-account-detect';
import RequestAddionalScan from '@/public/images/request-additional-scan.png';
import RequestChangePosition from '@/public/images/request-change-position.png';
import RequestChangeShift from '@/public/images/request-change-shift.png';
import RequestLate from '@/public/images/request-late.png';
import RequestOvertime from '@/public/images/request-overtime.png';
import RequestPassProbation from '@/public/images/request-pass-probation.png';
import RequestPermission from '@/public/images/request-permission.png';
import RequestResign from '@/public/images/request-resign.png';
import RequestShiftDayOff from '@/public/images/request-shift-day-off.png';

import { FeatureItemsList } from './feature-item-list';

const approval = [
  {
    id: 1,
    alt: 'RequestPermission.png',
    icon: RequestPermission,
    label: '审批请假',
    link: ROUTES.$HR_APPROVAL('审批请假'),
  },
  {
    id: 2,
    alt: 'RequestOvertime.png',
    icon: RequestOvertime,
    label: '审批加班',
    link: ROUTES.$HR_APPROVAL('审批加班'),
  },
  {
    id: 3,
    alt: 'RequestChangeShift.png',
    icon: RequestChangeShift,
    label: '审批排班',
    link: ROUTES.$HR_APPROVAL('审批排班'),
  },
  {
    id: 4,
    alt: 'RequestShiftDayOff.png',
    icon: RequestShiftDayOff,
    label: '审批调休',
    link: ROUTES.$HR_APPROVAL('审批调休'),
  },
  {
    id: 5,
    alt: 'RequestLate.png',
    icon: RequestLate,
    label: '审批免迟到',
    link: ROUTES.$HR_APPROVAL('审批免迟到'),
  },
  {
    id: 6,
    alt: 'RequestAddionalScan.png',
    icon: RequestAddionalScan,
    label: '审批补打卡',
    link: ROUTES.$HR_APPROVAL('审批补打卡'),
  },
  {
    id: 7,
    alt: 'RequestPassProbation.png',
    icon: RequestPassProbation,
    label: '审批转正',
    link: ROUTES.$HR_APPROVAL('审批转正'),
  },
  {
    id: 8,
    alt: 'RequestChangePosition.png',
    icon: RequestChangePosition,
    label: '审批转岗',
    link: ROUTES.$HR_APPROVAL('审批转刚'),
  },
  {
    id: 9,
    alt: 'RequestResign.png',
    icon: RequestResign,
    label: '审批离职',
    link: ROUTES.$HR_APPROVAL('审批离职'),
  },
];

export const HrApprovalSection = () => {
  const { level } = useAccountDetect();
  if (level == '下级') return null;
  if (level == '上级') return <FeatureItemsList label="审批管理" items={approval} />;
};
