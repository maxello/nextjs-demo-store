import React, { Suspense } from 'react';
import ProductsList from '../components/product/ProductsList';
import Search from '../components/Search';
import { ProductsSkeleton } from '../ui/skeletons';

export default function Products() {
  return (
    <div className="bg-white mt-6 lg:mt-12">
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Products</h2>
        <Search placeholder="Search products..." />
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductsList />
        </Suspense>
        </div>
    </div>
  )
}

