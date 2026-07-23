import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Miško Ritmu",
    description: "Miškininkystės ir konsultacijų paslaugos",
    icons: {
        icon: "/logo juodas.svg",
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
