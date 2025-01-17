import type { Metadata } from "next";
import "./globals.scss";
import { Kanit } from "next/font/google";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
export const metadata: Metadata = {
  title: "MathPractic",
  description: "Погрузись в мир математики!",
};

const kanit = Kanit({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <div className="container">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
