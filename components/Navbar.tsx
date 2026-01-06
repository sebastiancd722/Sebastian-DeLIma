'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/archive', label: 'Archive' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-cloud bg-sand/95 backdrop-blur">
      <div className="container-grid flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>
          ARC Design Archive
        </Link>
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-cloud bg-white text-graphite sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="text-xl">☰</span>
        </button>
        <nav className={`${open ? 'block' : 'hidden'} absolute left-0 top-16 w-full border-b border-cloud bg-sand px-4 pb-4 sm:static sm:block sm:w-auto sm:border-none sm:bg-transparent sm:p-0`}>
          <ul className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`inline-flex items-center rounded-md px-2 py-1 text-sm font-medium transition-colors duration-150 ${
                      isActive ? 'bg-graphite text-white' : 'hover:bg-cloud'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
