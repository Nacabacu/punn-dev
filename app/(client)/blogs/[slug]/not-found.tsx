import React from 'react';
import LinkWrapper from '@/components/linkWrapper';
import { BLOGS_URL } from '@/const';

const NotFound = () => {
  return (
    <div className='flex flex-col flex-grow justify-center items-center bg-background dark:bg-backgroundDark'>
      <div className='font-extrabold text-4xl'>
        404 Blog Not Found :(
      </div>
      <LinkWrapper url={BLOGS_URL}>
        <div className='text-xl mt-8 flex items-center space-x-2'>
          <span>Back to Blogs</span>
        </div>
      </LinkWrapper>
    </div>
  );
};

export default NotFound;