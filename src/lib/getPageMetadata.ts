import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function getRootMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
  };
}

export async function getPageMetadata(locale: string, namespace: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });

  return {
    title: t('title'), // this gets slotted into the template's %s
    description: t('description'),
  };
}
