'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const BackSection: React.FC<{ label: string }> = ({ label }) => {
  const router = useRouter();

  return (
    <div className="tornado-pattern relative px-2 py-3.5 bg-primary flex justify-center items-center">
      <button
        onClick={() => router.back()}
        className="cursor-pointer p-1.5 bg-gray-400/30 backdrop-blur-2xl rounded-full absolute left-4 top-1/2 -translate-y-1/2"
      >
        <ChevronLeft className="stroke-3 size-5 text-white" />
      </button>

      <p className="text-center text-lg font-semibold text-white">{label}</p>
    </div>
  );
};
