interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className='flex flex-col justify-center border-b-2 border-dashed border-primary dark:border-primaryDark w-full pb-4 border-opacity-50'>
      <h2 className='text-4xl mx-auto max-w-2xl font-extrabold'>
        {title}
      </h2>
    </header>
  );
}