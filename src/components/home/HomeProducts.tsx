import { ProductGridItem } from '../products';
import { MupuHomeProduct } from '@/interfaces';

interface Props {
  //products: Product[];
  sectionTitle?: string;
  products: MupuHomeProduct[];
}

export const HomeProducts = ({ sectionTitle, products }: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-10 mb-20'>
      {
        sectionTitle && <h2 className='text-center w-full'>{ sectionTitle }</h2>
      }

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
