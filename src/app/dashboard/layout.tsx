import type { Metadata } from "next";
import "../../styles/globals.css";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.css";
import Providers from '@/components/redux/Provider'
import"react-toastify/ReactToastify.css"

export const metadata: Metadata = {
  title: "فروشگاه دابس",
  description: "فروشگاه انواع لوارم تنیس روی میز",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <Providers>
          {children}
        </Providers>
  );
}
