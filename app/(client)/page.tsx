import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import LinkWrapper from '@/components/linkWrapper';

const HomePage = () => {
  return (
    <div className='flex flex-grow flex-col justify-center items-center h-full'>
      <div className='font-extrabold text-5xl text-center'>Punn Nararatwong</div>
      <div className='text-xl pt-4 text-primary dark:text-primaryDark'>a full stack developer</div>
      <div className='text-xl pt-4 space-x-12'>
        <LinkWrapper url='https://github.com/Nacabacu'>
          <FontAwesomeIcon icon={faGithub} className='text-3xl' />
        </LinkWrapper>
        <LinkWrapper url='https://www.instagram.com/p.nacabacu'>
          <FontAwesomeIcon icon={faInstagram} className='text-3xl' />
        </LinkWrapper>
          <LinkWrapper url='https://th.linkedin.com/in/punn-nararatwong-4a7b5814a'>
        <FontAwesomeIcon icon={faLinkedin} className='text-3xl' />
        </LinkWrapper>
      </div>
    </div>
  );
}

export default HomePage;