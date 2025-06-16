import { group, listify, sort } from 'radash';

import { ROUTES } from '@/config/route';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { StructureCard } from './structure-card';

const items = [
  {
    id: 1,
    name: '李明',
    title: '产品经理',
    position: '经理',
    department: '产品部',
    src: 'https://res.cloudinary.com/dwz2dln92/image/upload/v1750042027/p-1_qecyoq.avif',
  },
  {
    id: 2,
    name: '王芳',
    title: '人力资源经理',
    position: '经理',
    department: '人事部',
    src: 'https://res.cloudinary.com/dwz2dln92/image/upload/v1750042977/p-3_1_vqkayn.jpg',
  },
  {
    id: 3,
    name: '张伟',
    title: '全端开发工程师',
    position: '经理',
    department: '技术部',
    src: 'https://res.cloudinary.com/dwz2dln92/image/upload/v1750042977/p-4_1_ysrd7w.jpg',
  },
  {
    id: 4,
    name: '赵强',
    title: '财务分析师',
    position: '人员',
    department: '财务部',
    src: 'https://res.cloudinary.com/dwz2dln92/image/upload/v1750042027/p2_n5arex.avif',
  },
  {
    id: 5,
    name: '李建国',
    title: '项目经理',
    position: '主管',
    department: '工程部',
    src: 'https://res.cloudinary.com/dwz2dln92/image/upload/v1750047659/p-6_wbsvjr.jpg',
  },
  {
    id: 6,
    name: '刘婷',
    title: '市场策划',
    position: '主管',
    department: '市场部',
    src: 'https://res.cloudinary.com/dwz2dln92/image/upload/v1750047660/p-5_qfftxo.jpg',
  },
  {
    id: 7,
    name: '高晨',
    title: '公司总裁',
    position: '总经理',
    department: '无',
    src: 'https://res.cloudinary.com/dwz2dln92/image/upload/v1750059611/p-7_nktpkd.jpg',
  },
  {
    id: 8,
    name: '黄子轩',
    title: '副总裁',
    position: '大经理',
    department: '无',
    src: 'https://res.cloudinary.com/dwz2dln92/image/upload/v1750059955/p-8_wdhjmd.jpg',
  },
  {
    id: 9,
    name: '高洁',
    title: '人力资源专员',
    position: '人员',
    department: '人事部',
    src: 'https://res.cloudinary.com/dwz2dln92/image/upload/v1750060557/p-9_o4mjkw.jpg',
  },
  {
    id: 10,
    name: '刘芳',
    title: '财务员',
    position: '人员',
    department: '财务部',
    src: 'https://res.cloudinary.com/dwz2dln92/image/upload/v1750060556/p-10_jmiqzo.jpg',
  },
];

export const StructureList = () => {
  const groupData = group(items, (f) => f.position);
  const structuredData = sort(
    listify(groupData, (key, value) => {
      return {
        label: key,
        data: value,
        order:
          key === '总经理'
            ? 1
            : key === '大经理'
              ? 2
              : key === '经理'
                ? 3
                : key === '主管'
                  ? 4
                  : key === '组长'
                    ? 5
                    : 6,
      };
    }),
    (f) => f.order,
  );

  return (
    <div className={cn('flex flex-col space-y-8 mt-4')}>
      {structuredData.map((x, i) => (
        <div
          key={i}
          className={cn(
            'relative flex flex-col space-y-3 bg-white border border-primary-200/70 rounded-3xl p-3',
            'after:content-[""] after:absolute after:w-0.5 after:h-8 after:border-r after:border-dashed after:border-primary-200 after:-bottom-8 after:right-1/2 after:-translate-x-1/2',
            'last:after:border-none',
          )}
        >
          <p className="font-bold text-black text-sm bg-gray-100 py-1.5 px-3 w-fit rounded-lg">
            {x.label}
          </p>
          {(x.data || []).map((x, j) => (
            <Link href={ROUTES.$STRUCTURE(x.id)} key={j}>
              <StructureCard {...x} />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};
