import { Link } from '@i18n/navigation';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className="bg-bg flex min-h-screen justify-center">
      <main className="my-2 flex flex-col justify-center">
        <h1 className="text-primary mt-10 text-6xl">{t('title')}</h1>
        <div className="flex h-full items-center justify-center">
          <Link
            href="/resume"
            className="text-primary w-full rounded-md border px-2 py-3 text-center"
          >
            {t('resume.title')}
          </Link>
        </div>
      </main>
    </div>
  );
}
