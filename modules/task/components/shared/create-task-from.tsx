'use client';

import { useMutation } from '@tanstack/react-query';
import { CircleCheckBig, LoaderCircle, Plus } from 'lucide-react';
import { ReactNode, useState } from 'react';
import { toast } from 'sonner';

import { createSelfTask, ISelfCreateTask } from '@/api';
import { PriorityOptionsSelect } from '@/components/filter-options/priority-options-select';
import { ErrorAlert } from '@/components/molecules/alert';
import DateTimeCustomPicker from '@/components/molecules/day-picker';
import { BaseModal } from '@/components/molecules/modal/base-modal';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuthStore } from '@/hooks/use-auth';
import { useDiscloser } from '@/hooks/use-discloser';
import { formatToDateTimeString } from '@/lib/dayjs';
import { FormFieldWrapper } from '@/modules/human-resouce/components/application-blocks/base/form-field-wrapper';

import { selfTaskCreateInput, useSelfTaskCreateForm } from '../../hooks/use-self-task-create-form';

export const CreateTaskForm = () => {
  return (
    <div className="space-y-1 flex items-center justify-between">
      <p className="font-bold text-xl text-gray-800">任务例表</p>
      <div
        className="bg-white flex items-center space-x-2 border border-gray-1200 px-3 h-10 rounded-lg shadow-[0px_2px_56px_-13px_#a3b0b8]
"
      >
        <span className="text-sm text-dark font-medium">发布任务</span>
        <CreateFormModal />
      </div>
    </div>
  );
};

interface Props {
  icon?: ReactNode;
  title?: string;
}

export const CreateFormModal: React.FC<Props> = ({ icon, title = '个人发布任务' }) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({ error: false, msg: '' });
  const { isOpen, toggle, close } = useDiscloser();
  const { data: auth } = useAuthStore();
  const form = useSelfTaskCreateForm();

  const mutation = useMutation({
    mutationFn: (data: ISelfCreateTask) => createSelfTask(data),
  });

  //-- Handle submit task
  async function onSubmit(data: selfTaskCreateInput) {
    setLoading(true);
    mutation.mutate(
      {
        title: data.title,
        content: data.content,
        priority: +data.priority,
        department_id: auth?.department_id as number,
        position_level: auth?.position_level as number,
        processor_id: auth?.id as number,
        type: 1,
        start_time: formatToDateTimeString(data.startDate),
        complete_time: formatToDateTimeString(data.endDate),
      },
      {
        onError: () => {
          setLoading(false);
          alert('Something went wrong');
        },
        onSuccess: (res) => {
          if (res?.code == 10001 || res?.code === 10403) {
            setLoading(false);
            return setState({ error: true, msg: res.msg });
          }

          form.reset();
          close();
          setState({ error: false, msg: '' });
          setLoading(false);
          toast('您的任务已申请成功。', {
            className: '!w-1/2 !ml-auto !mr-6',
            icon: <CircleCheckBig className="text-green-500" />,
            position: 'top-center',
          });
        },
      },
    );
  }

  const isPriorityError = form.formState.errors.priority?.message;
  const isStartDateError = form.formState.errors.startDate?.message;
  const isEndDateError = form.formState.errors.endDate?.message;

  return (
    <BaseModal
      disable={loading}
      open={isOpen}
      title={title}
      description="请输入以下申请表单"
      icon={
        icon ? (
          icon
        ) : (
          <div className="bg-primary-200/60 p-1.5 rounded-full">
            <Plus className="size-4 text-primary" />
          </div>
        )
      }
      onClose={() => {
        form.reset();
        close();
      }}
      onOpenChange={toggle}
    >
      <Form {...form}>
        <form className="flex flex-col space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          {state.error && <ErrorAlert label={state.msg} />}
          {/*--- Title ---*/}
          <FormFieldWrapper label="任务标题">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="请输入任务标题"
                      className="text-sm"
                      {...field}
                      autoFocus={false}
                    />
                  </FormControl>
                  <FormMessage className="text-red text-xs" />
                </FormItem>
              )}
            />
          </FormFieldWrapper>

          {/*--- Priority ---*/}
          <FormFieldWrapper label="任务优先">
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PriorityOptionsSelect
                      disable={loading}
                      className={isPriorityError ? 'border border-red-600' : ''}
                      placeholder="选择优先"
                      onChange={(value) => field.onChange(value)}
                    />
                  </FormControl>
                  <FormMessage className="text-red text-xs" />
                </FormItem>
              )}
            />
          </FormFieldWrapper>

          {/*--- Description ---*/}
          <FormFieldWrapper label="任务内容">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      disabled={loading}
                      placeholder="请输入任务内容 ..."
                      className="h-28"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red text-xs" />
                </FormItem>
              )}
            />
          </FormFieldWrapper>

          {/*--- Start date ---*/}
          <FormFieldWrapper label="开始时间">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <DateTimeCustomPicker
                      disable={loading}
                      className={isStartDateError ? 'border border-red-600' : ''}
                      placeholder="选择时间"
                      onSelected={(date) => field.onChange(date)}
                    />
                  </FormControl>
                  <FormMessage className="text-red text-xs" />
                </FormItem>
              )}
            />
          </FormFieldWrapper>

          {/*--- Complete date ---*/}
          <FormFieldWrapper label="截止时间">
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <DateTimeCustomPicker
                      disable={loading}
                      className={isEndDateError ? 'border border-red-600' : ''}
                      placeholder="选择时间"
                      onSelected={(date) => field.onChange(date)}
                    />
                  </FormControl>
                  <FormMessage className="text-red text-xs" />
                </FormItem>
              )}
            />
          </FormFieldWrapper>

          <Button
            disabled={loading}
            type="submit"
            className="hover:!bg-primary/80 mt-2 cursor-pointer"
          >
            {loading ? (
              <div className="flex space-x-1.5 items-center">
                <span>
                  <LoaderCircle className="text-white animate-spin" />
                </span>
                <span className="text-sm">正在提交</span>
              </div>
            ) : (
              '申请任务'
            )}
          </Button>
        </form>
      </Form>
    </BaseModal>
  );
};
