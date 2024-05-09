// Components
import { ProductGrid } from '@/components';
// Database
import { productsDB } from '@/seed/products';


interface Props {
  params: any
}

const products = productsDB.filter( product => product.category === 'gnss-x5' );

export default function GNSS({ params }: Props) {
  return (
    <div className='mt-10'>
      <h1 className='text-6xl text-mupu font-bold mb-20'>
        Dispositivos GNSS X5
      </h1>

      <div>
        <p className='py-4 font-light'>
          Nuestros Dispositivos GNSS X5 ofrecen una precisión incomparable al convertir señales GPS, Glonass, Galileo y Beidou en ubicaciones terrestres exactas. Con capacidad de múltiples constelaciones, garantizan un posicionamiento superior, ideal para navegación vehicular, mapeo detallado y aplicaciones que exigen alta precisión en cualquier entorno como la topografía.
        </p>
      </div>

      <div className='mt-4'>
        <h2 className='text-3xl font-bold mt-10 mb-7'>Nuestros Productos GNSS X5</h2>

        <div className=''>
          <ProductGrid products={ products } />
        </div>
      </div>
    </div>
  );
}
