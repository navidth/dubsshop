import type { Metadata } from "next";
import "../styles/globals.css";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "../components/navigation/index";
import Footer from "@/components/Footer";
import Providers from '@/components/redux/Provider'
import { ToastContainer } from "react-toastify";
import"react-toastify/ReactToastify.css"

export const metadata: Metadata = {
  title: "فروشگاه دابس",
  description: "فروشگاه انواع لوارم تنیس روی میز",
};
export const Iransens = localFont({
  src: "../../public/fonts/IRANSansWeb.ttf",
});
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
      <link rel="shortcut icon" href="https://codebazan.ir/wp-content/uploads/2019/01/mm.jpg" type="image/x-icon" />
      </head>
      <body className={` ${Iransens.className}`}>
        <Providers>
          <Navigation />
          <ToastContainer />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
