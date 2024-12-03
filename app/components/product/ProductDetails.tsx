import React from 'react';
import { fetchProductById } from "@/app/lib/data";
import Image from "next/image";

export default async function ProductDetails({id}: {id: string}) {
  const product = await fetchProductById(id);
  
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Product Details</h2>
      <ul>
        <li>
          <Image width={300} height={300} src={product.thumbnail} alt={product.title} />
        </li>
        <li>Name: {product.title}</li>
        <li>Brand: {product.brand}</li>
        <li>Price: {product.price}</li>
      </ul>
    </>
  )
}
