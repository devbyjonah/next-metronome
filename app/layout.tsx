import "./globals.css";
import { Inter } from "next/font/google";

import Header from "@/components/header";
import AuthContext from "@/app/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Metronome",
  description: "A simple online metronome",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-background-dark" lang="en">
      <body className={inter.className}>
        <AuthContext>
          <Header />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
