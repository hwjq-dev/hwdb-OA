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
  disable?: boolean;
  icon?: ReactNode;
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  onOpenChange?: (open: boolean) => void;
}

export const BaseModal: React.FC<Props & React.PropsWithChildren> = ({
  icon: Icon,
  open,
  title,
  disable,
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
          <FormHeader disable={disable} label={title} description={description} onClick={onClose} />
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
};

interface FormHeaderProps {
  disable?: boolean;
  label: string;
  description?: string;
  onClick: () => void;
}
const FormHeader: React.FC<FormHeaderProps> = (props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <DialogTitle className="text-start font-bold">{props.label}</DialogTitle>
        <button
          disabled={props.disable}
          className="p-1.5 bg-primary/10 rounded-full outline-none"
          role="button"
          onClick={props.onClick}
        >
          <X className="text-primary size-5" />
        </button>
      </div>
      <DialogDescription className="text-start"></DialogDescription>
    </>
  );
};
