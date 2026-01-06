import Image from 'next/image';
import Link from 'next/link';
import { WorkItem } from '@/data/work';

export default function WorkCard({ item }: { item: WorkItem }) {
  return (
    <Link
      href={`/work/${item.id}`}
      className="card-surface flex flex-col transition-transform duration-150 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-56 w-full overflow-hidden rounded-t-xl">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
            <p className="text-sm text-steel">{new Date(item.date).toLocaleDateString()}</p>
          </div>
          <span className="badge">{item.rating}/10</span>
        </div>
        <p className="text-sm leading-relaxed text-graphite/80">{item.shortDescription}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
