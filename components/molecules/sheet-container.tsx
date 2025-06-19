'use client';

import { ChevronsUpDown } from 'lucide-react';
import { PropsWithChildren, ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

interface Props extends PropsWithChildren {
  open: boolean;
  title?: string;
  triggerComponent?: ReactNode;
  btnCancelLable?: string;
  btnConfirmLabel?: string;
  triggerBtnLabel?: string;
  onCancle: () => void;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export const SheetContainer: React.FC<Props> = (props) => {
  const {
    open,
    title,
    triggerComponent,
    btnCancelLable,
    btnConfirmLabel,
    triggerBtnLabel,
    children,
    onCancle,
    onOpenChange,
    onConfirm,
  } = props;

  return (
    <div className="flex space-x-1.5 items-center pt-2">
      <Drawer open={open} onOpenChange={(open) => onOpenChange(open)}>
        <DrawerTrigger asChild>
          {triggerComponent ? (
            triggerComponent
          ) : (
            <TriggerButton label={triggerBtnLabel} onClick={() => onOpenChange(true)} />
          )}
        </DrawerTrigger>

        <DrawerContent
          className="p-4 !rounded-t-3xl"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DrawerDescription></DrawerDescription>
          <DrawerTitle className="pb-5 pt-3">{title ? title : '选择过滤选项'}</DrawerTitle>
          {children}
          <DrawerFooter className="grid grid-cols-2 gap-x-2 p-0 pb-2">
            <DrawerClose asChild>
              <Button
                type="button"
                onClick={onCancle}
                variant="outline"
                className="rounded-sm border-primary text-primary font-semibold"
              >
                {btnCancelLable ? btnCancelLable : '取消'}
              </Button>
            </DrawerClose>
            <Button type="submit" onClick={onConfirm} className="rounded-sm font-semibold">
              {btnConfirmLabel ? btnConfirmLabel : '过滤'}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

const TriggerButton: React.FC<{ label?: string; onClick: () => void }> = ({
  label = '',
  onClick,
}) => (
  <Button variant="outline" className="h-10" onClick={onClick}>
    <span className="text-dark">{label ? label : '过滤任务'}</span>
    <span>
      <ChevronsUpDown className="text-primary" />
    </span>
  </Button>
);
