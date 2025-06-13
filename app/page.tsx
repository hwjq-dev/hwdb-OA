import { NextPage } from 'next';

import { TestLogin } from '@/components/molecules/test-login';

const Page: NextPage = () => {
  return <TestLogin />;
  // return redirect(ROUTES.REQUEST, RedirectType.replace);
};

export default Page;
