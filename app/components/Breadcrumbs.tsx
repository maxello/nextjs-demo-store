import Link from '@/node_modules/next/link';
import React from 'react'

export default function Breadcrumbs({title}: {title: string}) {
  return (
    <div className="flex items-center space-x-2 text-gray-400 text-sm mb-6">
      <Link href={"/products"} className="hover:underline hover:text-gray-600">Products</Link>
      <span>
        <svg className="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </span>
      <span>{title}</span>
    </div>
  )
}
