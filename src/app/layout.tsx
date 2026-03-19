import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "중앙요양원 | 대전역 앞, 품격 있는 요양 서비스",
  description:
    "대전역 바로 앞 중앙요양원. 호텔같은 시설, 전문 재활치료, 따뜻한 돌봄으로 어르신의 행복한 노후를 함께합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
