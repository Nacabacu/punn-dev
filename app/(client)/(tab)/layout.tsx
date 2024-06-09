const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="mx-3 flex max-w-2xl flex-grow flex-col items-center">{children}</div>
    </>
  );
};

export default RootLayout;
