import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme/provider";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nerma",
  description: "about me website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${figtree.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 py-6 sm:py-12">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
