export interface Product {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  type: Type;
  gender: Category;
}

export type Category = 'men'|'women'|'kid'|'unisex';
export type Size = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type Type = 'shirts'|'pants'|'hoodies'|'hats';


export interface ProductImage {
  name: string;
  url: string;
}

export interface HomeProduct {
  id: string;
  name: string;
  imgs: ProductImage[],
  price: string;
  slug: string;
}

export interface MupuProduct {
  id: string;
  name: string;
  cate: string;
}

export interface MupuImages {
  name: string;
  url: string;
}

export interface MupuHomeProduct {
  id: string;
  name: string;
  imgs:  MupuImages[],
  price: string;
  slug: string;
}

/*
    id: 'hp-001',
    name: 'X5 PPK Phantom 4 Pro',
    imgs: [
      { 
        name: 'img-1',
        url: 'https://res.cloudinary.com/newflare/image/upload/v1704657993/demos/muputun/new-products/X5%20PPK%20Phantom%204%20Pro/pnl63ywvn4sssmcpdyo4.jpg'
      },
      { 
        name: 'img-2',
        url: 'https://res.cloudinary.com/newflare/image/upload/v1704657991/demos/muputun/new-products/X5%20PPK%20Phantom%204%20Pro/mk5jfgj1syxj1kmmflod.jpg'
      },
    ],
    price: '1.499.000',
    slug: 'x5-ppk-phantom-4-pro',
 *
* */

