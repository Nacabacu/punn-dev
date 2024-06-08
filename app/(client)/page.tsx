import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import IconWrapper from '@/components/iconWrapper';

const HomePage = () => {
  const iconClassName = 'sm:w-9 sm:h-9 sm:text-3xl w-8 h-8 text-2xl';
  return (
    <div className="flex h-full flex-grow flex-col items-center justify-center">
      <div className="text-center text-4xl font-extrabold sm:text-5xl">Punn Nararatwong</div>
      <div className="pt-4 text-xl text-primary dark:text-primaryDark">a full stack developer</div>
      <div className="flex space-x-12 pt-4 text-xl">
        <IconWrapper url="https://github.com/Nacabacu" className={iconClassName} icon={faGithub} />
        <IconWrapper
          url="https://www.instagram.com/p.nacabacu"
          className={iconClassName}
          icon={faInstagram}
        />
        <IconWrapper
          url="https://th.linkedin.com/in/punn-nararatwong-4a7b5814a"
          className={iconClassName}
          icon={faLinkedin}
        />
        <IconWrapper url="mailto:punn.nara@gmail.com" className={iconClassName} icon={faEnvelope} />
      </div>
    </div>
  );
};

export default HomePage;
