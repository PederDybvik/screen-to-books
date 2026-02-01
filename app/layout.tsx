import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://screen-to-books.vercel.app"),
    title: "Screen time to books calculator",
    description: 'How many books are you "scrolling" each year?',

    openGraph: {
        title: "Screen time to books calculator",
        description: 'How many books are you "scrolling" each year?',
        url: "https://screen-to-books.vercel.app",
        siteName: "Screen to Books",
        type: "website",
        images: [
            {
                url: "/WebsitePreviewImage.png",
                width: 1200,
                height: 630,
                alt: "Screen time to books calculator preview",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Screen time to books calculator",
        description: 'How many books are you "scrolling" each year?',
        images: ["/WebsitePreviewImage.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <Footer />
            </body>
        </html>
    );
}

