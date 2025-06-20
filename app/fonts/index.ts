import { Noto_Sans_SC } from 'next/font/google';

export const notoSans = Noto_Sans_SC({
  variable: '--font-notoSans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '800'],
});
