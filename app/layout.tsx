import type { Metadata } from 'next';

import { TanstackProvider } from '@/lib/tanstack-provider';

import { pingFang, ubuntu } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: '好旺担保OA小程序',
  description: 'Haowang OA mini app system',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="zh">
      <body
        className={`relative h-[100dvh] ${ubuntu.className} ${pingFang.className} antialiased`}
        suppressHydrationWarning
      >
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
