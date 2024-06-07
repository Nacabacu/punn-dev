import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { Project } from '@/types/sanity';
import TagButton from './tagButton';
import LinkWrapper from './linkWrapper';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className='p-4 rounded-md shadow-xl flex space-y-4 flex-col items-center h-full'>
      <h2 className='text-xl'>{project.name}</h2>
      <LinkWrapper url={project.url} newtab>
        <Image
          src={project.image}
          alt={project.name}
          width={240}
          height={135}
          className='rounded-md hover:opacity-70 translate-all ease-in-out'
        />
      </LinkWrapper>
      <p className='text-left text line-clamp-1'>{project.description}</p>
      <div className='flex w-full justify-between flex-wrap gap-5 leading-8'>
        <span>
          {project.tags?.map((tag) => (
            <TagButton key={tag._id} name={tag.name} />
          ))}
        </span>
        <span className='flex space-x-2'>
          <LinkWrapper url={project.url} className='flex items-center' newtab>
            <FontAwesomeIcon icon={faLink} className='ml-1 text-xl' />
          </LinkWrapper>
          <LinkWrapper
            url={project.githubUrl}
            className='flex items-center'
            newtab
          >
            <FontAwesomeIcon icon={faGithub} className='ml-1 text-xl' />
          </LinkWrapper>
        </span>
      </div>
    </div>
  );
};

{
  /* <LinkWrapper url='https://genshin-planner.punn.dev' newtab>
        <span className='text-xl flex items-center'>
          Genshin Planner
          <FontAwesomeIcon icon={faLink} className='ml-1' />
        </span>
      </LinkWrapper> */
}

export default ProjectCard;
