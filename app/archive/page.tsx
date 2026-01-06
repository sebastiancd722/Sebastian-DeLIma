import type { Metadata } from 'next';
import ArchiveClient from '@/components/ArchiveClient';
import { workItems } from '@/data/work';

export const metadata: Metadata = {
  title: 'Archive | ARC Design Archive',
  description: 'Browse all ARC-level UI sections, cards, systems, and experiments with filtering and sorting.',
};

export default function ArchivePage() {
  return (
    <div className="container-grid space-y-6">
      <header className="space-y-2 pt-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-steel">Archive</p>
        <h1 className="text-2xl font-semibold md:text-3xl">All published ARC design work</h1>
        <p className="max-w-3xl text-base text-steel">
          Responsive grid with filters for Sections, Cards, Systems, Experiments and sort controls for Newest, Oldest, or Best.
        </p>
      </header>
      <ArchiveClient items={workItems} />
    </div>
  );
}
