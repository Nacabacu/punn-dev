import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen flex-col bg-background transition-background-color dark:bg-backgroundDark">
      <div className="flex flex-grow flex-col">
        <Navbar />
        <main className="mt-16 flex flex-grow justify-center">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
