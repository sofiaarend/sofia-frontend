import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSelector from './LanguageSelector';
import NavBarItem from './NavBarItem';

export default function NavBar() {
  const t = useTranslations();

  const links = [
    { href: '/', label: t('home') },
    { href: '/resume', label: t('resume.title') },
  ];

  return (
    <nav className="bg-primary flex w-full justify-between p-4 align-middle">
      <Link href="/" className="content-center">
        <Image src="/images/logo_p.svg" alt="Sofia Arend logo" width={88} height={88} />
      </Link>
      <div className="flex">
        {links.map(({ href, label }) => (
          <NavBarItem key={href} href={href} label={label} />
        ))}
        <LanguageSelector />
      </div>
    </nav>
  );
}
