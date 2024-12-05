import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Product, CartStateProp } from '@/app/lib/definitions';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import Link from 'next/link';
import { useAppDispatch } from '@/app/redux/hooks';
import { changeQuantity } from '@/app/redux/features/cart/cartSlice';

export default function CartModal({ isOpen, setModalVisibility }: { isOpen: boolean, setModalVisibility: (arg?: boolean) => void }) {
  const products = useSelector((state: CartStateProp) => state.cart.items);
  const subtotal = useSelector((state: CartStateProp) => state.cart.subtotal);
  const dispatch = useAppDispatch();
  const handleQuantity = (flag: 'minus' | 'plus', id: string) => {
    dispatch(changeQuantity({flag, id}));
  }

  return (
    <Dialog open={isOpen} onClose={() => setModalVisibility()} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setModalVisibility()}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    {products.length > 0 ? (
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {products.map((product: Product) => (
                            <CartItem key={product.id} item={product} onChangeQuantity={handleQuantity} />
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">Your cart is empty</div>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  {products.length > 0 && (
                    <>
                      <div className="mt-6">
                        <Link
                          href="/checkout"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 transition-colors px-6 py-3 text-base font-medium text-white shadow-sm lg:hover:bg-indigo-700"
                        >
                          Checkout
                        </Link>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            onClick={() => setModalVisibility()}
                            className="font-medium transition-colors text-indigo-600 hover:text-indigo-700"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}