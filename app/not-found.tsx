import { HOME_URL } from '@/const';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import NotFoundTemplate from '@/components/notFoundTemplate';

const NotFound = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <NotFoundTemplate notFoundMessage='404 Not Found :(' url={HOME_URL} icon={faHouseChimney} />
    </div>
  );
}

export default NotFound;