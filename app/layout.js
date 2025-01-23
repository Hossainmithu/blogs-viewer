import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="max-w-7xl mx-auto">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav>
          <ul className="flex gap-10">
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/profile'>Profile</Link></li>
          </ul>
        </nav>
        <br />
        {children}
      </body>
    </html>
  );
}
