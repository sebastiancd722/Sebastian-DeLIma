import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { workItems } from '@/data/work';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const work = workItems.find((item) => item.id === params.id);
  return {
    title: work ? `${work.title} | ARC Design Archive` : 'Work | ARC Design Archive',
    description: work?.shortDescription ?? 'ARC design work detail',
  };
}

export default function WorkDetailPage({ params }: { params: { id: string } }) {
  const work = workItems.find((item) => item.id === params.id);

  if (!work) {
    notFound();
  }

  return (
    <div className="container-grid space-y-8">
      <header className="space-y-2 pt-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-steel">Work</p>
        <h1 className="text-2xl font-semibold md:text-3xl">{work.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-steel">
          <span>{new Date(work.date).toLocaleDateString()}</span>
          <span className="badge">Rating: {work.rating}/10</span>
          {work.tags.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>
        <p className="max-w-3xl text-base text-graphite/90">{work.shortDescription}</p>
        {work.tools && (
          <p className="text-sm text-steel">Tools: {work.tools.join(', ')}</p>
        )}
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        {work.images.map((image) => (
          <div key={image} className="relative h-72 overflow-hidden rounded-xl border border-cloud bg-white shadow-sm">
            <Image src={image} alt={work.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        ))}
      </section>

      {work.notes && work.notes.length > 0 && (
        <section className="card-surface p-6">
          <h2 className="text-lg font-semibold">Notes</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-graphite/90">
            {work.notes.slice(0, 4).map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
