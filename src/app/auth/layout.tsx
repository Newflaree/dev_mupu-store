import Image from 'next/image';
import { ParticlesBG } from '@/components';

export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex justify-center'>
      <ParticlesBG />
      <div className='w-full sm:w-[350px] px-10'>
      <div
        className='flex justify-center mb-5'
      >
        <Image
          src='https://res.cloudinary.com/newflare/image/upload/v1701358750/demos/muputun/xrsb6b6e5cw4butrxzun.png'
          alt='mupütun'
          className='p-5 sm:p-0 mt-5'
          width={ 200 }
          height={ 100 }
        />
      </div>
        { children }
      </div>
    </div>
  );
}
