import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-cloud bg-white">
      <div className="container-grid flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-steel">ARC Design Archive: UI sections, cards, and systems.</p>
        <div className="flex gap-4 text-sm">
          <Link href="/archive" className="hover:text-steel">
            Archive
          </Link>
          <Link href="/contact" className="hover:text-steel">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
