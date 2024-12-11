"use client";
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { LinkProp } from '@/app/lib/definitions';
import { useClose } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}



export default function NavLink({link}: {link: LinkProp}) {
  const pathname = usePathname();
  const close = useClose();
  const router = useRouter();

  return (
    <>
      <button 
        className={classNames(
          pathname === link.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'rounded-md px-3 py-2 text-sm font-medium',
        )}
        onClick={() => {router.push(link.href); close()}}
        >
          {link.name}
      </button>
    </>
  )
}
