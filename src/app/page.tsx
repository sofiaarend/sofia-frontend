import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-bg flex min-h-screen justify-center">
      <main className="my-2 flex flex-col justify-center">
        <h1 className="text-primary mt-10 text-6xl">Sofia Arend</h1>
        <div className="flex h-full items-center justify-center">
          <Link href="/cv" className="text-primary w-full rounded-md border px-2 py-3 text-center">
            Currículo
          </Link>
        </div>
      </main>
    </div>
  );
}
