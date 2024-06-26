import NotFoundTemplate from '@/components/notFoundTemplate';
import { BLOGS_URL } from '@/const';

const NotFound = () => {
  return (
    <div className="flex flex-grow items-center justify-center">
      <NotFoundTemplate notFoundMessage="404 Blog Not Found :(" url={BLOGS_URL} />
    </div>
  );
};

export default NotFound;
