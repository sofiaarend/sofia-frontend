import Image from 'next/image';
import LanguageSelector from './languageSelector'

export default function NavBar() {
  return (
    <div className="bg-primary flex w-full p-2 align-middle justify-between">
      <Image src="/images/logo_p.svg" alt="Sofia Arend logo" width={64} height={64} />
      <div className="flex">
        <LanguageSelector />
      </div>
    </div>
  );
}
