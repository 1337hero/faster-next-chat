import { Navbar } from "@/components/ui/navbar";
import { Sidebar } from "@/components/ui/sidebar";
import { SidebarLayout } from "@/components/ui/sidebar-layout";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "MK3Y Chat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SidebarLayout
          sidebar={<Sidebar>{/* Gonna stick my chats here ! */}</Sidebar>}
          navbar={<Navbar>{/* Well... I need it I'm sure */}</Navbar>}
        >
          {children}
        </SidebarLayout>
      </body>
    </html>
  );
}
