'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const primarySectors = [
  { href: '/', label: 'HOME', sublabel: 'The Talisman' },
  { href: '/the-build', label: 'THE BUILD', sublabel: "I'm Just a Build" },
  { href: '/resume', label: 'RESUME', sublabel: 'The Arc' },
  { href: '/ledger', label: 'LEDGER', sublabel: 'References' },
  { href: '/the-cage', label: 'THE CAGE', sublabel: 'TLOC' },
];

const secondaryNav = [
  { href: '/essays', label: 'Essays' },
  { href: '/research', label: 'Research' },
  { href: '/demo', label: 'Demo' },
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
        {/* Primary — C-RSP v4.0 Sectors */}
        <div className="flex h-14 items-center justify-between border-b border-zinc-900">
          <Link
            href="/"
            className="text-xs font-light tracking-[0.25em] text-zinc-500 uppercase"
            aria-label="Corey Alejandro - Home"
          >
            COREY ALEJANDRO
          </Link>
          <div className="flex items-center space-x-1" role="menubar" aria-label="Primary sectors">
            {primarySectors.map((item) => {
              const isActive = item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  className={`group flex flex-col items-center px-4 py-2 transition-all duration-200 ${
                    isActive
                      ? 'bg-zinc-800'
                      : 'hover:bg-zinc-900'
                  }`}
                >
                  <span className={`text-xs font-medium tracking-[0.15em] transition-colors ${
                    isActive ? 'text-zinc-50' : 'text-zinc-400 group-hover:text-zinc-200'
                  }`}>
                    {item.label}
                  </span>
                  <span className={`text-[10px] tracking-wide mt-0.5 transition-colors ${
                    isActive ? 'text-zinc-400' : 'text-zinc-700 group-hover:text-zinc-500'
                  }`}>
                    {item.sublabel}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Secondary — Application Content */}
        <div className="flex h-9 items-center justify-end space-x-6" role="menubar" aria-label="Application content">
          {secondaryNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                aria-current={isActive ? 'page' : undefined}
                className={`text-xs font-light tracking-wide transition-colors ${
                  isActive
                    ? 'text-zinc-300'
                    : 'text-zinc-600 hover:text-zinc-400'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
