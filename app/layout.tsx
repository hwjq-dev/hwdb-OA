import type { Metadata } from 'next';
import './globals.css';
import { pingFang, ubuntu } from './fonts';

export const metadata: Metadata = {
  title: '好旺担保OA小程序',
  description: 'Haowang OA mini app system',
};

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="zh">
      <body className={`${ubuntu.className} ${pingFang.className} antialiased`}>{children}</body>
    </html>
  );
}
