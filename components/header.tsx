interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="my-8 flex w-full flex-col justify-center">
      <h1 className="text-center text-2xl font-extrabold sm:text-3xl">{title}</h1>
    </div>
  );
};

export default Header;
