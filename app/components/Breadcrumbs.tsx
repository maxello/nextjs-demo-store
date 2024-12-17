import Link from '@/node_modules/next/link';
import React from 'react';

type BreadcrumbsProps = {
  label: string;
  href?: string;
}

export default function Breadcrumbs({
  breadcrumbs
}: {
  breadcrumbs: BreadcrumbsProps[]
}) {
  return (
    <div className="flex items-center text-gray-400 text-sm mb-6">
      {breadcrumbs.map((item, ind) => (
        <div key={item.label} className="flex">
          {item.href ? (
            <Link href={item.href} className="hover:underline hover:text-gray-600">{item.label}</Link>
          ) : (
            <span>{item.label}</span>
          )}
          {(ind !== breadcrumbs.length - 1) && (
            <span>
              <svg className="mx-1.5 h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
