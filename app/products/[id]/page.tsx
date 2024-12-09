import ProductDetails from '@/app/components/product/ProductDetails';
import { ProductDetailsSkeleton } from '@/app/ui/skeletons';
import React, { Suspense } from 'react';

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;

  return (
    <div className="bg-white mt-6 lg:mt-12">
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <Suspense fallback={<ProductDetailsSkeleton />}>
          <ProductDetails id={id} />
        </Suspense>
      </div>
    </div>
  )
}
