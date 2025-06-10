'use client';

import { CircleAlert, Trash2 } from 'lucide-react';
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
  open: boolean;
  onCancle: () => void;
  onDelete: () => void;
  onOpenChange: (open: boolean) => void;
}

export const DeleteModal: React.FC<Props> = ({
  icon: Icon,
  open,
  onCancle,
  onDelete,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={(open) => onOpenChange(open)}>
      <DialogTrigger asChild>{Icon ? Icon : <Trash2 className="text-red size-4" />}</DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <span className="p-2 mx-auto rounded-full bg-red-100/50 w-fit mb-2">
          <CircleAlert className="size-11 text-red" />
        </span>

        <DialogTitle className="text-center font-bold">你确定要删除这个条？</DialogTitle>
        <DialogDescription className="text-center -mt-1">此操作将永久删除此记录</DialogDescription>

        <div className="grid grid-cols-2 gap-4 mt-3">
          <Button onClick={onCancle} variant="outline" className="border-red text-red">
            取消
          </Button>
          <Button onClick={onDelete} variant="destructive">
            确认
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
