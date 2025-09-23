import type { Metadata } from "next";
//import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/Provider";

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel's Portfolio",
  description: "Moderm & Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
