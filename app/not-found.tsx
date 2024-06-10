import NotFoundTemplate from '@/components/notFoundTemplate';
import { HOME_URL } from '@/const';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <NotFoundTemplate notFoundMessage="404 Not Found :(" url={HOME_URL} icon={faHouseChimney} />
    </div>
  );
};

export default NotFound;
