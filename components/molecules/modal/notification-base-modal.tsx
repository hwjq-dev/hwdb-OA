'use client';

import { Bell, Speech, UserRound } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Props {
  open: boolean;
  title: string;
  description: string;
  onCancle: () => void;
  onNotify: () => void;
  onOpenChange: (open: boolean) => void;
}

export const NotificationBaseModal: React.FC<Props> = ({
  title,
  description,
  open,
  onCancle,
  onNotify,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={(open) => onOpenChange(open)}>
      <DialogTrigger asChild>
        <span className="p-2 bg-red-100/60 rounded-full">
          <Bell className="size-4 text-red-600" />
        </span>
      </DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        {/* <span className="p-2 mx-auto rounded-full bg-red-100/50 w-fit mb-2">
          <CircleAlert className="size-11 text-red" />
        </span> */}
        <div className="flex items-center space-x-3 w-5/6 mx-auto">
          <span className="p-2 rounded-full w-fit bg-primary-100">
            <Speech className="size-5 text-primary" />
          </span>
          <div className="grow border-t border-dashed" />
          <span className="p-2 rounded-full w-fit bg-primary-100">
            <UserRound className="size-5 text-primary" />
          </span>
        </div>
        <DialogTitle className="text-center font-bold">{title}</DialogTitle>
        <DialogDescription className="text-center -mt-1">{description}</DialogDescription>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <Button onClick={onCancle} variant="outline" className="border-primary text-primary">
            取消
          </Button>
          <Button onClick={onNotify}>通知</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
