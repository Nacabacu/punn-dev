import Navbar from '@/components/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className='flex flex-col min-h-screen transition-background-color bg-background dark:bg-backgroundDark'>
        <Navbar />
        {children}
      </section>
    </>
  );
}
