import { BlogCard } from './';

interface Props {
  blogs: any[];
}

export const BlogGrid = ({ blogs }: Props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10'>
      {
        blogs.map( blog => (
          <BlogCard
            key={ blog.slug }
            blog={ blog }
          />
        ))
      }
    </div>
  );
}
