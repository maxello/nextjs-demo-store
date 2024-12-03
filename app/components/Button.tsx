import React from 'react'

export default function Button({children, text, isDisabled, addProductToCart}) {
  return (
    <button disabled={isDisabled} className="inline-flex gap-x-2 items-center rounded-md bg-indigo-500 transition-colors px-4 py-3 uppercase text-sm font-semibold text-white lg:hover:bg-indigo-700" onClick={addProductToCart}>
      {children}
      <span>{text}</span>
    </button>
  )
}
