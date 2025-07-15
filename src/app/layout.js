import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '700'],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Contact Directory",
  description: "A directory of contacts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
