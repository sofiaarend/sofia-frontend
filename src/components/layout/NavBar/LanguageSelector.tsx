'use client';

import Dropdown from '@components/ui/Dropdown';
import { useRouter, usePathname } from '@i18n/navigation';
import { useLocale } from 'next-intl';
import { Globe, ChevronDown } from 'lucide-react';
import DropdownItem from '@components/ui/DropdownItem';

const locales = [
  { value: 'en', label: 'English' },
  { value: 'pt', label: 'Português' },
];

export default function LanguageSelector() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  function changeLocale(nextLocale: string) {
    router.replace(pathname, { locale: nextLocale });
  }

  const currentLabel = locale.toLocaleUpperCase();

  return (
    <Dropdown
      label={currentLabel}
      variant="primary"
      className="content-center"
      leftIcon={<Globe size={16} />}
      rightIcon={<ChevronDown size={16} />}
    >
      {locales.map((l) => (
        <DropdownItem
          key={l.value}
          label={l.label}
          onClick={() => changeLocale(l.value)}
          isSelected={l.value === locale}
        />
      ))}
    </Dropdown>
  );
}
