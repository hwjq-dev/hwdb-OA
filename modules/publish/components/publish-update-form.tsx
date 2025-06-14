'use client';

import { BaseModal } from '@/components/molecules/modal/base-modal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useDiscloser } from '@/hooks/use-discloser';
import { CircleCheck, SquarePen } from 'lucide-react';
import { toast } from 'sonner';
import { PublishCardProps } from './publish-card';

export const PublishUpdateForm: React.FC<PublishCardProps> = ({ date, title, description }) => {
  const { isOpen, close, toggle } = useDiscloser();

  return (
    <BaseModal
      open={isOpen}
      title="更新通知"
      description="请输入以下申请表单"
      icon={<SquarePen className="size-4 text-primary-600" />}
      onClose={() => close()}
      onOpenChange={() => toggle()}
    >
      <form
        className="flex flex-col space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          close();
          toast('更新已成功.', {
            className: '!w-1/2 !ml-auto !mr-6',
            icon: <CircleCheck className="text-green-500" />,
            position: 'top-center',
          });
        }}
      >
        <div className="space-y-1.5">
          <Label htmlFor="标题" className="ml-1">
            标题 <span className="text-dark">(非空)</span>
          </Label>
          <Input
            defaultValue={title}
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
            defaultValue={description}
            id="描述"
            className="h-28 text-sm border-none bg-gray-100/80"
            placeholder="请输入您描述 ..."
          />
        </div>

        <Button type="submit" className="hover:!bg-primary/50">
          更新通知
        </Button>
      </form>
    </BaseModal>
  );
};
