import { NextPage } from 'next';

const Page: NextPage = async () => {
  return (
    <div className="p-8 space-y-2">
      <h2 className="text-4xl font-bold">欢迎来到好旺担保</h2>
      <p className=" leading-tight">
        我们为虚拟币、虚拟资产、机动车辆、房地产交易及产权过户等多种场景提供专业担保服务。
      </p>
      <p className=" leading-tight">
        We provide professional escrow services for a variety of scenarios, including transactions involving
        cryptocurrencies, virtual assets, motor vehicles, real estate, and property title transfers.
      </p>
    </div>
  );
};

export default Page;
