import LinkWrapper from '@/components/linkWrapper';
import HomeIcon from '@mui/icons-material/Home';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-background dark:bg-backgroundDark'>
      <div className='font-extrabold text-4xl'>
        404 Not Found :(
      </div>
      <LinkWrapper url='/'>
        <div className='text-xl mt-8 flex items-center space-x-2'>
          <span>Back to Home</span>
          <HomeIcon/>
        </div>
      </LinkWrapper>
    </div>
  )
}