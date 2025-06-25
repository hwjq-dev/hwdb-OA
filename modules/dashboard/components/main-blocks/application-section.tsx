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

export const HrApplicationSection = () => {
  const { level } = useAccountDetect();

  const application = [
    {
      id: 1,
      alt: 'RequestPermission.png',
      icon: RequestPermission,
      label: '申请请假',
      link: ROUTES.$HR_APPLICATION('申请请假'),
      isHide: false,
    },
    {
      id: 2,
      alt: 'RequestOvertime.png',
      icon: RequestOvertime,
      label: '申请加班',
      link: ROUTES.$HR_APPLICATION('申请加班'),
      isHide: false,
    },
    {
      id: 3,
      alt: 'RequestChangeShift.png',
      icon: RequestChangeShift,
      label: '申请调班',
      link: ROUTES.$HR_APPLICATION('申请调班'),
      isHide: false,
    },
    {
      id: 4,
      alt: 'RequestShiftDayOff.png',
      icon: RequestShiftDayOff,
      label: '申请调休',
      link: ROUTES.$HR_APPLICATION('申请调休'),
      isHide: false,
    },
    {
      id: 5,
      alt: 'RequestLate.png',
      icon: RequestLate,
      label: '申请免迟到',
      link: ROUTES.$HR_APPLICATION('申请免迟到'),
      isHide: false,
    },
    {
      id: 6,
      alt: 'RequestAddionalScan.png',
      icon: RequestAddionalScan,
      label: '申请补打卡',
      link: ROUTES.$HR_APPLICATION('申请补打卡'),
      isHide: false,
    },
    // {
    //   id: 7,
    //   alt: 'RequestPassProbation.png',
    //   icon: RequestPassProbation,
    //   label: '申请转正',
    //   link: ROUTES.$HR_APPLICATION('申请转正'),
    // },
    // {
    //   id: 8,
    //   alt: 'RequestChangePosition.png',
    //   icon: RequestChangePosition,
    //   label: '申请转岗',
    //   link: ROUTES.$HR_APPLICATION('申请转刚'),
    // },
    // {
    //   id: 9,
    //   alt: 'RequestResign.png',
    //   icon: RequestResign,
    //   label: '申请离职',
    //   link: ROUTES.$HR_APPLICATION('申请离职'),
    // },
    {
      id: 10,
      alt: 'RequestPunishment.png',
      icon: RequestPunishment,
      label: '申请处罚',
      link: ROUTES.$HR_APPLICATION('申请处罚'),
      isHide: false,
    },
  ];

  if (level == '总经理') return null;

  return <FeatureItemsList label="申请管理" items={application} />;
};
