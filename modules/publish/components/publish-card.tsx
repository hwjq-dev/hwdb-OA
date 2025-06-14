import { getFormatHumanReadable } from '@/lib/dayjs';
import { Clock } from 'lucide-react';
import { PublishDeleteForm } from './publish-delete-form';
import { PublishUpdateForm } from './publish-update-form';

export interface PublishCardProps {
  date: string;
  title: string;
  description: string;
}

export const PublishCard: React.FC<PublishCardProps> = (props) => {
  const { date, title, description } = props;

  return (
    <div className="relative m-3 p-4 space-y-1 rounded-lg bg-gray-100/70">
      <p className="text-xs flex items-center space-x-1">
        <Clock className="size-3 text-orange" />
        <span>{getFormatHumanReadable(new Date(date))}</span>
      </p>
      <p className="font-bold text-sm">{title}</p>
      <p className="text-sm line-clamp-2">{description}</p>

      {/*-- Action --*/}
      <div className="w-fit space-x-2 absolute top-2 right-2 flex items-center">
        <PublishUpdateForm {...props} />
        <PublishDeleteForm />
      </div>
    </div>
  );
};
