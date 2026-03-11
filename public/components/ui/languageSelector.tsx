'use client'

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSelector() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  function changeLocale(nextLocale: string) {
    router.push(`/${nextLocale}${pathname}`);
    router.refresh();
  }

  return (
    <select
      value={locale}
      onChange={(e) => changeLocale(e.target.value)}
    >
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  );
}
