import React from 'react';
import { fetchProductById } from "@/app/lib/data";
import Breadcrumbs from "../Breadcrumbs";
import AddToCart from '../cart/AddToCart';
import ImageSlider from '../ImageSlider';

export default async function ProductDetails({ id }: { id: string }): Promise<React.JSX.Element> {
  const product = await fetchProductById(id);
  return (
    <>
      <Breadcrumbs breadcrumbs={[
          { 
            label: 'Products', 
            href: '/products' 
          },
          {
            label: product.title
          },
        ]} 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:gap-x-8">
        <div className="mb-6 md:mb-0">
          <ImageSlider images={product.images} title={product.title} />
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="mb-4 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product.title}</h2>
          <p className="mb-4 text-gray-500 text-sm">{product.brand}</p>

          <div className="flex items-center space-x-4 mb-4">
            <div className="rounded-md bg-gray-100 flex py-2 px-3">
              <span className="text-indigo-500 mt-1 mr-1">$</span>
              <span className="font-bold text-indigo-500 text-3xl">{product.price}</span>
            </div>
          </div>
          {product.description && (
            <p className="text-gray-500 mb-4 md:mb-6">{product.description}</p>
          )}
          <AddToCart product={product} />
        </div>
      </div>
    </>
  )
}
