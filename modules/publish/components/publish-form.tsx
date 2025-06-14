import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CircleCheck } from 'lucide-react';
import { toast } from 'sonner';

export const PublishForm = () => {
  return (
    <form
      className="relative px-5 py-7 mx-1 mt-3.5 space-y-5 border border-gray-200/60 rounded-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        toast('发布已成功.', {
          className: '!w-1/2 !ml-auto !mr-6',
          icon: <CircleCheck className="text-green-500" />,
          position: 'top-center',
        });
      }}
    >
      <div className="absolute bg-white text-sm -top-3 left-4.5 px-1">
        <h2 className="font-bold">公告通知表</h2>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="标题" className="ml-1">
          标题 <span className="text-dark">(非空)</span>
        </Label>
        <Input
          type="text"
          id="标题"
          placeholder="请输入标题 ..."
          className="py-1 h-11 px-3 text-sm border-none shadow-none bg-gray-100/80"
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="描述" className="ml-1">
          描述 <span className="text-dark">(非空)</span>
        </Label>
        <Textarea
          id="描述"
          className="h-28 text-sm border-none bg-gray-100/80"
          placeholder="请输入您描述 ..."
        />
      </div>

      <div>
        <Button type="submit" className="w-full h-11 rounded-xl">
          立即发布
        </Button>
      </div>
    </form>
  );
};
