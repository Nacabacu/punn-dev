import Image from 'next/image';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { Project } from '@/types/sanity';
import LinkWrapper from './linkWrapper';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import IconWrapper from './iconWrapper';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex gap-4 rounded-md p-4 shadow-md">
      <LinkWrapper url={project.url} className="w-40" newtab>
        <Image
          src={project.image}
          alt={project.name}
          width={300}
          height={150}
          className="translate-all rounded-md border ease-in-out hover:opacity-70"
        />
      </LinkWrapper>
      <div className="flex flex-grow flex-col justify-between">
        <div className="flex justify-between truncate">
          <h2 className="text-lg sm:text-xl">{project.name}</h2>
        </div>
        <span className="flex items-center space-x-2">
          <IconWrapper url={project.url} className="ml-1 h-7 w-7 text-xl" icon={faLink} newtab />
          <IconWrapper
            url={project.githubUrl}
            className="ml-1 h-7 w-7 text-xl"
            icon={faGithub}
            newtab
          />
        </span>
        {/* <p className="text line-clamp-1 text-left">{project.description}</p> */}
        {/* <div className="flex flex-wrap">
          {project.tags?.map((tag) => <TagButton key={tag._id} name={tag.name} />)}
        </div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
