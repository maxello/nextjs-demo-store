"use client";
import { usePathname } from 'next/navigation';
import React from 'react';
import { LinkProp } from '/app/lib/definitions';
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavLink({link}: {link: LinkProp}) {
  const pathname = usePathname();
  return (
    <Link
      key={link.name}
      href={link.href}
      aria-current={pathname === link.href ? 'page' : undefined}
      className={classNames(
        pathname === link.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'rounded-md px-3 py-2 text-sm font-medium',
      )}
    >
      {link.name}
    </Link>
  )
}
