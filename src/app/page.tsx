export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-start justify-center gap-4">
      <h1 className="text-2xl font-semibold tracking-tight">OpenPortsGames</h1>
      <p className="max-w-prose text-pretty">
        A curated catalog of native game ports: decompilations, recompilations and engine
        reimplementations for PC and Android.
      </p>
    </main>
  );
}
