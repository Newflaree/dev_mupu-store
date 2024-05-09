// Components
import { BlogGrid } from '@/components';

const blogs: any = [
  { id: '0001', name: 'Test 1', desc: '[Test-1]: Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.', slug: 'test-1' },
  { id: '0002', name: 'Test 2', desc: '[Test-2]: Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.', slug: 'test-2' },
  { id: '0003', name: 'Test 3', desc: '[Test-3]: Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.', slug: 'test-3' },
];

export default function() {
  return (
    <div>
      <h1 className='font-bold text-4xl my-20 text-center'>Nuestros Artículos</h1>

      <BlogGrid
        blogs={ blogs }
      />
    </div>
  );
}
