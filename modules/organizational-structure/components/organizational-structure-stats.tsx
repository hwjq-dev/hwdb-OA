import { IconUserCheck } from '@tabler/icons-react';
import { Building2 } from 'lucide-react';

export const OrganizationalStructureStats = () => {
  return (
    <div className="grid grid-cols-2 gap-6 pt-2 pb-4">
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-70% via-green-400 to-green-400 rounded-2xl py-3 px-3 flex items-center space-x-3 outline outline-offset-4 outline-green-500/30">
        <div className="p-2 w-fit shadow-sm rounded-lg bg-white">
          <IconUserCheck className="size-5 text-green-500" />
        </div>
        <div>
          <p className="text-xs font-medium text-white">名下人员总数</p>
          <p className="font-bold text-white">520</p>
        </div>
        <AbsoluteStyle />
      </div>

      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-500 via-60% via-yellow-400/90 to-yellow-400/90 rounded-2xl py-1 px-3 flex items-center space-x-3 outline outline-offset-4 outline-yellow-500/40">
        <div className="p-2 w-fit shadow-sm rounded-lg bg-white">
          <Building2 className="size-5 text-yellow-500" />
        </div>
        <div>
          <p className="text-xs font-medium text-white">名下部门总数</p>
          <p className="font-bold text-white">8</p>
        </div>
        <AbsoluteStyle />
      </div>
    </div>
  );
};

const AbsoluteStyle = () => (
  <>
    <div className="absolute size-16 rounded-full bg-black/15 top-0 -right-12" />
    <div className="absolute size-16 rounded-full bg-black/15 top-0 -right-12" />
  </>
);
