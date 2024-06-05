import Navbar from '@/components/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col pt-10 min-h-screen bg-background dark:bg-backgroundDark'>
      <Navbar />
      {children}
    </div>
  );
}
