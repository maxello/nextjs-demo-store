import { Product } from '@/app/lib/definitions';
import Link from 'next/link';
import React from 'react';

export default function CartItem({item}: {item: Product}) {
  return (
    <li className="flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img alt={item.title} src={item.thumbnail} className="size-full object-cover" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link href={`/products/${item.id}`}>{item.title}</Link>
            </h3>
            <p className="ml-4">${item.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {item.quantity}</p>

          <div className="flex">
            <button type="button" className="font-medium text-indigo-600 lg:hover:text-indigo-700">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}
