// Loading animation
const shimmer =
  'before:absolute z-[1] before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function ProductItemSkeleton() {
  return (
    <div className={`${shimmer} relative group flex flex-col overflow-hidden`}>
    <div className="block overflow-hidden rounded-t-md border border-gray-200">
      <div
        className="w-full aspect-square w-full bg-gray-200"
      />
    </div>
    <div className="border border-gray-200 border-t-0 p-4 rounded-b-md grow flex flex-col justify-between">
      <div className="flex justify-between mb-4 gap-x-4">
        <div className="w-full">
          <div className="mb-2 h-10 w-full bg-gray-200"></div>
          <div className="mt-1 h-5 bg-gray-200"></div>
        </div>
        <div className="h-5 w-12 bg-gray-200"></div>
      </div>
      <div className="mx-auto h-12 w-[70%] bg-gray-200 rounded-md"></div>
    </div>
    </div>
  );
}

export function ProductsSkeleton({amount = 8}: {amount?: number}) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-6 lg:mb-12">
      {Array(amount).fill(true, 0, amount).map(() => (<ProductItemSkeleton />))}
    </div>
  )
}