import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import ConvexClientProvider from "@/app/provider/ConvexClientProvider";

export const metadata: Metadata = {
  title: "SBY E-Tourism Chat",
  description: "Chatbot for Surabaya tourism",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
        </body>
    </html>
  );
}
