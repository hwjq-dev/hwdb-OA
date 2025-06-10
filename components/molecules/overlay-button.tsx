import { Button } from '../ui/button';

interface Props {
  btnLabel: string;
  onClick: () => void;
}

export const OverlayButton: React.FC<Props> = ({ btnLabel, onClick }) => {
  return (
    <div className="shadow-[0px_-10px_31px_0px_#d6d2d2] fixed left-0 right-0 w-full z-50 bg-white bottom-0">
      <div className="py-3 flex justify-center items-center">
        <Button onClick={onClick}>{btnLabel}</Button>
      </div>
    </div>
  );
};
