'use client';

import { ApproveModal } from '@/components/molecules/modal/approve-modal';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/config/route';
import { useDiscloser } from '@/hooks/use-discloser';
import { getFormatDatetime } from '@/lib/dayjs';
import { cn } from '@/lib/utils';
import { IconCircleDashedX } from '@tabler/icons-react';
import { CircleCheckBig } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { toast } from 'sonner';

export interface Props {
  status: '审批中';
  id: string;
  name: string;
  applicationType: string;
  department: string;
  position: string;
  createdAt: string;
  linkLabel?: string;
  href?: string;
}

export const ApprovalCard: React.FC<Props> = (props) => {
  return (
    <div className="relative px-14 rounded-2xl bg-gradient-to-r from-primary-200/80 to-primary-100 py-4 space-y-1">
      <div className="absolute top-2 right-4">
        <span
          className={cn(
            'text-sm py-1 px-2.5 border border-dashed border-yellow-300 bg-white text-yellow-500 rounded-sm',
          )}
        >
          {props.status}
        </span>
      </div>
      <div className="absolute -top-1 -left-2 p-1 bg-white rounded-full">
        <Avatar className="size-12">
          <AvatarImage src="#" alt="xxx.png" />
          <AvatarFallback className={cn('bg-yellow-500/10 text-yellow-500 font-bold text-sm')}>
            {props.name.substring(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
      <p className="font-bold text-sm">
        发起者： {props.name} - {props.id}
      </p>
      <p className="text-sm">审批类型 : {props.applicationType}</p>
      <p className="text-sm">
        申请部门 : {props.department} - {props.position}
      </p>
      <p className="text-sm">申请时间 : {getFormatDatetime(new Date(props.createdAt))}</p>

      <div className="p-1 bg-white rounded-xl mt-3 grid grid-cols-2 gap-2">
        <ApprovalButton id={props.id} />

        <Button variant="destructive" size="sm" asChild>
          <Link
            href={ROUTES.$HR_APPROVAL_DETAIL(props.id, props.applicationType) || '#'}
            className="rounded-xl"
          >
            查看详情
          </Link>
        </Button>
      </div>
    </div>
  );
};

interface ApprovalButtonProps {
  id: string;
}

const ApprovalButton: React.FC<ApprovalButtonProps> = ({ id }) => {
  const { isOpen, close, toggle } = useDiscloser();

  return (
    <ApproveModal
      icon={
        <Button variant="default" size="sm" className="rounded-xl bg-gray-400">
          立即审批
        </Button>
      }
      title="审批提示"
      description="您确定审批这个申请？"
      open={isOpen}
      onApprove={() => {
        close();
        toast(`申请 ${id} 已审批成功.`, {
          className: '!w-3/4 !ml-auto !mr-6',
          icon: <CircleCheckBig className="text-green-500" />,
          position: 'top-center',
        });
      }}
      onDeny={() => {
        close();
        toast(`申请 ${id} 已拒绝.`, {
          className: '!w-3/4 !ml-auto !mr-6',
          icon: <IconCircleDashedX className="text-red-500" />,
          position: 'top-center',
        });
      }}
      onCancle={() => {
        close();
      }}
      onOpenChange={toggle}
    />
  );
};
