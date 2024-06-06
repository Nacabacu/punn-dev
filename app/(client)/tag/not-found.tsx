import React from 'react';
import LinkWrapper from '@/components/linkWrapper';
import { HOME_URL } from '@/const';

const NotFound = () => {
  return (
    <div className='flex flex-col flex-grow justify-center items-center bg-background dark:bg-backgroundDark'>
      <div className='font-extrabold text-2xl text-primary dark:text-primaryDark'>
        404 Tags Not Found :(
      </div>
      <LinkWrapper url={HOME_URL}>
        <div className='text-xl mt-8 flex items-center space-x-2'>
          <span>Back to Home</span>
        </div>
      </LinkWrapper>
    </div>
  );
};

export default NotFound;