import React from 'react';
import { Product } from '@/app/lib/definitions';
import Link from 'next/link';
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';

export default function CartItem({item, onChangeQuantity}: {item: Product, onChangeQuantity: (arg0: 'minus' | 'plus', arg1: string) => void}) {
  return (
    <li className="flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image width={100} height={100} alt={item.title} src={item.thumbnail} className="size-full object-cover" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900 mb-1">
            <h3>
              <Link href={`/products/${item.id}`}>{item.title}</Link>
            </h3>
            <p className="ml-4">${item.price}</p>
          </div>
          <p className="mb-1 text-sm text-gray-500">{item.brand}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <form className="max-w-xs">
            <div className="relative flex items-center max-w-[8rem]">
                <button type="button" className="flex items-center justify-center border border-gray-300 rounded-s-md min-w-10 h-10 focus:outline-none transition-colors hover:lg:bg-gray-100" onClick={() => onChangeQuantity("minus", item.id)}>
                  <MinusIcon aria-hidden="true" className="size-4" />
                </button>
                <input type="text" readOnly={true} className="border border-x-0 border-gray-300 h-10 text-center text-sm block w-full focus:outline-none" onChange={() => {}} value={item.quantity} placeholder="0" required />
                <button type="button" className="flex items-center justify-center border border-gray-300 rounded-e-md min-w-10 h-10 focus:outline-none transition-colors hover:lg:bg-gray-100" onClick={() => onChangeQuantity("plus", item.id)}>
                  <PlusIcon aria-hidden="true" className="size-4" />
                </button>
            </div>
          </form>
        </div>
      </div>
    </li>
  )
}
