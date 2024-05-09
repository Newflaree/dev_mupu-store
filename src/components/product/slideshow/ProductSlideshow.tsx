'use client';
// React
import {
  useState
} from 'react';
// Next JS
import Image from 'next/image';
import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';

import {
  Autoplay,
  FreeMode,
  Navigation,
  Thumbs
} from 'swiper/modules';


interface Props {
  images: any[];
  title: string;
  className?: string;
}

export const ProductSlideshow = ({
  images,
  title,
  className
}: Props) => {
  const [ thumbsSwiper, setThumbsSwiper ] = useState<SwiperObject>();

  return (
    <div className={ className }>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties }
        spaceBetween={ 10 }
        navigation={ true }
        autoplay={{
          delay: 6000
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[
          Autoplay,
          FreeMode,
          Navigation,
          Thumbs
        ]}
        className='mySwiper2'
      >
        {
          images.map( ( image: any ) => (
            <SwiperSlide key={ image.name }>
              <Image
                width={ 1920 }
                height={ 200 }
                src={  image.url }
                alt={ title }
                className='rounded-lg object-fill'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

       <Swiper
        onSwiper={ setThumbsSwiper }
        spaceBetween={ 10 }
        slidesPerView={ 4 }
        freeMode={ true }
        watchSlidesProgress={ true }
        modules={[
          FreeMode,
          Navigation,
          Thumbs
        ]}
        className="mySwiper"
      >
        {
          images.map( (image: any) => (
            <SwiperSlide key={ image.name }>
              <Image
                width={ 300 }
                height={ 300 }
                src={ image.url }
                alt={ title }
                className='rounded-lg object-fill'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
