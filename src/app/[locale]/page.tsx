import { Link } from '@i18n/navigation';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className="bg-bg flex min-h-screen">
      <main className="mx-4 my-2 flex w-full flex-col">
        <h1 className="text-fg mt-16 ml-4 text-8xl">{t('title')}</h1>
        <div className="flex h-full w-full items-center justify-center">
          <Link href="/resume" className="text-primary rounded-md border px-2 py-3 text-center">
            {t('resume.title')}
          </Link>
        </div>
      </main>
    </div>
  );
}
