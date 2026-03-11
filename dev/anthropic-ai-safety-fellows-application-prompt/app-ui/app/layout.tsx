import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Anthropic AI Safety Fellows Application",
  description: "Application submission for Anthropic AI Safety Fellows program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ backgroundColor: '#09090b' }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zinc-800 focus:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-400"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="min-h-screen" role="main" aria-label="Main content">
          {children}
        </main>
      </body>
    </html>
  );
}
