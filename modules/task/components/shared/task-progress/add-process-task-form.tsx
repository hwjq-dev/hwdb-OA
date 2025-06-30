'use client';

import { useMutation } from '@tanstack/react-query';
import { CircleCheckBig, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'sonner';

import { addProcessTask, IAddProcessTask } from '@/api';
import { ErrorAlert } from '@/components/molecules/alert';
import { BaseModal } from '@/components/molecules/modal/base-modal';
import { CustomSelect } from '@/components/molecules/select';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { ROLE_CONFIG } from '@/config/role';
import { useAuthStore } from '@/hooks/use-auth';
import { useDiscloser } from '@/hooks/use-discloser';
import { QUERY_KEY } from '@/lib/key-config';
import { invalidateQuery } from '@/lib/tanstack-provider';
import { FormFieldWrapper } from '@/modules/human-resouce/components/application-blocks/base/form-field-wrapper';
import {
  addProcessTaskInput,
  useAddProcessTaskForm,
} from '@/modules/task/hooks/use-add-task-process-form';

interface Props {
  isReviewScreen: boolean;
  type: StatusType;
  taskId: number;
}

export const AddProcessTaskForm: React.FC<Props> = ({ taskId, type, isReviewScreen = false }) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({ error: false, msg: '' });

  const { data: auth } = useAuthStore();
  const { isOpen, close, toggle } = useDiscloser();
  const form = useAddProcessTaskForm();

  const mutation = useMutation({
    mutationFn: (data: IAddProcessTask) => addProcessTask(data),
  });

  if (
    ((type == '审核中' || type == '已完成,待审核' || type == '审核完成' || type == '已关闭') &&
      !isReviewScreen) ||
    type == '审核完成'
  )
    return null;

  const optioins =
    auth?.position_level == ROLE_CONFIG.组员.id || auth?.position_level == ROLE_CONFIG.组长.id
      ? [{ lable: '提交审核', value: '4' }]
      : [
          { lable: '分配任务', value: '2' },
          { lable: '审核任务', value: '3' },
          { lable: '完成任务', value: '5' },
          { lable: '取消任务', value: '6' },
        ];

  //-- Handle add task
  async function onSubmit(data: addProcessTaskInput) {
    setLoading(true);
    mutation.mutate(
      {
        task_id: taskId,
        title: '',
        content: data.content,
        type: Number(data.type),
        processor_id: isReviewScreen ? undefined : Number(auth?.id),
        reviewer_id: isReviewScreen ? Number(auth?.id) : undefined,
      },
      {
        onError: () => {
          setLoading(false);
          alert('Something went wrong');
        },
        onSuccess: (res) => {
          if (res?.code == 10001 || res?.code === 10403 || res?.code == 23000) {
            setLoading(false);
            return setState({ error: true, msg: res.msg });
          }

          form.reset();
          invalidateQuery(QUERY_KEY.taskDetail, taskId);
          close();
          setState({ error: false, msg: '' });
          setLoading(false);
          toast('添加任务进展成功。', {
            className: '!w-1/2 !ml-auto !mr-6',
            icon: <CircleCheckBig className="text-green-500" />,
            position: 'top-center',
          });
        },
      },
    );
  }

  const isTypeError = form.formState.errors.type?.message;

  return (
    <BaseModal
      icon={
        <button className="p-1.5 rounded-lg bg-gradient-to-r from-primary/90 to-cyan-400 flex px-3.5 cursor-pointer py-2 space-x-2 items-center">
          <span className="text-xs text-white">添加操作</span>
          <span>
            <Plus className="size-4 text-white" />
          </span>
        </button>
      }
      open={isOpen}
      title="添加任务进展"
      description="请输入以下申请表单"
      onClose={close}
      onOpenChange={toggle}
    >
      <Form {...form}>
        <form className="flex flex-col space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          {state.error && <ErrorAlert label={state.msg} />}

          {/*--- Type ---*/}
          <FormFieldWrapper label="选择类型">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <CustomSelect
                      disable={loading}
                      className={isTypeError ? 'border border-red-600' : ''}
                      placeholder="请选择"
                      onChange={(value) => field.onChange(value)}
                      items={optioins}
                    />
                  </FormControl>
                  <FormMessage className="text-red text-xs" />
                </FormItem>
              )}
            />
          </FormFieldWrapper>

          <FormFieldWrapper label="进展内容">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="请输入任务进展内容 ..."
                      className="h-28"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red text-xs" />
                </FormItem>
              )}
            />
          </FormFieldWrapper>

          <Button type="submit" className="hover:!bg-primary/50 cursor-pointer">
            保存
          </Button>
        </form>
      </Form>
    </BaseModal>
  );
};
