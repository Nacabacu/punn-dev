interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header className='flex flex-col justify-center border-b border-dashed border-primary
     dark:border-primaryDark w-full pb-8 mb-8 border-opacity-50'>
      <h2 className='text-4xl font-extrabold text-center'>
        {title}
      </h2>
    </header>
  );
}

export default Header;