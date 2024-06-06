import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <section className='flex flex-col flex-grow transition-background-color bg-background dark:bg-backgroundDark'>
          <Navbar />
          { children }
      </section>
      <Footer />
    </div>
  );
}

export default RootLayout;