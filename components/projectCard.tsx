import Image from 'next/image';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { Project } from '@/types/sanity';
import TagButton from './tagButton';
import LinkWrapper from './linkWrapper';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import IconWrapper from './iconWrapper';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className='p-4 rounded-md shadow-xl flex space-y-4 flex-col items-center'>
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
        <span className='flex items-center space-x-2'>
          <IconWrapper url={project.url} className='w-7 h-7 ml-1 text-xl' icon={faLink} newtab />
          <IconWrapper url={project.githubUrl} className='w-7 h-7 ml-1 text-xl' icon={faGithub} />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
