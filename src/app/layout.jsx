import localFont from 'next/font/local'
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from '@/Presentation/components/theme-provider';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "نفوذ شناسی",
  description: "سایتی برای شناختن نفوذی ها",
};

const vazir = localFont({
   src: [
      {
         path: "../../public/fonts/Vazir-Thin.ttf",
         weight: "400",
         style: "normal",
      },
   ],

   variable: "--vazir",
   display: "swap",
   preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl" className={`${vazir.variable}`} suppressHydrationWarning>
      <body
        className={`${vazir.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
         >

            {children}
            
         </ThemeProvider>
      </body>
    </html>
  );
}
