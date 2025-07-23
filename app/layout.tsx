import type { Metadata } from "next";
import { Open_Sans, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
});

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Atrangi Productions",
    description:
        "From Ideas to Impact, On Stage or Screen. We Create, Curate & Convene.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${openSans.variable} ${jost.variable} antialiased`}
            >
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
