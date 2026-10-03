import type { Metadata } from "next";
import "./globals.css";
import LegacyScripts from "./legacy-scripts";

export const metadata: Metadata = {
  title: "Merry Land Restaurant",
  description: "Restaurant, food, drinks, and reservations at Merry Land in Kiserian.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Forum&display=swap" rel="stylesheet" />
      </head>
      <body id="top">
        {children}
        <LegacyScripts />
      </body>
    </html>
  );
}