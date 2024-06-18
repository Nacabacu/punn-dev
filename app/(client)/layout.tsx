import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen flex-col bg-background transition-background-color dark:bg-backgroundDark">
      <main className="flex flex-grow flex-col">
        <Navbar />
        <div className="flex flex-grow justify-center mt-16">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
