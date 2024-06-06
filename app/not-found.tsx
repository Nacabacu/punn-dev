import LinkWrapper from '@/components/linkWrapper';
import { HOME_URL } from '@/const';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-background dark:bg-backgroundDark'>
      <div className='font-extrabold text-4xl'>
        404 Not Found :(
      </div>
      <LinkWrapper url={HOME_URL}>
        <div className='text-xl mt-8 flex items-center space-x-2'>
          <span>Back to Home</span>
          <FontAwesomeIcon icon={faHouseChimney} />
        </div>
      </LinkWrapper>
    </div>
  )
}

export default NotFound;