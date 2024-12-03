export default function ProductsPromo({title, text}: {title: string, text: string}) {
  return (
    <div className="bg-[url('/products-promo.jpg')] bg-cover mb-12 lg:mb-20 bg-fixed">
      <div className="relative overflow-hidden bg-[rgba(31,41,55,0.7)]">
        <div className="py-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="sm:max-w-2xl text-center">
              <h1 className="text-4xl sm:max-w-lg mx-auto font-bold tracking-tight text-white sm:text-6xl mb-4">
                {title}
              </h1>
              <p className="text-xl text-white">
                {text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
