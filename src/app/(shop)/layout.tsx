// Components
import {
  Footer,
  ParticlesBG,
  Sidebar,
  TopMenu
} from '@/components';


export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen'>
      <TopMenu />
      <Sidebar />
      <ParticlesBG />

      <div className='px-0 sm:px-10 sm:w-[1080px] m-auto'>
        { children }
      </div>

      <Footer />
    </div>
  );
}
