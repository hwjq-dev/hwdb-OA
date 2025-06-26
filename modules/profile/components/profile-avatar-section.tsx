'use client';

import { useGetPersonalInfo } from '@/hooks/use-get-personal-info';
import { IconUser } from '@tabler/icons-react';

import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

export const ProfileAvatarSection = () => {
  const { isLoading, data } = useGetPersonalInfo();

  if (isLoading) return <Shimmer />;

  return (
    <div className="bg-gradient-to-r overflow-hidden from-primary/90 to-primary/60 relative space-x-5 shadow-[0px_0px_38px_0px_rgba(0,_0,_0,_0.1)] mx-1 mt-2 flex items-center rounded-3xl h-28 px-4">
      <div className="flex space-x-4">
        <div className="size-14 bg-white rounded-full flex justify-center items-center">
          <IconUser className="size-7 text-orange" />
        </div>
        <div>
          <p className="font-semibold text-white">{data?.nickname || '默认花名'}</p>
          <div className="flex space-x-3">
            <span className="text-white">
              {data?.department_text} - {data?.position_level_text}
            </span>
            <div className="border-r w-0.5 border-dashed h-4 my-auto" />
            <span className="text-white">{data?.job_title}</span>
          </div>
        </div>
      </div>
      <Badge variant="secondary" className="size-fit absolute -right-2 top-3 px-2 py-1">
        Tg - {data?.tg_id}
      </Badge>
      {/*-- left --*/}
      <div className="size-24 absolute -top-10 z-10 -left-8 bg-white/15 rounded-full" />
      <div className="size-24 absolute -top-4 z-10 -left-14 bg-white/5 rounded-full" />
      {/*-- right --*/}
      <div className="size-24 absolute top-3/5 z-10 -right-8 bg-white/10 rounded-full" />
      <div className="size-24 absolute top-2/5 z-10 -right-12 bg-white/10 rounded-full" />
    </div>
  );
};

const Shimmer = () => (
  <Skeleton className="relative bg-gray-50 h-28 px-4 rounded-3xl flex items-center">
    <div className="flex items-center space-x-4">
      <Skeleton className="size-14 rounded-full bg-gray-200" />
      <div className="flex flex-col space-y-2">
        <Skeleton className="w-16 h-4 rounded-2xl bg-gray-200" />
        <Skeleton className="w-36 h-4 rounded-2xl bg-gray-200" />
      </div>
    </div>
    <Skeleton className="h-6 w-28 rounded-lg bg-gray-200 absolute right-4 top-3" />
  </Skeleton>
);
