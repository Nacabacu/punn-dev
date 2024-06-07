const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className='flex flex-col items-center max-w-full 2xl:mx-72 xl:mx-48 lg:mx-24 md:mx-12 sm:mx-6 mx-3'>
        {children}
      </div>
    </>
  );
};

export default RootLayout;
