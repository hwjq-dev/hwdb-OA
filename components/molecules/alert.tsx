import { CircleAlert } from 'lucide-react';
import React from 'react';

export const ErrorAlert: React.FC<{ label: string }> = ({ label }) => (
  <div className="rounded-md border border-red-500/50 bg-red-100/50 px-4 py-3 text-red-600">
    <p className="text-sm">
      <CircleAlert className="me-3 -mt-0.5 inline-flex" size={16} aria-hidden="true" />
      {label}
    </p>
  </div>
);
