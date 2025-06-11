import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export const AvatarSection = () => {
  return (
    <div className="bg-white relative flex space-x-5 shadow-[0px_0px_38px_-17px_#a6a6a6] mx-1 mt-2 rounded-2xl py-7 px-4 border border-gray-200/60">
      <Avatar className="size-12">
        <AvatarImage src="#" />
        <AvatarFallback className="bg-primary/10">CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold">小猫</p>
        <div className="flex space-x-3">
          <span>运维 - 员工</span>
          <div className="border-r w-0.5 border-dashed h-4 my-auto" />
          <span>JQ99</span>
        </div>
      </div>
      <Badge variant="outline" className="size-fit absolute right-3 top-3 px-2 py-1">
        Tg -123245654
      </Badge>
    </div>
  );
};
