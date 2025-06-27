'use client';

import { IconChecklist, IconSitemap } from '@tabler/icons-react';
import { LayoutGrid, Megaphone } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

import { ROLE_CONFIG } from '@/config/role';
import { ROUTES } from '@/config/route';
import { useAuthStore } from '@/hooks/use-auth';
import { cn } from '@/lib/utils';
import { TaskAssignForm } from '@/modules/task/components/high-position/task-assignment';
import { CreateFormModal } from '@/modules/task/components/shared/create-task-from';

export const OthersSection = () => {
  const { data } = useAuthStore();
  const position = data?.position_level;

  const items: ItemProps[] = [
    {
      icon: <IconChecklist className="size-4 text-purple-400" />,
      label: '工作任务',
      className: 'bg-purple-200/60',
      textClassName: 'text-purple-500',
      link: ROUTES.TASK,
      isHide: ROLE_CONFIG.总经理.id == position,
    },
    {
      icon: <IconChecklist className="size-4 text-lime-400" />,
      label: '审核任务',
      className: 'bg-lime-200/40',
      textClassName: 'text-lime-500',
      link: ROUTES.TASK_REQUEST_APPROVAL,
      isHide: !(ROLE_CONFIG.总经理.id == position),
    },
    {
      icon: <IconChecklist className="size-4 text-sky-400" />,
      label: [ROLE_CONFIG.组员.id, ROLE_CONFIG.组长.id].includes(position as never)
        ? '申请任务'
        : '发布任务',
      className: 'bg-sky-200/40',
      textClassName: 'text-sky-500',
      link: '', // if it is not link, leave it blank
      isHide: ROLE_CONFIG.总经理.id == position,
    },
    {
      icon: <Megaphone className="size-4 text-primary" />,
      label: '发布通知',
      className: 'bg-primary-200/60',
      textClassName: 'text-primary',
      link: ROUTES.ANNOUCEMENT,
      isHide: [ROLE_CONFIG.组员.id, ROLE_CONFIG.组长.id].includes(position as never),
    },
    {
      icon: <TaskAssignForm icon={<IconChecklist className="size-4 text-emerald-400" />} />,
      label: '分配任务',
      className: 'bg-emerald-200/40',
      textClassName: 'text-emerald-500',
      link: '',
      isHide: !(ROLE_CONFIG.总经理.id == position),
    },
    {
      icon: <IconSitemap className="size-4 text-yellow-400" />,
      label: '组织架构',
      className: 'bg-yellow-100/60',
      textClassName: 'text-yellow-500',
      link: ROUTES.ORGANIZATIONAL_STRUCTURE,
      isHide: !(ROLE_CONFIG.总经理.id == position),
    },
    {
      icon: <IconSitemap className="size-4 text-pink-400" />,
      label: '考勤记录',
      className: 'bg-pink-100/60',
      textClassName: 'text-pink-500',
      link: ROUTES.HR_ATTENDENCE,
      isHide: false,
    },
    // {
    //   icon: <IconUser className="size-4 text-green-500" />,
    //   label: '用户档案',
    //   className: 'bg-green-100/70',
    //   textClassName: 'text-green-500',
    //   link: '#',
    // },
    // {
    //   icon: <IconAdjustmentsPause className="size-4 text-purple-500 bg-purple-50" />,
    //   label: '权限角色',
    //   className: 'bg-purple-100/70',
    //   textClassName: 'text-purple-500',
    //   link: '#',
    // },
    // {
    //   icon: <IconFileAnalytics className="size-4 text-pink-500 bg-purple-50" />,
    //   label: '操作日志',
    //   className: 'bg-pink-100/70',
    //   textClassName: 'text-pink-500',
    //   link: '#',
    // },
  ];

  return (
    <div className="bg-white p-4 mx-4 rounded-2xl shadow-[0px_0px_45px_0px_#dbdbdb]">
      <div className="flex space-x-1 items-center">
        <span className="p-1 bg-primary/15 rounded-sm">
          <LayoutGrid className="size-3.5 text-primary" />
        </span>
        <p className="font-bold">常用功能</p>
      </div>

      {/*-- 常用功能: 只能总经理显示 --*/}
      {ROLE_CONFIG.总经理.id == position && <GridList items={items.filter((x) => !x.isHide)} />}

      {/*-- 常用功能: 别的角色使用这种UI展示 --*/}
      <div className="grid grid-cols-3 gap-3 mt-3.5">
        {!(ROLE_CONFIG.总经理.id == position) &&
          items.map((x, i) =>
            x.label == '发布任务' || x.label == '申请任务' ? (
              <CreateFormModal
                title={
                  [ROLE_CONFIG.组员.id, ROLE_CONFIG.组长.id].includes(position as never)
                    ? '个人申请任务'
                    : '个人发布任务'
                }
                key={i}
                icon={
                  <div>
                    <Item {...x} />
                  </div>
                }
              />
            ) : (
              <Item key={i} {...x} />
            ),
          )}
      </div>
    </div>
  );
};

