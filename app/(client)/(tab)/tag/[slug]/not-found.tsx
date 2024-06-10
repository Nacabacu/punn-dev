import NotFoundTemplate from '@/components/notFoundTemplate';
import { HOME_URL } from '@/const';

const NotFound = () => {
  return (
    <div className="flex flex-grow items-center justify-center">
      <NotFoundTemplate notFoundMessage="404 Tag Not Found :(" url={HOME_URL} />
    </div>
  );
};

export default NotFound;
