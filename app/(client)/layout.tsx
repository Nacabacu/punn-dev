import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-grow flex-col bg-background transition-background-color dark:bg-backgroundDark">
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
