import WebApp from '@twa-dev/sdk';
import { useEffect, useState } from 'react';

import { useTgUserDateStore } from '@/store/use-tg-user-data-store';

interface UserDataProps {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
}

export const useTelegramUserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setUserData } = useTgUserDateStore();

  useEffect(() => {
    setIsLoading(true);
    try {
      if (typeof window != 'undefined') {
        const isTelegramEnvironment =
          typeof window !== 'undefined' &&
          typeof WebApp !== 'undefined' &&
          typeof WebApp.initDataUnsafe?.user !== 'undefined';

        if (!isTelegramEnvironment) {
          window.location.assign('https://google.com/');
          return;
        }

        const user = WebApp.initDataUnsafe?.user as unknown as UserDataProps;

        setUserData({
          tgId: user.id,
          username: `${user.first_name} ${user.last_name}`,
        });
      }
    } catch (error) {
      // console.log(error);
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading };
};
