import LinkWrapper from '@/components/linkWrapper';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Project() {
  return (
    <>
      <div className="space-y-2">
        <LinkWrapper url="https://genshin-planner.punn.dev" newtab>
          <span className="text-xl flex items-center">Genshin Planner<OpenInNewIcon className="ml-1" /></span>
        </LinkWrapper>
      </div>
    </>
  );
}
