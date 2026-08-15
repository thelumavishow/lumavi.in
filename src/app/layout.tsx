import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { FloatingActionMenu } from "@/components/FloatingActionMenu";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumavi — Where Little Imaginations Shine.",
  description: "A world of imagination, creativity, and wonder for children and families. Coming soon.",
  keywords: ["Lumavi", "children brand", "imagination", "creativity", "play", "stories", "wonder"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-[#F9F7F3] font-sans selection:bg-[#4D5D36] selection:text-[#F9F7F3]">
        {children}
        <FloatingActionMenu />
      </body>
    </html>
  );
}
