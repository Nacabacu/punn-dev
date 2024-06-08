import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import IconWrapper from '@/components/iconWrapper';

const HomePage = () => {
  const iconClassName = 'sm:w-9 sm:h-9 sm:text-3xl w-8 h-8 text-2xl';
  return (
    <div className='flex flex-grow flex-col justify-center items-center h-full'>
      <div className='font-extrabold sm:text-5xl text-4xl text-center'>Punn Nararatwong</div>
      <div className='text-xl pt-4 text-primary dark:text-primaryDark'>a full stack developer</div>
      <div className='flex text-xl pt-4 space-x-12'>
        <IconWrapper url='https://github.com/Nacabacu' className={iconClassName} icon={faGithub} />
        <IconWrapper url='https://www.instagram.com/p.nacabacu' className={iconClassName} icon={faInstagram} />
        <IconWrapper url='https://th.linkedin.com/in/punn-nararatwong-4a7b5814a' className={iconClassName} icon={faLinkedin} />
        <IconWrapper url='mailto:punn.nara@gmail.com' className={iconClassName} icon={faEnvelope} />
      </div>
    </div>
  );
}

export default HomePage;