import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LauchCmp from "@/components/LauchCmp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IFZINA: Premier EPC Partner in Nigeria | Engineering, Procurement, and Construction, Maintenance",
  description: "Learn about IFZINA, a leading EPC company in Nigeria, offering comprehensive engineering, procurement, and construction services. Discover our mission, values, portfolio, and client testimonials.",
  keywords:"EPC company, engineering services, Nigeria, sustainable solutions, renewable energy, solar, wind energy, building services, maintenance"
};

export default function RootLayout({ children }) {
  const links = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/market', label: 'MARKET' },
    { path: '/service', label: 'SERVICES' },
    { path: '/contact', label: 'CONTACT' }
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header links={links} />
        {children}
        <LauchCmp/>
        <Footer />
      </body>
    </html>
  );
}
