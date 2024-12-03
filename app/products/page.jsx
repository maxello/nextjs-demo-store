import React from 'react';
import ProductsCollection from '../components/product/ProductsCollection';

export default function Products() {
  return (
    <div className="bg-white mt-6 lg:mt-12">
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <ProductsCollection title={"All Products"} />
      </div>
    </div>
  )
}

