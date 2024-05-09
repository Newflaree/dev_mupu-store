import Image from 'next/image';

export const BlogCard = ({ blog }: any) => {
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <a href="#">
            {/*
              // TODO: Implement Next Image
              <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="">
            */}
            <Image
              src=''
              alt={ blog.name }
            />

          </a>
          <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  { blog.name }
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3">
                { blog.desc }
              </p>

              <a className="text-white bg-mupu hover:bg-cyan-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                Leer más
              </a>
          </div>
      </div>
    </div>
  );
}
