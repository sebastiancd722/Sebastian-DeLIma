import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | ARC Design Archive',
  description: 'Contact the ARC Design Archive author for collaboration or questions.',
};

export default function ContactPage() {
  return (
    <div className="container-grid space-y-8">
      <header className="space-y-2 pt-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-steel">Contact</p>
        <h1 className="text-2xl font-semibold md:text-3xl">Reach out</h1>
        <p className="max-w-2xl text-base text-steel">Simple contact options without fluff.</p>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="card-surface p-6">
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="mt-2 text-sm text-steel">Prefer direct? Use the mailto link below.</p>
          <a
            href="mailto:design@arc-archive.test?subject=ARC%20Design%20Archive"
            className="mt-4 inline-flex items-center rounded-md bg-graphite px-4 py-2 text-sm font-semibold text-white hover:-translate-y-0.5"
          >
            Start email
          </a>
        </div>
        <div className="card-surface p-6 space-y-3">
          <h2 className="text-lg font-semibold">Profiles</h2>
          <p className="text-sm text-steel">Optional touchpoints for quick context.</p>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="https://www.linkedin.com" className="hover:text-steel" target="_blank" rel="noreferrer">
              LinkedIn (placeholder)
            </Link>
            <Link href="https://github.com" className="hover:text-steel" target="_blank" rel="noreferrer">
              GitHub (placeholder)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
