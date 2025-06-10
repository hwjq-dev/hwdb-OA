'use client';

import { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Props {
  icon?: ReactNode;
  btnLabel: string;
  title: string;
  description: string;
  open: boolean;
  onCancle: () => void;
  onApprove: () => void;
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
        <DialogTitle className="text-center font-bold">{title}</DialogTitle>
        <DialogDescription className="text-center -mt-1">{description}</DialogDescription>

        <div className="grid grid-cols-2 gap-4 mt-3">
          <Button onClick={onCancle} variant="outline" className="border-primary text-primary">
            取消
          </Button>
          <Button onClick={onApprove}>确认</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
