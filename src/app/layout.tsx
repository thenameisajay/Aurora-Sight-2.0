import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from '@/providers/providers';

import DevelopmentBanner from '@/components/banners/banner/Banner';
import DesktopNav from '@/components/navbars/desktop/DesktopNav';
import MobileNav from '@/components/navbars/mobile/MobileNav';
import { siteConfig } from '@/data/site/site';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: siteConfig.title,
    applicationName: siteConfig.title,

    description: siteConfig.description,
    keywords: siteConfig.keywords,

    creator: siteConfig.creator,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning={true}
            className=" h-dvh w-dvw"
        >
            <head>
                <link
                    rel="icon"
                    href="/icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
                <link
                    rel="apple-touch-icon"
                    href="/apple-icon?<generated>"
                    type="image/<generated>"
                    sizes="<generated>"
                />
            </head>
            <body className={inter.className}>
                <Providers>
                    <DevelopmentBanner />
                    <DesktopNav />
                    <MobileNav />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
