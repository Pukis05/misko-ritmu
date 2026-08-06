import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Miškininkystės ir miškotvarkos paslaugos | MB Miško Ritmu",
    description: "Miškotvarkos projektai, miško vertinimas, leidimų kirsti mišką tvarkymas, miško įveisimas ir konsultacijos miškininkystės klausimais. Patirtis nuo 2003 m.",
    keywords: [
        "miškininkystės paslaugos",
        "miškotvarka",
        "miško vertinimas",
        "leidimai kirsti mišką",
        "miško įveisimas",
        "miško valdos ribų žymėjimas",
    ],
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
