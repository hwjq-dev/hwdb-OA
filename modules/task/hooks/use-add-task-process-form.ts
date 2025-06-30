import { valibotResolver } from '@hookform/resolvers/valibot';
import { useForm } from 'react-hook-form';
import * as v from 'valibot';

interface Error {
  empty_type_msg: string;
  empty_content_msg: string;
  empty_min_content_msg: string;
}

const AddTaskProcessSchema = (e: Error) =>
  v.object({
    type: v.pipe(v.string(), v.nonEmpty(e.empty_type_msg)),
    content: v.pipe(
      v.string(),
      v.nonEmpty(e.empty_content_msg),
      v.minLength(8, e.empty_min_content_msg),
    ),
  });

export type addProcessTaskInput = v.InferInput<ReturnType<typeof AddTaskProcessSchema>>;

export const useAddProcessTaskForm = () => {
  const form = useForm<addProcessTaskInput>({
    resolver: valibotResolver(
      AddTaskProcessSchema({
        empty_type_msg: '请选择类型',
        empty_content_msg: '请输入进展任务内容',
        empty_min_content_msg: '输入进展内容太短 ,至少 8 个字',
      }),
    ),
    defaultValues: {
      type: '',
      content: '',
    },
  });
  return form;
};
