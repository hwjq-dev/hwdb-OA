'use client';

import { cn } from '@/lib/utils';

interface CircularProgressProps {
  value: number;
  renderLabel?: (progress: number) => number | string;
  size?: number;
  strokeWidth?: number;
  circleStrokeWidth?: number;
  progressStrokeWidth?: number;
  shape?: 'square' | 'round';
  className?: string;
  progressClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

const CircularProgress = ({
  value,
  renderLabel,
  className,
  progressClassName,
  labelClassName,
  showLabel,
  shape = 'round',
  size = 100,
  strokeWidth,
  circleStrokeWidth = 10,
  progressStrokeWidth = 10,
}: CircularProgressProps) => {
  const radius = size / 2 - 10;
  const circumference = Math.ceil(3.14 * radius * 2);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));
  const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${size * 1.25}`;
  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-90deg)' }}
        className="relative"
      >
        {/* Base Circle */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          strokeWidth={strokeWidth ?? circleStrokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          className={cn('stroke-primary/25', className)}
        />
        {/* Progress */}
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeWidth={strokeWidth ?? progressStrokeWidth}
          strokeLinecap={shape}
          strokeDashoffset={percentage}
          fill="transparent"
          strokeDasharray={circumference}
          className={cn('stroke-primary', progressClassName)}
        />
      </svg>
      {showLabel && (
        <div
          className={cn(
            'absolute inset-0 flex flex-col space-y-0 items-center justify-center',
            labelClassName,
          )}
        >
          <span className="text-base">{renderLabel ? renderLabel(value) : value}</span>
          <span className="text-xs text-dark">进度</span>
        </div>
      )}
    </div>
  );
};

export const CircularProgressBar: React.FC<{ value: number; size?: number }> = ({
  value = 10,
  size = 110,
}) => {
  return (
    <div className="w-fit">
      <CircularProgress
        value={value}
        size={size}
        strokeWidth={12}
        showLabel
        labelClassName="text-xl font-bold"
        renderLabel={(progress) => `${progress}%`}
        className="stroke-gray-100"
        progressClassName="stroke-primary"
      />
    </div>
  );
};
