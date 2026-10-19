import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://misko-ritmu.lt"),
  title: "Miškotvarkos ir miškininkystės paslaugos | Miško Ritmu",
  description:
    "Miškotvarkos projektai, miško įveisimas, leidimai kirsti mišką, biržių atrėžimas ir valdos ribų žymėjimas. 20+ metų patirtis. Skambinkite: +370 613 47676.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Miškotvarkos ir miškininkystės paslaugos | Miško Ritmu",
    description:
      "Miškotvarkos projektai, miško įveisimas, leidimai kirsti mišką ir valdos ribų žymėjimas. 20+ metų patirtis.",
    url: "https://misko-ritmu.lt",
    siteName: "Miško Ritmu",
    locale: "lt_LT",
    type: "website",
      images: [
    {
      url: "/images/hero.png",
      width: 1200,
      height: 630,
      alt: "Miškotvarkos ir miškininkystės paslaugos Lietuvoje",
    },
  ],
  },
  icons: {
    icon: [
      { url: "/images/icon-light.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: "/images/icon-dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="lt">
            <body>
                {children}
            </body>
        </html>
    );
}
