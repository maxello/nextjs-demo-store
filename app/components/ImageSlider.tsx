"use client";
import Image from 'next/image';
import React, { useState } from 'react';

export default function ImageSlider({images, title}: {images: string[], title: string}) {
  const [image, setImage] = useState(images[0]);

  return (
    <>
      <div className="w-full max-w-[300px] mx-auto md:mx-0 lg:max-w-[500px] aspect-square rounded-md bg-gray-100 mb-4 overflow-hidden">
        <Image width={500} height={500} src={image} alt={title} priority={true} className="aspect-square object-contain" />
      </div>
      {images.length > 1 &&
        <div className="flex gap-4 justify-center md:justify-start">
          {images.map((imageSrc: string, ind: number) => (
            <button key={ind} className="bg-gray-100 rounded-md overflow-hidden p-2" onClick={() => setImage(imageSrc)}>
              <Image width={100} height={100} src={imageSrc} alt={title} className="aspect-square object-contain" />
            </button>
          ))}
        </div>
      }
    </>
  )
}
