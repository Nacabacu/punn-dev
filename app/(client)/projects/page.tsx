import LinkWrapper from '@/components/linkWrapper';
import { Metadata } from 'next';
import Header from '@/components/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectPage = () => {
  return (
  <>
      <div className="flex flex-col items-center">
        <Header title="Projects" />
        <LinkWrapper url="https://genshin-planner.punn.dev" newtab>
          <span className="text-xl flex items-center">
            Genshin Planner
            <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-1" />
          </span>
        </LinkWrapper>
      </div>
    </>
  );
}

export default ProjectPage;