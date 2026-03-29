import type { Metadata } from 'next';
import { getPageMetadata } from '@lib/getPageMetadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, 'resume');
}

export default function Resume() {
  return (
    <div className="my-2 flex flex-col justify-center">
      <h1 className="text-on-background mt-10 text-6xl">Curriculo</h1>
    </div>
  );
}
