import Bubble from '@components/ui/Bubble';
import { Link } from '@i18n/navigation';
import { getTranslations } from 'next-intl/server';

const bubblesGenerator = function (baseX: number, baseY: number) {
  return {
    size: Math.random() * 100 + 80,
    lerp: Math.random() * 0.15 + 0.05,
    baseX,
    baseY,
    color: Math.random() > 0.5 ? 'bg-primary/50' : 'bg-secondary/40',
  };
};

// generate random bubles position on the top right but random inside that
const bubblesTop = Array.from({ length: 15 }, () =>
  bubblesGenerator(Math.random() * 50 + 25, Math.random() * 50),
);

// generate random bubles position on the bottom but random inside that
const bubblesBottom = Array.from({ length: 20 }, () =>
  bubblesGenerator(Math.random() * 100 + 25, Math.random() * 100 + 25),
);

const bubbles = [...bubblesTop, ...bubblesBottom];

export default async function Home() {
  const t = await getTranslations();

  return (
    <div className="relative h-full w-full overflow-hidden px-4 py-2">
      <h1 className="text-on-background relative z-10 mt-16 ml-4 text-6xl">{t('title')}</h1>
      <h2 className="text-on-background relative z-10 mt-4 ml-4 text-2xl">{t('welcome')}</h2>
      <p className="text-on-background relative z-10 mt-4 ml-4 max-w-lg text-lg">{t('subtitle')}</p>
      {bubbles.map((b, i) => (
        <Bubble
          key={i}
          size={b.size}
          lerp={b.lerp}
          baseX={b.baseX}
          baseY={b.baseY}
          color={b.color}
        />
      ))}
      <div className="flex h-full w-full items-center justify-center">
        <Bubble size={200} baseX={50} baseY={50} isButton>
          <Link
            href="/resume"
            className="flex h-full w-full items-center justify-center text-center text-2xl"
          >
            {t('resume.title')}
          </Link>
        </Bubble>
        <Bubble size={200} baseX={20} baseY={50} isButton>
          <Link
            href="/"
            className="flex h-full w-full items-center justify-center text-center text-2xl"
          >
            {t('external.github')}
          </Link>
        </Bubble>
        <Bubble size={200} baseX={80} baseY={40} isButton>
          <Link
            href="/"
            className="flex h-full w-full items-center justify-center text-center text-2xl"
          >
            {t('external.linkedin')}
          </Link>
        </Bubble>
      </div>
      {/* background */}
      <div
        className="bg-primary/10 absolute z-0 rounded-full"
        style={{ width: 500, height: 500, top: -50, left: -100 }}
      ></div>
      <div
        className="bg-primary/10 absolute z-0 rounded-full"
        style={{ width: 1000, height: 1000, top: -50, left: -300 }}
      ></div>
      <div
        className="bg-primary/10 absolute z-0 rounded-full"
        style={{ width: 2000, height: 2000, top: -50, left: -600 }}
      ></div>
      <div
        className="bg-primary/10 absolute z-0 rounded-full"
        style={{ width: 3500, height: 3500, top: -50, left: -1000 }}
      ></div>
    </div>
  );
}
