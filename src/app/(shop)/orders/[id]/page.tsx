// Next.js
import NextLink from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { IoCardOutline } from 'react-icons/io5';
// Components
import {
  Title,
  QuantitySelector
} from '@/components';
// Seed
import { productsDB } from '@/seed/products';

const productsInCart = [
  productsDB[0],
  productsDB[5],
  productsDB[3],
];

interface Props {
  params: {
    id: string;
  }
}

export default function Order({ params }: Props) {
  const { id } = params;

  //TODO: Verificar

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
        <Title title={ `Orden #${ id }` } />
 
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          {/*Cart*/}
          <div className='flex flex-col mt-5'>
            <div
              className={
                clsx(`
                  flex
                  items-center
                  rounded-lg
                  py-2
                  px-3.5
                  text-xs
                  font-bold
                  text-white
                  mb-5
                  `,
                  {
                    'bg-red-500': false,
                    'bg-green-700': true,
                  }
                )
              }
            >
              <IoCardOutline size={ 30 } />
              {/*<span className='mx-2'>Pendiente</span>*/}
              <span className='mx-2'>Pagada</span>
            </div>

            {/*Checkout*/}
            {
              productsInCart.map( product => (
                <div
                  key={ product.slug }
                  className='flex mt-5'
                >
                  <Image
                    src={ product.imgs[ 0 ].url }
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
                    <p>${ product.price } x 3</p>
                    <p className='font-bold'>Subtotal: ${ Number(product.price) * 3 }</p>
                  </div>
                </div>
              ))
            }
          </div>

          {/*Checkout*/}
          <div className='bg-white rounded-xl shadow-xl p-7'>
            <h2 className='text-2xl mb-2 font-bold'>Dirección de Entrega</h2>

            <div className='mb-10'>
              <p className='text-xl'>Nombre de pruebas</p>
              <p>Av. La Random</p>
              <p>Col. Centro</p>
              <p>Alcaldía Cuant</p>
              <p>Ciudad Aleatoria</p>
              <p>CP 123123</p>
              <p>+569 12345678</p>
            </div>

            <div className='w-full h-0.5 rounded bg-gray-200 mb-10' />

            <h2 className='text-2xl mb-2 font-bold'>Resumen de la Orden</h2>

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

            <div
              className={
                clsx(`
                  mt-5
                  flex
                  items-center
                  rounded-lg
                  py-2
                  px-3.5
                  text-xs
                  font-bold
                  text-white
                  mb-5
                  `,
                  {
                    'bg-red-500': false,
                    'bg-green-700': true,
                  }
                )
              }
            >
              <IoCardOutline size={ 30 } />
              {/*<span className='mx-2'>Pendiente</span>*/}
              <span className='mx-2'>Pagada</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
