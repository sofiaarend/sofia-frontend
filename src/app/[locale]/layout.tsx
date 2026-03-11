import '@styles/globals.css';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Commissioner } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { getRootMetadata } from '@lib/getPageMetadata';
import NavBar from '@components/layout/NavBar';

const commissioner = Commissioner({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getRootMetadata(locale);
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  let messages;

  try {
    // Fetch messages for the locale
    messages = await getMessages({ locale });
  } catch (e) {
    console.log(e);
    notFound(); // Or handle the error appropriately
  }

  return (
    <html lang={locale}>
      <body className={commissioner.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
