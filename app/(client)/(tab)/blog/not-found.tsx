import React from 'react';
import { BLOG_URL } from '@/const';
import NotFoundTemplate from '@/components/notFoundTemplate';

const NotFound = () => {
  return (
    <div className='flex flex-grow items-center justify-center'>
      <NotFoundTemplate notFoundMessage='404 Post Not Found :(' url={BLOG_URL} />
    </div>
  );
};

export default NotFound;