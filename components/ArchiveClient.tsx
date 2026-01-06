'use client';

import { useMemo, useState } from 'react';
import FilterBar from './FilterBar';
import WorkGrid from './WorkGrid';
import { WorkItem, WorkTag } from '@/data/work';

type SortOption = 'Newest' | 'Oldest' | 'Best';

export default function ArchiveClient({ items }: { items: WorkItem[] }) {
  const [selectedTag, setSelectedTag] = useState<WorkTag | 'All'>('All');
  const [selectedSort, setSelectedSort] = useState<SortOption>('Newest');

  const filtered = useMemo(() => {
    let list = [...items];
    if (selectedTag !== 'All') {
      list = list.filter((item) => item.tags.includes(selectedTag));
    }

    switch (selectedSort) {
      case 'Oldest':
        list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'Best':
        list.sort((a, b) => {
          if (b.rating === a.rating) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          }
          return b.rating - a.rating;
        });
        break;
      default:
        list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return list;
  }, [items, selectedSort, selectedTag]);

  return (
    <div className="space-y-6">
      <FilterBar
        tags={['Sections', 'Cards', 'Systems', 'Experiments']}
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
        sortOptions={['Newest', 'Oldest', 'Best']}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
      />
      <WorkGrid items={filtered} />
    </div>
  );
}
