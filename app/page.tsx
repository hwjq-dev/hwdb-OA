import { NextPage } from 'next';

import { TestLogin } from '@/components/molecules/test-login';
// import { LoginScreen } from '@/components/auth';

const Page: NextPage = () => {
  // return <LoginScreen />;
  return <TestLogin />;
  // return redirect(ROUTES.REQUEST, RedirectType.replace);
};

export default Page;
