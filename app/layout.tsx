import type { Metadata } from "next";
import { Dashboard } from "@/components/Dashboard";
import "./globals.css";

export const metadata: Metadata = {
  title: "デイトレード損益管理",
  description: "日次損益と月次累計を一覧・グラフ・カレンダーで管理するMVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen antialiased">
        <Dashboard />
        {children}
      </body>
    </html>
  );
}
