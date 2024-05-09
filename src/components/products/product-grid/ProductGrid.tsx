import { ProductGridItem } from './';
import { Product } from '@/interfaces';

interface Props {
  //products: Product[];
  products: any[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10'>
      {
        products.map( product => (
          <ProductGridItem
            key={ product.slug }
            product={ product }
          />
        ))
      }
    </div>
  );
}
