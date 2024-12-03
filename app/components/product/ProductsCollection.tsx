import { Suspense } from "react";
import { ProductsSkeleton } from "@/app/ui/skeletons";
import ProductsList from "@/app/components/product/ProductsList";

export default function ProductsCollection({amount, title}: {amount?: number, title: string}) {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
      <Suspense fallback={<ProductsSkeleton amount={amount} />}>
        <ProductsList amount={amount} />
      </Suspense>
    </>
  )
}
