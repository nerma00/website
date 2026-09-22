import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
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
      className={`${figtree.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 pb-10 pt-6 sm:pt-12">
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
