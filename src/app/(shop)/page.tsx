// Components
import {
  HomeProducts,
  Title,
  SlideHeader
} from '@/components';
// Data
import { homeProducts } from '@/database';


const products = homeProducts;

export default function Home() {

  return (
    <div className="">
      <SlideHeader />

      <Title
        title='Productos Destacados'
        className='mb-4 mt-5'
      />

      <HomeProducts
        products={ products }
      />
    </div>
  );
}
