const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <section className="mx-3 flex max-w-2xl flex-grow flex-col items-center">{children}</section>
    </>
  );
};

export default RootLayout;
