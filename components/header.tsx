interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="mb-8 flex w-full flex-col justify-center border-b border-dashed border-primary border-opacity-50 pb-8 dark:border-primaryDark">
      <h2 className="text-center text-3xl font-extrabold sm:text-4xl">{title}</h2>
    </header>
  );
};

export default Header;
