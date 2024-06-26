// Next.js
import NextLink from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
// Components
import {
  Title,
  QuantitySelector
} from '@/components';
// Database
import { productsDB } from '@/seed/products';

const productsInCart = [
  productsDB[0],
  productsDB[5],
  productsDB[3],
];

export default function Cart() {
  //redirect( '/empty' )


  return (
    <div
      className={`
        flex
        justify-center
        items-center
        mb-72
        px-10
        sm:px-0
      `}
    >
      <div className='flex flex-col w-[1000px]'>
        <Title title='Carro de compras' />
 
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          {/*Cart*/}
          <div className='flex flex-col mt-5'>
            <span className='text-xl'>
              Agregar más items
            </span>
            <NextLink
              href='/'
              className='underline mb-5'
            >
              Continúa comprando
            </NextLink>
            {/*Checkout*/}
            {
              productsInCart.map( product => (
                <div
                  key={ product.slug }
                  className='flex mt-5 mb-3'
                >
                  <Image
                    src={ product.imgs[0].url }
                    width={ 100 }
                    height={ 100 }
                    alt={ product.name }
                    className='mr-5 rounded'
                    style={{
                      width: '100px',
                      height: '100px'
                    }}
                  />

                  <div>
                    <p>{ product.name }</p>
                    <p className='text-mupu'>${ product.price }</p>

                    <QuantitySelector quantity={ 3 } />

                    <button className='underline mt-3'>
                      Remover
                    </button>
                  </div>
                </div>
              ))
            }
          </div>

          {/*Checkout*/}
          <div className='bg-white rounded-xl shadow-xl p-7'>
            <h2 className='text-2xl mb-2'>Resumen de la Orden</h2>

            <div className='grid grid-cols-2'>
              <span>No. Productos</span>
              <span className='text-right'>3 artículos</span>

              <span>Subtotal</span>
              <span className='text-right'>$ 100</span>

              <span>Impuestos</span>
              <span className='text-right'>15%</span>

              <span className='mt-5 text-2xl'>Total</span>
              <span className='mt-5 text-2xl text-right'>$115</span>
            </div>

            <div className='mt-5 mb-2 w-full'>
              <NextLink
                href='/checkout/address'
                className='flex btn-primary justify-center'
              >
                Checkout
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
