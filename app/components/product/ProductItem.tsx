import React from 'react';
import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/app/components/cart/AddToCart";
import { Product } from '@/app/lib/definitions';

export default function ProductItem({product}: {product: Product}) {
  return (
    <div className="relative group flex flex-col">
      <Link href={`/products/${product.id}`} className="block overflow-hidden rounded-t-md border border-gray-200">
        <Image
          alt={product.title}
          src={product.images[0]}
          width={300}
          height={300}
          className="aspect-square w-full bg-gray-200 transition-transform duration-[2.5s] ease-linear lg:hover:scale-110 object-contain"
        />
      </Link>
      <div className="border border-gray-200 border-t-0 p-4 rounded-b-md grow flex flex-col justify-between">
        <div className="flex justify-between mb-4 gap-x-4">
          <div>
            <h3 className="text-sm text-gray-700">
              {product.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price}</p>
        </div>
        <div className="text-center">
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  )
}
