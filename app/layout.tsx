import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Miškininkystės ir miškotvarkos paslaugos | MB Miško Ritmu",
    description: "Miškotvarkos projektai, miško vertinimas, leidimų kirsti mišką tvarkymas, miško įveisimas ir konsultacijos miškininkystės klausimais. Patirtis nuo 2003 m.",
    openGraph: {
        title: "MB Miško Ritmu — Miškininkystės paslaugos",
        description: "Miškotvarkos projektai, miško vertinimas, leidimai kirsti mišką ir konsultacijos miškininkystės klausimais visoje Lietuvoje.",
        url: "https://misko-ritmu.lt/",
        siteName: "MB Miško Ritmu",
        locale: "lt_LT",
        type: "website",
        images: [
            {
                url: "https://misko-ritmu.lt/_next/image?url=%2Fimages%2Fhero.png&w=3840&q=75",
                width: 1200,
                height: 630,
            },
        ],
    },
    icons: {
        icon: "/images/flavicon.svg",
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