interface ItemProps {
  icon: ReactNode;
  label: string;
  className?: string;
  link: string;
  textClassName?: string;
  isHide: boolean;
}

const Item: React.FC<ItemProps> = ({
  icon: Icon,
  label,
  className,
  textClassName,
  link,
  isHide = false,
}) => {
  if (isHide) return null;

  if (!link)
    return (
      <div
        className={cn(
          'bg-primary-100 rounded-md px-2.5 py-1.5 flex items-center justify-between',
          className,
        )}
      >
        <span className={cn('text-xs text-primary font-medium', textClassName)}>{label}</span>
        <span className="p-1 bg-white rounded-full shadow-xs">{Icon}</span>
      </div>
    );

  return (
    <Link href={link || '#'}>
      <div
        className={cn(
          'bg-primary-100 rounded-md px-2.5 py-1.5 flex items-center justify-between',
          className,
        )}
      >
        <span className={cn('text-xs text-primary font-medium', textClassName)}>{label}</span>
        <span className="p-1 bg-white rounded-full shadow-xs">{Icon}</span>
      </div>
    </Link>
  );
};

// 总经理 UI
const GridList: React.FC<{ items: ItemProps[] }> = ({ items }) => {
  return (
    <div className="relative grid grid-cols-3 gap-4 mt-3.5">
      {items?.length >= 4 && (
        <div className="h-full translate-x-2 w-[1px] absolute left-[calc((100%/3)-0.7rem)] top-0 bg-gradient-to-t from-transparent via-primary/30 to-transparent" />
      )}

      {items?.length > 3 && (
        <div className="h-full translate-x-2 w-[1px] absolute left-[calc((100%/3*2)-0.4rem)] top-0 bg-gradient-to-t from-transparent via-primary/30 to-transparent" />
      )}

      {items?.length > 3 && (
        <div className="h-[1px] w-full absolute left-0 right-0 top-[6rem] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      )}

      {items?.length > 6 && (
        <div className="h-[1px] w-full absolute left-0 right-0 top-[12.5rem] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      )}

      {/*-- Content --*/}
      {items?.map((x, i) =>
        !x.link ? (
          <div
            key={i}
            className="flex justify-center cursor-pointer items-center space-y-2 rounded-lg py-3 flex-col"
          >
            <span className={cn('[&>*]:size-6 rounded-full p-2', x.className)}>{x.icon}</span>
            <p className="text-xs">{x.label}</p>
          </div>
        ) : (
          <Link
            href={x.link}
            key={i}
            className={cn(
              'flex justify-center cursor-pointer items-center rounded-lg space-y-2 py-3 flex-col',
            )}
          >
            <span className={cn('[&>*]:size-6 rounded-full p-2', x.className)}>{x.icon}</span>
            <p className="text-xs">{x.label}</p>
          </Link>
        ),
      )}
    </div>
  );
};
