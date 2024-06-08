import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import LinkWrapper from './linkWrapper';
import IconWrapper from './iconWrapper';

interface NotFoundProps {
  notFoundMessage: string;
  url: string;
  icon?: IconDefinition
}

const NotFoundTemplate = ({ notFoundMessage, url, icon }: NotFoundProps) => {
  return (
    <div className='flex flex-col flex-grow justify-center items-center bg-background dark:bg-backgroundDark'>
      <div className='font-extrabold text-2xl text-primary dark:text-primaryDark'>
        { notFoundMessage }
      </div>
      <LinkWrapper url={url}>
        <div className='text-xl mt-8 flex items-center space-x-2'>
          <span>Back to Blog</span>
          { icon && <IconWrapper className='w-7 h-7 text-xl' icon={icon} />}
        </div>
      </LinkWrapper>
    </div>
  );
};

export default NotFoundTemplate;