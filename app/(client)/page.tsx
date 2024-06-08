import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import IconWrapper from '@/components/iconWrapper';

const HomePage = () => {
  return (
    <div className='flex flex-grow flex-col justify-center items-center h-full'>
      <div className='font-extrabold text-5xl text-center'>Punn Nararatwong</div>
      <div className='text-xl pt-4 text-primary dark:text-primaryDark'>a full stack developer</div>
      <div className='flex text-xl pt-4 space-x-12'>
        <IconWrapper url='https://github.com/Nacabacu' className='w-9 h-9 text-3xl' icon={faGithub} />
        <IconWrapper url='https://www.instagram.com/p.nacabacu' className='w-9 h-9 text-3xl' icon={faInstagram} />
        <IconWrapper url='https://th.linkedin.com/in/punn-nararatwong-4a7b5814a' className='w-9 h-9 text-3xl' icon={faLinkedin} />
        <IconWrapper url='mailto:punn.nara@gmail.com' className='w-9 h-9 text-3xl' icon={faEnvelope} />
      </div>
    </div>
  );
}

export default HomePage;