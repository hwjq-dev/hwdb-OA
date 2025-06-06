import { Ubuntu } from 'next/font/google';
import localFont from 'next/font/local';

export const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const pingFang = localFont({
  src: [
    {
      path: './PingFang_Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './PingFang_Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './PingFang_Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './PingFang_Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
});
