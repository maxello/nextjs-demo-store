import ProductsPromo from "./components/HomePromo";
import Link from "next/link";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import ProductsCollection from "./components/product/ProductsCollection";

export default function Home() {
  return (
    <div className="bg-white">
      <ProductsPromo 
        title={"Unleash Your Inner Beauty!"} 
        text={"Discover the secret to radiant skin with our luxurious range of cosmetic products! Crafted with love and the finest ingredients, our formulas are designed to enhance your natural beauty."} 
      />
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <ProductsCollection title={"Our newest products"} amount={8} />
        <div className="text-center">
          <Link href={"/products"} className="inline-flex gap-x-2 items-center rounded-md bg-indigo-600 transition-colors px-6 py-4 uppercase text-lg font-semibold text-white lg:hover:bg-indigo-700">
            <ShoppingBagIcon aria-hidden="true" className="size-6" />
            <span>See all products</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
