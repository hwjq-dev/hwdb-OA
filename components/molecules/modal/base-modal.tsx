'use client';

import { SquarePen, X } from 'lucide-react';
import { ReactNode } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Props {
  icon?: ReactNode;
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
  onOpenChange?: (open: boolean) => void;
}

export const BaseModal: React.FC<Props & React.PropsWithChildren> = ({
  icon: Icon,
  open,
  title,
  description,
  onOpenChange,
  onClose,
  children,
}) => {
  return (
    <Dialog open={open} onOpenChange={(open) => onOpenChange?.(open)}>
      <DialogTrigger asChild>
        {Icon ? Icon : <SquarePen className="text-primary size-4" />}
      </DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <FormHeader label={title} description={description} onClick={onClose} />
        </DialogHeader>

        {/*--- Indicator ---*/}
        <div className="bg-gradient-to-r my-2 from-gray-400/10 via-60% via-primary to-gray-400/10 w-full h-[1px] rounded-full" />
        {children}
      </DialogContent>
    </Dialog>
  );
};

interface FormHeaderProps {
  label: string;
  description: string;
  onClick: () => void;
}
const FormHeader: React.FC<FormHeaderProps> = (props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <DialogTitle className="text-start font-bold">{props.label}</DialogTitle>
        <span className="p-1.5 bg-primary/10 rounded-full" role="button" onClick={props.onClick}>
          <X className="text-primary size-5" />
        </span>
      </div>
      <DialogDescription className="text-start">{props.description}</DialogDescription>
    </>
  );
};
