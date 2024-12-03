"use client";

import React, { useEffect, useState } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import ModalCart from '@/app/components/cart/CartModal';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { setModalVisibility } from '@/app/redux/features/cart/cartSlice';
import { CartStateProp } from '@/app/lib/definitions';
import { usePathname } from 'next/navigation';

export default function Cart() {

  const isOpen = useAppSelector((state: CartStateProp) => state.cart.isOpen);
  const totalAmount = useAppSelector((state: CartStateProp) => state.cart.totalAmount);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const [isProductAdded, setIsProductAdded] = useState(false);
  const updateModalVisibility = (flag: boolean = false) => {
    dispatch(setModalVisibility(flag));
  }

  useEffect(() => {
    isOpen && updateModalVisibility(false);
  }, [pathname]);

  const duration = 300;
  useEffect(
    () => {
      setIsProductAdded(true);
      let timer = setTimeout(() => setIsProductAdded(false), duration);
      return () => {
        clearTimeout(timer);
      };
    },
    [totalAmount]
  );

  return (
    <>
      <button
        type="button"
        aria-label="Open cart"
        onClick={() => updateModalVisibility(true)}
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">View notifications</span>
        <ShoppingBagIcon aria-hidden="true" className="size-6" />
        {totalAmount > 0 && (
          <span className={`absolute duration-${duration} ease-linear transition-transform flex justify-center items-center -top-1 -right-1 rounded-full w-5 h-5 bg-rose-500 text-white text-[0.7rem]${isProductAdded ? ' scale-125': ''}`}>
            {totalAmount}
          </span>
        )}
      </button>
      <ModalCart isOpen={isOpen} setModalVisibility={updateModalVisibility} />
    </>
  )
}
