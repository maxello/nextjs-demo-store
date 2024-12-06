import React from 'react';
import { fetchProductById } from "@/app/lib/data";
import Image from "next/image";

export default async function ProductDetails({id}: {id: string}) {
  const product = await fetchProductById(id);
  
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Product Details</h2>
      <div>
        <Image width={300} height={300} src={product.thumbnail} alt={product.title} className="aspect-square object-contain" />
      </div>
      {product.images.length > 0 && 
        <div className="flex gap-4">
          {product.images.map((imageSrc: string, ind: number) => (
            <Image key={ind} width={100} height={100} src={imageSrc} alt={product.title} className="aspect-square object-contain" />
          ))}
        </div>
      }
      <ul>
        <li>Name: {product.title}</li>
        <li>Brand: {product.brand}</li>
        <li>Price: {product.price}</li>
      </ul>
    </>
  )
}
