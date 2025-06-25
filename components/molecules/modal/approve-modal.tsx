'use client';

import { X } from 'lucide-react';
import { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

interface Props {
  icon?: ReactNode;
  btnLabel?: string;
  title: string;
  description: string;
  open: boolean;
  onCancle: () => void;
  onApprove: () => void;
  onDeny?: () => void;
  onOpenChange: (open: boolean) => void;
}

export const ApproveModal: React.FC<Props> = ({
  icon: Icon,
  btnLabel,
  title,
  description,
  open,
  onCancle,
  onApprove,
  onDeny,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={(open) => onOpenChange(open)}>
      <DialogTrigger asChild>
        {Icon ? (
          Icon
        ) : (
          <div className="shadow-[0px_-10px_31px_0px_#d6d2d2] fixed left-0 right-0 w-full z-50 bg-white bottom-0">
            <div className="py-3 flex justify-center items-center">
              <Button>{btnLabel}</Button>
            </div>
          </div>
        )}
      </DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="relative flex flex-col space-y-4">
          <span
            className="p-1.5 bg-primary/10 rounded-full absolute -right-2 -top-3"
            role="button"
            onClick={onCancle}
          >
            <X className="text-primary size-5" />
          </span>
          <DialogTitle className="text-center font-bold">{title}</DialogTitle>
          <DialogDescription className="text-center -mt-1">{description}</DialogDescription>
          <div>
            <Input placeholder="请填写意见" className="text-sm" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <Button onClick={onDeny} variant="destructive">
              驳回
            </Button>
            <Button onClick={onApprove}>通过</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
