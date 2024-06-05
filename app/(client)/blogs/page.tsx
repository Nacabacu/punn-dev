import { Metadata } from 'next';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Punn | Blogs',
};

export default function BlogPage() {
  return (
    <div className='flex flex-col items-center h-full xl:mx-64 lg:mx-48 md:mx-32 sm:mx-32 mx-8'>
      <Header title='Blogs'/>
    </div>
  );
}
