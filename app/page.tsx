import { NextPage } from 'next';
import { redirect, RedirectType } from 'next/navigation';

import { ROUTES } from '@/config/route';

const Page: NextPage = () => {
  return redirect(ROUTES.NOTIFICATION, RedirectType.replace);
};

export default Page;
