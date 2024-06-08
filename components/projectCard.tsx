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
    <div className="flex flex-col items-center space-y-4 rounded-md p-4 shadow-xl">
      <h2 className="text-xl">{project.name}</h2>
      <LinkWrapper url={project.url} newtab>
        <Image
          src={project.image}
          alt={project.name}
          width={240}
          height={135}
          className="translate-all rounded-md ease-in-out hover:opacity-70"
        />
      </LinkWrapper>
      <p className="text line-clamp-1 text-left">{project.description}</p>
      <div className="flex w-full flex-wrap justify-between gap-5 leading-8">
        <span>{project.tags?.map((tag) => <TagButton key={tag._id} name={tag.name} />)}</span>
        <span className="flex items-center space-x-2">
          <IconWrapper url={project.url} className="ml-1 h-7 w-7 text-xl" icon={faLink} newtab />
          <IconWrapper url={project.githubUrl} className="ml-1 h-7 w-7 text-xl" icon={faGithub} />
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
