'use client';

import { Roboto } from 'next/font/google';
import '@/styles/tailwind.css';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>UITOUX</title>
            </head>
            <body className={roboto.className} suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
