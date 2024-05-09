// Components
import {
  AdminTopMenu,
  AdminSidebar,
  ParticlesBG,
} from '@/components';


export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen'>
      <AdminTopMenu />
      <AdminSidebar />

      <ParticlesBG />
      <div className='px-0 sm:px-10 sm:w-[1080px] m-auto ml-[300px] mt-20'>
        { children }
      </div>
    </div>
  );
}
