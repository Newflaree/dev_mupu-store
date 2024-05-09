// Next JS
import { notFound } from 'next/navigation';
// Componentes
import {
  ProductMobileSlideshow,
  DetailsTable,
  ProductSlideshow,
  QuantitySelector,
} from '@/components';
// Config
import { titleFont } from '@/config';
// Seed
import { productsDB  } from '@/seed/products';


interface Props {
  params: {
    slug: string;
  }
}

export default function Product({ params }: Props) {
  const { slug } = params;
  const product = productsDB.find( product => product.slug === slug );

  if ( !product ) {
    notFound();
  }

  return (
    <div className='mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3'>
      {/*SlideShow*/}
      <div className='col-span-1 md:col-span-2'>
        {/*Mobile Slideshow*/}
        {/*
        <ProductMobileSlideshow
          title={ product.name }
          images={ product.imgs }
          className='block md:hidden'
        />
          */}

        {/*Desktop Slideshow*/}
        <ProductSlideshow
          title={ product.name }
          images={ product.imgs }
          className='hidden md:block'
        />
      </div>
      {/*Details*/}
      <div className='col-span-1 px-5'>
        <h1 className={ `${ titleFont.className } antialiased font-bold text-xl` }>
          { product.name }
        </h1>

        <p className='text-3xl mb-5 text-mupu'>
          ${ product.price }
        </p>

        {/* Count Selector*/}
        <QuantitySelector
          quantity={ 1 }
        />

        <button className='btn-primary my-5'>
          Agregar al carrito
        </button>

        <h3 className='font-bold text-sm'>Descripción</h3>
        <p className='font-light'>
          { product.description }
        </p>
      </div>

      {/*Tech Specs*/}
      <div className='w-[800px] mt-20'>
        <h1 className='font-bold text-2xl'>Especificaciones Técnicas</h1>

        <DetailsTable />
      </div>
    </div>
  );
}
