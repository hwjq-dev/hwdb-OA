import Image from 'next/image';

import EmptyStateImg from '@/public/images/empty-state.png';

interface Props {
  title: string;
  subtitle: string;
}

export const EmptyState: React.FC<Props> = ({ title, subtitle }) => (
  <div className=" h-[50dvh] mb-16 flex justify-center items-center">
    <div className="size-fit flex flex-col justify-center items-center">
      <Image src={EmptyStateImg} alt="empty-state" className="size-48 h-20 object-cover" />
      <div className="flex flex-col mt-3 justify-center items-center">
        <h2 className="text-xl font-semibold text-primary text-center">{title}</h2>
        <span className="font-medium text-dark text-center text-sm">{subtitle}</span>
      </div>
    </div>
  </div>
);
