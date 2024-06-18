interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className="my-8 flex w-full flex-col justify-center">
      <h2 className="text-center text-3xl font-extrabold sm:text-4xl">{title}</h2>
    </header>
  );
};

export default Header;
