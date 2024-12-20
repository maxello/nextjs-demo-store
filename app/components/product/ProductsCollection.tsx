
import { fetchProducts } from '@/app/lib/data';
import ProductItem from "./ProductItem";
import { Product } from '@/app/lib/definitions';

export default async function ProductsCollection({amount}: {amount?: number}): Promise<React.JSX.Element> {
  const products: Product[] = await fetchProducts(amount);
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-6 lg:mb-12 max-w-[300px] mx-auto md:mx-0 sm:max-w-full">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}