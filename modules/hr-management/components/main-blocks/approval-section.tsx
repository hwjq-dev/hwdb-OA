'use client';

import RequestAddionalScan from '@/public/images/request-additional-scan.png';
import RequestChangePosition from '@/public/images/request-change-position.png';
import RequestChangeShift from '@/public/images/request-change-shift.png';
import RequestLate from '@/public/images/request-late.png';
import RequestOvertime from '@/public/images/request-overtime.png';
import RequestPassProbation from '@/public/images/request-pass-probation.png';
import RequestPermission from '@/public/images/request-permission.png';
import RequestResign from '@/public/images/request-resign.png';
import RequestShiftDayOff from '@/public/images/request-shift-day-off.png';

import { useAccountDetect } from '@/hooks/use-account-detect';
import { FeatureItemsList } from './feature-item-list';

const approval = [
  {
    id: 1,
    alt: 'RequestPermission.png',
    icon: RequestPermission,
    label: '审批请假',
    link: '',
  },
  {
    id: 2,
    alt: 'RequestOvertime.png',
    icon: RequestOvertime,
    label: '审批加班',
    link: '',
  },
  {
    id: 3,
    alt: 'RequestChangeShift.png',
    icon: RequestChangeShift,
    label: '审批调班',
    link: '',
  },
  {
    id: 4,
    alt: 'RequestShiftDayOff.png',
    icon: RequestShiftDayOff,
    label: '审批调休',
    link: '',
  },
  {
    id: 5,
    alt: 'RequestLate.png',
    icon: RequestLate,
    label: '审批免迟到',
    link: '',
  },
  {
    id: 6,
    alt: 'RequestAddionalScan.png',
    icon: RequestAddionalScan,
    label: '审批扑打卡',
    link: '',
  },
  {
    id: 7,
    alt: 'RequestPassProbation.png',
    icon: RequestPassProbation,
    label: '审批转正',
    link: '',
  },
  {
    id: 8,
    alt: 'RequestChangePosition.png',
    icon: RequestChangePosition,
    label: '审批转岗',
    link: '',
  },
  {
    id: 9,
    alt: 'RequestResign.png',
    icon: RequestResign,
    label: '审批离职',
    link: '',
  },
];

export const HrApprovalSection = () => {
  const { level } = useAccountDetect();
  if (level == '下级') return null;

  if (level == '上级')
    return (
      <div className="mt-10">
        <FeatureItemsList label="审批管理" items={approval} />
      </div>
    );
};
