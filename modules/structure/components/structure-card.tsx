import { IconRosetteDiscountCheckFilled } from '@tabler/icons-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronRight } from 'lucide-react';

interface Props {
  name: string;
  title: string;
  position: string;
  department: string;
  src: string;
}

export const StructureCard: React.FC<Props> = ({ name, title, department, src }) => {
  return (
    <div className="relative bg-primary-100 border border-gray-100 p-3 rounded-2xl">
      <div className="flex space-x-3">
        <ProfileImage src={src} />
        <div className="grow flex items-center justify-between">
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-xs text-dark font-medium">
              {title} - {department}
            </p>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="flex flex-col items-end space-y-2">
              <span className="px-1 bg-white rounded-sm py-0.5 text-xs font-medium text-primary relative before:content-[''] before:absolute before:top-1/2 before:-left-3 before:-translate-y-1/2 before:size-1.5 before:rounded-full before:bg-primary">
                <span className="font-bold text-xs">TG</span> 768796034
              </span>
              <IconRosetteDiscountCheckFilled className="text-green-500 size-5" />
            </div>
            <ChevronRight className="text-primary/70 size-5" />
          </div>
        </div>
      </div>

      {/*-- Additional right & left style --*/}
      <div className="absolute top-1/2 -translate-y-1/2 -left-3 size-4 rounded-full bg-white" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-3 size-4 rounded-full bg-white" />
    </div>
  );
};

const ProfileImage: React.FC<{ src: string }> = ({ src }) => (
  <div className="p-1.5 border border-primary-200 bg-white rounded-full w-fit">
    <Avatar className="size-10">
      <AvatarImage className="object-cover" src={src} alt="@profile.png" />
      <AvatarFallback>PF</AvatarFallback>
    </Avatar>
  </div>
);
