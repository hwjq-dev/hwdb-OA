import { NextPage } from 'next';

import { TgLogin } from '@/components/molecules/tg-login';

/**
 * First request will come to this
 */
const Page: NextPage = () => {
  return <TgLogin />;
};

export default Page;
