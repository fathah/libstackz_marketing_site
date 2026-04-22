import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Libstackz | Modern Library Management System",
  description:
    "Libstackz is a lightweight, scalable, and cloud-based library management software for schools, colleges, and public libraries. Manage books, members, and transactions with ease.",
  keywords: [
    "library management system",
    "library software",
    "school library",
    "college library",
    "cloud library",
    "libstackz",
    "library automation",
  ],
  authors: [{ name: "Ziqx Creative Planet", url: "https://ziqx.in" }],
  creator: "Ziqx CC LLP",
  publisher: "Ziqx CC LLP",
  openGraph: {
    title: "Libstackz | Modern Library Management System",
    description:
      "The all-in-one solution for modern library management. Cloud backup, intuitive interface, and powerful database support.",
    url: "https://libstackz.com",
    siteName: "Libstackz",
    images: [
      {
        url: "https://libstackz.com/thumb.jpg",
        width: 1200,
        height: 630,
        alt: "Libstackz Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Libstackz | Modern Library Management System",
    description:
      "Manage your library efficiently with Libstackz. Cloud-based, secure, and user-friendly.",
    images: ["/thumb.jpg"],
    creator: "@ziqx_cr",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} `}>{children}</body>
    </html>
  );
}
