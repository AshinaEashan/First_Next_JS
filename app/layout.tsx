import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Travel",
  description: "Travel App for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
