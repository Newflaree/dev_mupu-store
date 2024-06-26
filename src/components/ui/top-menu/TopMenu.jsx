'use client'
// Next.js
import Image from 'next/image';
import NextLink from 'next/link';
// React Icons
import {
  IoCartOutline,
  IoSearchOutline
} from 'react-icons/io5';
// Store
import { useUIStore } from '@/store';

export const TopMenu = () => {
  const openMenu = useUIStore( state => state.openSideMenu );

  return (
    <nav className='flex sm:px-5 justify-between items-center w-full bg-white shadow-lg'>
      <div>
        <NextLink href='/'>
          <Image
            src='https://res.cloudinary.com/newflare/image/upload/v1701358750/demos/muputun/xrsb6b6e5cw4butrxzun.png'
            alt='mupütun'
            className='p-2 sm:p-0'
            width={ 150 }
            height={ 75 }
          />
        </NextLink>
      </div>

      <div className='hidden sm:block'>
        <NextLink
          href='/category/gnss-x5'
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
        >
          GNSS X5
        </NextLink>
        <NextLink
          href='/category/combos'
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
        >
          Combos
        </NextLink>
        <NextLink
          href='/category/accesories'
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
        >
          Accesorios
        </NextLink>
        <NextLink
          href='/blogs'
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
        >
          Blog
        </NextLink>

        <a
          href='https://docs.mettatec.com/'
          target='_blank'
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
        >
          X5 Docs
        </a>

        <NextLink
          href='/contact'
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
        >
          Contacto
        </NextLink>
      </div>

      <div className='flex items-center'>
        <NextLink
          href='/search'
          className='mx-2'
        >
          <IoSearchOutline
            className='w-5 h-5'
          />
        </NextLink>

        <NextLink
          href='/cart'
          className='mx-2'
        >
          <div className='relative'>
            <span
              className={`
                absolute
                text-xs
                rounded-full
                px-1
                font-bold
                -top-2
                -right-2
                bg-mupu
                text-white
              `}
            >
              3
            </span>

            <IoCartOutline
              className='w-5 h-5'
            />
          </div>
        </NextLink>

        <button
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
          onClick={ openMenu }
        >
          Menú
        </button>
      </div>
    </nav>
  );
}
