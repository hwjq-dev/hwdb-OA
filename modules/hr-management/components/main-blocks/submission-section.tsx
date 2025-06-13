import { CheckCircle, Clock, Send } from 'lucide-react';
import { ReactNode } from 'react';

const items: ItemProps[] = [
  { icon: <Clock className="size-8 text-yellow-500" />, label: '待我审批', link: '#' },
  { icon: <CheckCircle className="size-8 text-green-500" />, label: '我已审批', link: '#' },
  { icon: <Send className="size-8 text-primary-500" />, label: '我发起的', link: '#' },
];

export const HrViewSubmissionSection = () => {
  return (
    <div className="bg-white p-4 mt-2 -translate-y-2/5 mx-4 rounded-2xl shadow-[0px_4px_30px_0px_#bababa]">
      <div className="grid grid-cols-3 gap-4 place-items-center">
        {items.map((x, i) => (
          <Item key={i} {...x} />
        ))}
      </div>
    </div>
  );
};

interface ItemProps {
  icon: ReactNode;
  label: string;
  link?: string;
}

export const Item: React.FC<ItemProps> = ({ icon: Icon, label }) => (
  <div className="flex flex-col justify-center bg-gray-100/70 py-2 px-6 rounded-2xl items-center space-y-1">
    {Icon}
    <p className="text-sm font-medium text-dark">{label}</p>
  </div>
);
