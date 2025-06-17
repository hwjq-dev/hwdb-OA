import { useForm } from 'react-hook-form';
import * as v from 'valibot';

export const useTaskForm = () => {
  const createTaskFormSchema = () =>
    v.object({
      title: v.pipe(v.string(), v.nonEmpty('请输入任务标题'), v.minLength(1, '输入标题太短')),
      department: v.pipe(v.string(), v.nonEmpty('请选择部门'), v.minLength(1)),
      person: v.pipe(v.string(), v.nonEmpty('请选择审批者'), v.minLength(1)),
      startDate: v.pipe(v.date(), v.toMinValue(new Date())),
      endDate: v.pipe(v.date(), v.toMinValue(new Date())),
      priority: v.pipe(v.string(), v.minLength(1), v.nonEmpty('请选择任务优先')),
      description: v.pipe(v.string(), v.minLength(8), v.nonEmpty('请输入任务描述')),
    });

  type createTaskFormInput = v.InferInput<ReturnType<typeof createTaskFormSchema>>;

  const form = useForm<createTaskFormInput>();

  return form;
};
