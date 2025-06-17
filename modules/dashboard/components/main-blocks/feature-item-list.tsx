import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface Props {
  label: string;
  items: ItemProps[];
}

export const FeatureItemsList: React.FC<Props> = ({ label, items }) => {
  return (
    <div className="bg-white p-4 mx-4 rounded-2xl shadow-[0px_0px_45px_0px_#dbdbdb]">
      <div className="flex space-x-1 items-center">
        <div className="h-4 w-1 bg-primary rounded-sm" />
        <p className="font-bold">{label}</p>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2.5">
        {items.map((x, i) => (
          <Item key={i} {...x} />
        ))}
      </div>
    </div>
  );
};

interface ItemProps {
  alt: string;
  icon: StaticImageData;
  label: string;
  link: string;
}

const Item: React.FC<ItemProps> = ({ alt, icon, label, link }) => {
  return (
    <Link href={link || '#'}>
      <div className="flex flex-col bg-gray-100/70 px-1 py-2 rounded-xl items-center justify-center space-y-1.5">
        <Image width={32} height={32} src={icon} className="object-cover" alt={alt} priority />
        <span className="text-[13px] font-medium text-dark">{label}</span>
      </div>
    </Link>
  );
};
