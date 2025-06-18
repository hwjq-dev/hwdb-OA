import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  label: string;
  legend: string;
}

export const ApprovalProcessWrapper: React.FC<Props> = ({ label, legend, children }) => (
  <div className="relative p-3 border border-dashed border-primary-200 rounded-2xl mb-8">
    <p className="font-bold text-center mt-2">{label}</p>
    {children}
    <p className="text-xs text-dark text-center mt-4">{legend}</p>
  </div>
);
