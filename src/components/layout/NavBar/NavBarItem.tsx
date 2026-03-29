'use client';

import { Link, usePathname } from '@i18n/navigation';

type NavBarItemProps = {
  href: string;
  label: string;
};

export default function NavBarItem({ href, label }: NavBarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`border-on-primary text-on-primary mx-2 w-full px-2 py-3 text-center transition-all ${isActive ? 'border-b-2' : 'hover:border-b-2'}`}
    >
      {label}
    </Link>
  );
}
