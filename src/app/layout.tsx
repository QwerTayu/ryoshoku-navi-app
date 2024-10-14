import type { Metadata } from "next";
import "./globals.css";
import { fonts } from './fonts'


export const metadata: Metadata = {
  title: '寮食なび',
  description: `明石高専寮生のためのアプリ`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${fonts.mplus.variable} ${fonts.mplus.variable}`}>
        {children}
      </body>
    </html>
  );
}
