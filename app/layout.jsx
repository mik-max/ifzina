import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LauchCmp from "@/components/LauchCmp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IFZINA | (EPC) Company",
  description: "Official Website of IFZINA | Engineering, Procurement and Construction Company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <LauchCmp/>
        <Footer />
      </body>
    </html>
  );
}
