"use client";
import React, { useEffect, useState } from 'react';
import { ShoppingCartIcon, CheckIcon } from "@heroicons/react/24/outline";
import { addItem } from '@/app/redux/features/cart/cartSlice';
import { useAppDispatch } from '@/app/redux/hooks';
import Button from '@/app/components/Button';
import { Product } from '@/app/lib/definitions';

export default function AddToCart({product}: {product: Product}) {
  const dispatch = useAppDispatch();
  const [isProductAdded, setIsProductAdded] = useState(false);
  
  useEffect(
    () => {
      const timer = setTimeout(() => setIsProductAdded(false), 1500);
      return () => {
        clearTimeout(timer);
      };
    },
    [isProductAdded]
  );

  const addProductToCart = (product: Product, quantity: number) => {
    dispatch(addItem({...product, quantity, created_at: product.created_at.toString()}));
    setIsProductAdded(true);
  }

  return (
    <>
      {isProductAdded ? (
        <div className="inline-flex gap-x-2 items-center text-sm px-4 py-3 uppercase text-indigo-500">
          <CheckIcon aria-hidden="true" className="size-6" />
          <span>Added to Cart</span>
        </div>
      ) : (
        <Button isDisabled={isProductAdded} addProductToCart={() => addProductToCart(product, 1)} text="Add to Cart">
          <ShoppingCartIcon aria-hidden="true" className="size-6" />
        </Button>
      )}
    </>
  )
}
