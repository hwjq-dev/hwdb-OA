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

const application = [
  {
    id: 1,
    alt: 'RequestPermission.png',
    icon: RequestPermission,
    label: '申请请假',
    link: '',
  },
  {
    id: 2,
    alt: 'RequestOvertime.png',
    icon: RequestOvertime,
    label: '申请加班',
    link: '',
  },
  {
    id: 3,
    alt: 'RequestChangeShift.png',
    icon: RequestChangeShift,
    label: '申请调班',
    link: '',
  },
  {
    id: 4,
    alt: 'RequestShiftDayOff.png',
    icon: RequestShiftDayOff,
    label: '申请调休',
    link: '',
  },
  {
    id: 5,
    alt: 'RequestLate.png',
    icon: RequestLate,
    label: '申请免迟到',
    link: '',
  },
  {
    id: 6,
    alt: 'RequestAddionalScan.png',
    icon: RequestAddionalScan,
    label: '申请补打卡',
    link: '',
  },
  {
    id: 7,
    alt: 'RequestPassProbation.png',
    icon: RequestPassProbation,
    label: '申请转正',
    link: '',
  },
  {
    id: 8,
    alt: 'RequestChangePosition.png',
    icon: RequestChangePosition,
    label: '申请转岗',
    link: '',
  },
  {
    id: 9,
    alt: 'RequestResign.png',
    icon: RequestResign,
    label: '申请离职',
    link: '',
  },
];

export const HrApplicationSection = () => <FeatureItemsList label="申请管理" items={application} />;
