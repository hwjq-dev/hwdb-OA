import { PropsWithChildren } from 'react';

export const FormFieldWrapper: React.FC<{ label: string } & PropsWithChildren> = ({
  label,
  children,
}) => (
  <div className="flex flex-col space-y-1.5">
    <span className="text-sm font-bold">{label}</span>
    {children}
  </div>
);
