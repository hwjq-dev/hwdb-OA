import { Label } from '@/components/ui/label';
import { PropsWithChildren } from 'react';

export const FormFieldWrapper: React.FC<{ label: string } & PropsWithChildren> = ({
  label,
  children,
}) => (
  <div className="space-y-2">
    <Label htmlFor={label}>{label}</Label>
    {children}
  </div>
);
