import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const interFont = localFont({
  src: '../public/fonts/Inter_18pt-Regular.ttf',
  variable: '--font-inter',
});

const soraFont = localFont({
  src: '../public/fonts/Sora-Regular.ttf',
  variable: '--font-sora',
})

const nunitoFont = localFont({
  src: '../public/fonts/Nunito-Regular.ttf',
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'CodeBox: Your all-in-one AI coding assistant',
  description: 'G  Say goodbye to complexity and hello to simplicity. CodeBox is an AI-powered tool designed to assist developers by streamlining the coding process, making your workflow faster and more efficient.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} ${soraFont.variable} ${nunitoFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
