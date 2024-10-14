import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "寮食なび ｜RECORD",
  description: `明石高専寮生のためのアプリ`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
