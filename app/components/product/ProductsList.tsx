
import { fetchFilteredProducts } from '@/app/lib/data';
import ProductItem from "./ProductItem";
import { Product } from '@/app/lib/definitions';

export default async function ProductsList({
  query, 
  currentPage
}: {
  query: string;
  currentPage: number;
}): Promise<React.JSX.Element> {
  const products: Product[] = await fetchFilteredProducts(query, currentPage);
  return (
    <>
    {products.length > 0 ? (
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-6 lg:mb-12 max-w-[300px] mx-auto md:mx-0 sm:max-w-full">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    ) : (
      <div className="max-w-[400px] text-center">
        {query ? (
          <span>No products found for your request.</span>
        ) : (
          <span>There are no products in our store.</span>
        )}
      </div>
    )}
    </>
  )
}