'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/essays', label: 'Essays' },
  { href: '/research', label: 'Research' },
  { href: '/itayn', label: 'ITAYN Demo' },
  { href: '/video', label: 'Video' },
  { href: '/interview', label: 'Interview' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      className="border-b border-zinc-800"
      style={{ backgroundColor: '#09090b' }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-lg font-light tracking-wide text-zinc-50"
              aria-label="COL-PROACTIVE - Home"
            >
              COL-PROACTIVE
            </Link>
          </div>
          <div className="flex space-x-6" role="menubar" aria-label="Site pages">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-light tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-zinc-50 border-b-2 border-zinc-50 pb-1'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
