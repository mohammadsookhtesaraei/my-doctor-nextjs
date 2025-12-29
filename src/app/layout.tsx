import type { Metadata } from "next";
import { Vazirmatn } from 'next/font/google'


const vazirmatn = Vazirmatn ({
  subsets: ['latin','arabic'],
  display:"swap",

})
import "./globals.css";




export const metadata: Metadata = {
  title: "دکتر من",
  description: "پلتفرم جامع جستوجوی دکتر و رززو نوبت انلاین",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl"  className={vazirmatn.className}>
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
