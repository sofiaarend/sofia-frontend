import '@styles/globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sofia Arend',
  description: 'Personal website of Sofia Arend',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-primary flex w-full p-2 align-middle">
          <Image src="/images/logo_p.svg" alt="Sofia Arend logo" width={120} height={100} />
        </div>
        {children}
      </body>
    </html>
  );
}
