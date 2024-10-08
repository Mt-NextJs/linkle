import type { Metadata } from 'next';

//styles
import '@styles/global.css';
import '@styles/common.css';

export const metadata: Metadata = {
    title: {
        template: '%s | IN MY LINK',
        default: 'IN MY LINK',
    },
    description: 'BOOMCO co.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={'mx-auto max-w-screen-md'}>
                {children}
            </body>
        </html>
    );
}
