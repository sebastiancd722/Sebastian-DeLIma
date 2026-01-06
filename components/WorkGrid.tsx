import { WorkItem } from '@/data/work';
import WorkCard from './WorkCard';

export default function WorkGrid({ items }: { items: WorkItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <WorkCard key={item.id} item={item} />
      ))}
    </div>
  );
}
