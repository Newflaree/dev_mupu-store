'use client';
// React
import { useState } from 'react';
// Next.js
import Image from 'next/image';
import NextLink from 'next/link';
import { Product } from '@/interfaces';

interface Props {
  //product: Product;
  product: any;
}

export const ProductGridItem = ({ product }: Props) => {
  const [ displayImage, setDisplayImage ] = useState( product.imgs[0].url );

  return (
    <div className='rounded-md overflow-hidden fade-in'>
      <NextLink href={ `/product/${ product.slug }` }>
        <Image
          src={ displayImage }
          alt={ product.name }
          className='w-full object-cover rounded'
          width={ 500 }
          height={ 500 }
          onMouseEnter={ () => setDisplayImage( product.imgs[1].url ) }
          onMouseLeave={ () => setDisplayImage( product.imgs[0].url ) }
        />
      </NextLink>
      
      <div className='p-4 flex flex-col'>
        <NextLink
          href={ `/product/${ product.slug }` }
          className='hover:text-cyan-600 transition-all'
        >
          { product.name }
        </NextLink>

        {
          product.price <= 0
            ? ''
            : (
              <span className='font-bold text-mupu text-end mt-3 text-lg'>
                ${ product.price <= 0 ? '' : product.price }
              </span>

            )
        }
      </div>
    </div>
  );
}

