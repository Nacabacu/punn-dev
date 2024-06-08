const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="mx-3 flex max-w-full flex-grow flex-col items-center sm:mx-6 md:mx-12 lg:mx-24 xl:mx-48 2xl:mx-72">
        {children}
      </div>
    </>
  );
};

export default RootLayout;
