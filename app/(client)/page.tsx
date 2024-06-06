import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkWrapper from '@/components/linkWrapper';

export default function HomePage() {
  return (
    <div className='flex flex-grow flex-col justify-center items-center h-full'>
      <div className='font-extrabold text-5xl text-center'>Punn Nararatwong</div>
      <div className='text-xl pt-4 text-primary dark:text-primaryDark'>a full stack developer</div>
      <div className='text-xl pt-4 space-x-12'>
        <LinkWrapper url='https://github.com/Nacabacu'>
          <GitHubIcon className='text-3xl' />
        </LinkWrapper>
        <LinkWrapper url='https://www.instagram.com/p.nacabacu'>
          <InstagramIcon className='text-3xl' />
        </LinkWrapper>
        <LinkWrapper url='https://th.linkedin.com/in/punn-nararatwong-4a7b5814a'>
          <LinkedInIcon className='text-3xl' />
        </LinkWrapper>
      </div>
    </div>
  );
}
