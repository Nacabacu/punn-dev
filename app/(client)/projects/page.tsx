import LinkWrapper from '@/components/linkWrapper';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Metadata } from 'next';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: 'Punn | Projects',
};

export default function ProjectPage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Header title="Projects" />
        <LinkWrapper url="https://genshin-planner.punn.dev" newtab>
          <span className="text-xl flex items-center">
            Genshin Planner
            <OpenInNewIcon className="ml-1" />
          </span>
        </LinkWrapper>
      </div>
    </>
  );
}
