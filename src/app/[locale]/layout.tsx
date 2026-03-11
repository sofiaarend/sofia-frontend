import '@styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import NavBar from '@components/ui/navbar';

// export const metadata: Metadata = {
//   title: 'Sofia Arend',
//   description: 'Personal website of Sofia Arend',
// };

export default async function RootLayout({
  children,
  params: { locale } }: {
    children: React.ReactNode,
    params: { locale: string };
  }) {
  let messages;
  try {
    // Fetch messages for the locale
    messages = await getMessages({ locale });
  } catch (e) {
    console.log(e)
    notFound(); // Or handle the error appropriately
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NavBar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
