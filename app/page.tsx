'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import FilterBar from '@/components/FilterBar';
import WorkGrid from '@/components/WorkGrid';
import { WorkTag, workItems } from '@/data/work';

const tags: WorkTag[] = ['Sections', 'Cards', 'Systems', 'Experiments'];

export default function HomePage() {
  const [selectedTag, setSelectedTag] = useState<WorkTag | 'All'>('All');

  const filtered = useMemo(() => {
    const sorted = [...workItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    if (selectedTag === 'All') return sorted.slice(0, 6);
    return sorted.filter((item) => item.tags.includes(selectedTag)).slice(0, 6);
  }, [selectedTag]);

  return (
    <div className="container-grid space-y-10">
      <section className="space-y-4 pt-6">
        <h1 className="text-2xl font-semibold md:text-3xl">ARC Design Archive: UI sections, cards, and systems.</h1>
        <p className="max-w-3xl text-base text-steel">
          A fast, scannable catalog of ARC-quality design work rated 7/10 or higher.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/archive"
            className="inline-flex items-center rounded-md bg-graphite px-4 py-2 text-sm font-semibold text-white shadow-sm hover:translate-y-[-1px]"
          >
            View archive
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-graphite px-4 py-2 text-sm font-semibold text-graphite hover:bg-graphite hover:text-white"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Latest work</h2>
          <Link href="/archive" className="text-sm font-medium text-graphite hover:text-steel">
            Browse all
          </Link>
        </div>
        <FilterBar tags={tags} selectedTag={selectedTag} onTagChange={setSelectedTag} />
        <WorkGrid items={filtered} />
      </section>
    </div>
  );
}
