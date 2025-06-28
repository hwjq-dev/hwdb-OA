// 'use client';

// import { CircleCheck } from 'lucide-react';
// import { toast } from 'sonner';

// import DateTimeCustomPicker from '@/components/molecules/day-picker';
// import { BaseModal } from '@/components/molecules/modal/base-modal';
// import { SearchSelect } from '@/components/molecules/search-select';
// import { CustomSelect } from '@/components/molecules/select';
// import { TextInput } from '@/components/molecules/text-input';
// import { Button } from '@/components/ui/button';
// import { Textarea } from '@/components/ui/textarea';
// import { useDiscloser } from '@/hooks/use-discloser';

// export const TaskAssignmentUpdate: React.FC<TaskProps> = (props) => {
//   const { isOpen, close, toggle } = useDiscloser();

//   return (
//     <BaseModal
//       open={isOpen}
//       title="员工分配任务"
//       description="请输入以下申请表单"
//       icon={
//         <Button variant="destructive" size="sm" className="!text-[12px] rounded-full !h-7 px-3.5">
//           编辑
//         </Button>
//       }
//       onClose={() => close()}
//       onOpenChange={() => toggle()}
//     >
//       <form
//         className="flex flex-col space-y-3"
//         onSubmit={(e) => {
//           e.preventDefault();
//           close();
//           toast('记录已编辑成功.', {
//             icon: <CircleCheck className="text-green-500" />,
//             position: 'top-right',
//           });
//         }}
//       >
//         {/*--- Title ---*/}
//         <TextInput label="请输入任务标题" value={props.title} onChange={(v) => null} />

//         <div className="grid grid-cols-2 gap-2">
//           {/*--- Select department ---*/}
//           <SearchSelect
//             items={[
//               { label: '运维部门', value: '运维部门' },
//               { label: '产品部门', value: '产品部门' },
//               { label: '技术部门', value: '技术部门' },
//               { label: '人事部门', value: '人事部门' },
//               { label: '交易员部门', value: '交易员部门' },
//             ]}
//             placeholder="选择部门"
//             defaultValue={props.department}
//             onChange={(value) => null}
//           />

//           {/*--- Select approver ---*/}
//           <SearchSelect
//             items={[
//               { label: '明华', value: '明华' },
//               { label: '深泽', value: '深泽' },
//               { label: '丽丽', value: '丽丽' },
//               { label: '月圆', value: '月圆' },
//               { label: '明师', value: '明师' },
//             ]}
//             placeholder="选择负责任"
//             defaultValue={props.assignee}
//             onChange={(value) => null}
//           />
//         </div>

//         {/*--- Start date ---*/}
//         <DateTimeCustomPicker
//           placeholder="开始时间"
//           date={new Date(props.startAt as string)}
//           onSelected={(date) => null}
//         />

//         {/*--- Complete date ---*/}
//         <DateTimeCustomPicker
//           date={new Date(props.endAt as string)}
//           placeholder="截止时间"
//           onSelected={(date) => null}
//         />

//         {/*--- Priority ---*/}
//         <CustomSelect
//           placeholder="选择优先"
//           items={[
//             { lable: '高优先', value: '高优先' },
//             { lable: '中优先', value: '中优先' },
//             { lable: '低优先', value: '低优先' },
//           ]}
//           defaultValue={props.priority}
//           onChange={(value) => null}
//         />

//         {/*--- Description ---*/}
//         <Textarea
//           placeholder="请输入任务描述 ..."
//           defaultValue={props.subtitle}
//           onChange={(e) => null}
//         />

//         <Button type="submit" className="hover:!bg-primary/50">
//           编辑
//         </Button>
//       </form>
//     </BaseModal>
//   );
// };
