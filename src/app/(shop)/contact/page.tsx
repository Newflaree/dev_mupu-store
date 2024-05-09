import NextLink from 'next/link';
// Config
import { titleFont } from '@/config';

export default function () {
  return (
    <div className="flex flex-col pt-10 sm:pt-10 sm:mx-20 pb-10">

      <h1 className={ `${ titleFont.className } text-4xl mb-10 text-center` }>Contáctanos</h1>

      <div className="flex flex-col">

        <label htmlFor="email">Nombre</label>
        <input
          className="px-5 py-2 border bg-gray-100 rounded mb-5"
          type="text" />

        <label htmlFor="email">Apellido</label>
        <input
          className="px-5 py-2 border bg-gray-100 rounded mb-5"
          type="text" />

        <label htmlFor="email">Mensaje</label>
        <textarea
          className="px-5 py-2 border bg-gray-100 rounded mb-10"
          rows={ 5 }
        />

        <button
          className="btn-primary"
        >
          <NextLink href='/'>
            Enviar Mensaje
          </NextLink>
        </button>
      </div>
    </div>
  );
}
