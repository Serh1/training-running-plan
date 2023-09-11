import "./globals.css";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js + Prisma + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "${oswald.className} sans-serif bg-white text-black container mx-auto p-4 "
        }
      >
        {children}
      </body>
    </html>
  );
}
