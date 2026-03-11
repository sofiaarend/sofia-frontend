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
      className={`mx-2 w-full border-slate-900 px-2 py-3 text-center text-slate-900 transition-all ${isActive ? 'border-b-2' : 'hover:border-b-2'}`}
    >
      {label}
    </Link>
  );
}
