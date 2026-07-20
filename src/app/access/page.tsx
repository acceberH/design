type AccessPageProps = {
  searchParams: Promise<{ error?: string; next?: string }>;
};

export default async function AccessPage({ searchParams }: AccessPageProps) {
  const { error, next } = await searchParams;
  const destination = next?.startsWith("/") && !next.startsWith("//") ? next : "/";

  return (
    <main className="min-h-screen bg-[#f3f0eb] px-6 py-10 text-[#1d1b19] sm:grid sm:place-items-center">
      <section className="mx-auto w-full max-w-sm border border-[#1d1b19]/20 bg-[#faf8f4] p-7 shadow-[6px_6px_0_#1d1b19] sm:p-9">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em]">Private site</p>
        <h1 className="font-serif text-4xl leading-none">Access required</h1>
        <p className="mt-4 text-sm leading-6 text-[#1d1b19]/70">Enter the shared password to view this website.</p>
        <form action="/api/site-access" method="post" className="mt-8 space-y-4">
          <input type="hidden" name="next" value={destination} />
          <label className="block text-sm font-medium" htmlFor="password">Password</label>
          <input
            autoComplete="current-password"
            className="w-full rounded-none border border-[#1d1b19]/45 bg-white px-3 py-3 text-base outline-none transition focus:border-[#1d1b19] focus:ring-2 focus:ring-[#1d1b19]/25"
            id="password"
            name="password"
            required
            type="password"
          />
          <p className="text-xs leading-5 text-[#1d1b19]/60">Hint: the password is on the resume.</p>
          {error === "1" ? <p className="text-sm text-[#9d1919]" role="alert">That password is not correct. Try again.</p> : null}
          <button className="w-full bg-[#1d1b19] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#393532] focus:outline-none focus:ring-2 focus:ring-[#1d1b19] focus:ring-offset-2" type="submit">
            Unlock site
          </button>
        </form>
      </section>
    </main>
  );
}
