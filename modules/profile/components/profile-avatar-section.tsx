import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export const ProfileAvatarSection = () => {
  return (
    <div className="bg-gradient-to-r overflow-hidden from-primary/90 to-primary/60 relative flex space-x-5 shadow-[0px_0px_38px_0px_rgba(0,_0,_0,_0.1)] mx-1 mt-2 rounded-3xl py-7 px-4">
      <Avatar className="size-14">
        <AvatarImage src="#" />
        <AvatarFallback className="bg-white text-gray-500 font-medium">HW</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold text-white">小猫</p>
        <div className="flex space-x-3">
          <span className="text-white">运维 - 员工</span>
          <div className="border-r w-0.5 border-dashed h-4 my-auto" />
          <span className="text-white">JQ99</span>
        </div>
      </div>
      <Badge variant="secondary" className="size-fit absolute -right-2 top-3 px-2 py-1">
        Tg -123245654
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
