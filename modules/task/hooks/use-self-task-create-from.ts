import { valibotResolver } from '@hookform/resolvers/valibot';
import { useForm } from 'react-hook-form';
import * as v from 'valibot';

interface Error {
  empty_title_msg: string;
  min_length_title_msg: string;
  empty_priority_msg: string;
  empty_content_msg: string;
  min_length_content: string;
  empty_date_msg: string;
}

const selfTaskCreateFormSchema = (e: Error) =>
  v.object({
    title: v.pipe(
      v.string(),
      v.nonEmpty(e.empty_title_msg),
      v.minLength(4, e.min_length_title_msg),
    ),
    startDate: v.pipe(v.date(e.empty_date_msg)),
    endDate: v.pipe(v.date(e.empty_date_msg)),
    priority: v.pipe(
      v.string(e.empty_date_msg),
      v.minLength(1, e.empty_priority_msg),
      v.nonEmpty(e.empty_priority_msg),
    ),
    content: v.pipe(
      v.string(),
      v.nonEmpty(e.empty_content_msg),
      v.minLength(8, e.min_length_content),
    ),
  });

export type selfTaskCreateInput = v.InferInput<ReturnType<typeof selfTaskCreateFormSchema>>;

export const useSelfTaskCreateForm = () => {
  const form = useForm<selfTaskCreateInput>({
    resolver: valibotResolver(
      selfTaskCreateFormSchema({
        empty_title_msg: '请输入任务标题',
        min_length_title_msg: '输入标题太短， ,至少 4 个字',
        empty_priority_msg: '请选择任务优先',
        empty_content_msg: '请输入任务内容',
        min_length_content: '输入内容太短 ,至少 8 个字',
        empty_date_msg: '请输选择时间',
      }),
    ),
    defaultValues: {
      title: '',
      content: '',
      priority: '',
    },
  });

  return form;
};
