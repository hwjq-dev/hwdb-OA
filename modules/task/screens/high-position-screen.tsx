import {
  HighPositionFilter,
  HighPositionList,
  HighPositionMenu,
  HighPositionStats,
} from '../components/high-position';

export const HighPositionScreen = () => {
  return (
    <div className="size-full overflow-auto">
      <HighPositionStats />
      <HighPositionMenu />
      <div className="border-l-4 rounded-xs border-primary/90 pl-2 mx-2 mt-2">
        <p className="font-medium text-gray-800">所有任务</p>
      </div>
      <HighPositionFilter />
      <HighPositionList />
    </div>
  );
};
