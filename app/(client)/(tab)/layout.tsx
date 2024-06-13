const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <article className="mx-3 flex max-w-2xl flex-grow flex-col items-center">{children}</article>
    </>
  );
};

export default RootLayout;
