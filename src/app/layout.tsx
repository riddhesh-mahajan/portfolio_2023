import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const metaDescription =
  "Back in 2018, I decided to try my hand at various technologies like React, Android, Django, Node etc. Fast-forward to today, and I’ve had the privilege of building mvps for multiple startups, and complex products for well established companies. My main focus these days is building products and leading projects. In my free time I am learning new technologies like nextjs, tailwindcss, typescript etc.";

export const metadata: Metadata = {
  title: "Riddhesh Mahajan",
  keywords: [
    "React",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Django",
    "Python",
  ],
  robots: "index,follow",
  other: {
    "og:title": "Riddhesh Mahajan",
    "og:description": metaDescription,
    "og:image": "https://i.ibb.co/yBW6xFs/android-chrome-512x512.png",
    "twitter:title": "Riddhesh Mahajan",
    "twitter:description": metaDescription,
    "twitter:image": "https://i.ibb.co/yBW6xFs/android-chrome-512x512.png",
  },
  description: metaDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={
          inter.className +
          "leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900"
        }
      >
        {children}
      </body>
    </html>
  );
}
