import React from 'react';
import { HOME_URL } from '@/const';
import NotFoundTemplate from '@/components/notFoundTemplate';

const NotFound = () => {
  return (
    <div className='flex flex-grow items-center justify-center'>
      <NotFoundTemplate notFoundMessage='404 Tag Not Found :(' url={HOME_URL} />
    </div>
  );
};

export default NotFound;