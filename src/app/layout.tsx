import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-toggler";
import { Toaster } from "@/components/ui/sonner";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Investo Assignment",
  description: "Investo assignment created by jayant issar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    suppressHydrationWarning
    lang="en">
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      
      >
        <body className={`${manrope.className} font-sans antialiased`}>
          <Toaster/>
          <div className="fixed top-5 right-5 z-20">
            <ModeToggle />
          </div>
          
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
