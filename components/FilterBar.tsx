'use client';

import { WorkTag } from '@/data/work';

type SortOption = 'Newest' | 'Oldest' | 'Best';

type Props = {
  tags: WorkTag[];
  selectedTag: WorkTag | 'All';
  onTagChange: (value: WorkTag | 'All') => void;
  sortOptions?: SortOption[];
  selectedSort?: SortOption;
  onSortChange?: (value: SortOption) => void;
};

export default function FilterBar({
  tags,
  selectedTag,
  onTagChange,
  sortOptions,
  selectedSort,
  onSortChange,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-cloud bg-white px-4 py-3 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-steel">Tags:</span>
        <button
          onClick={() => onTagChange('All')}
          className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
            selectedTag === 'All' ? 'bg-graphite text-white' : 'bg-cloud text-graphite hover:bg-graphite hover:text-white'
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagChange(tag)}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
              selectedTag === tag ? 'bg-graphite text-white' : 'bg-cloud text-graphite hover:bg-graphite hover:text-white'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      {sortOptions && selectedSort && onSortChange && (
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-steel">
            Sort:
          </label>
          <select
            id="sort"
            value={selectedSort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="rounded-md border border-cloud bg-white px-3 py-2 text-sm focus:border-graphite focus:outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
