import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import IconWrapper from './iconWrapper';
import LinkWrapper from './linkWrapper';

interface NotFoundProps {
  notFoundMessage: string;
  url: string;
  icon?: IconDefinition;
}

const NotFoundTemplate = ({ notFoundMessage, url, icon }: NotFoundProps) => {
  return (
    <div className="flex flex-grow flex-col items-center justify-center bg-background dark:bg-backgroundDark">
      <div className="text-2xl font-extrabold text-primary dark:text-primaryDark">
        {notFoundMessage}
      </div>
      <LinkWrapper url={url}>
        <div className="mt-8 flex items-center space-x-2 text-xl">
          <span>Back to Blog</span>
          {icon && <IconWrapper className="h-7 w-7 text-xl" icon={icon} />}
        </div>
      </LinkWrapper>
    </div>
  );
};

export default NotFoundTemplate;
