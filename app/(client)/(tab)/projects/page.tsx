import { Metadata } from 'next';
import Header from '@/components/header';
import ProjectCard from '@/components/projectCard';
import { getAllProjects } from '@/lib/sanity';

export const metadata: Metadata = {
  title: 'Projects',
};

const ProjectPage = async () => {
  const projects = await getAllProjects();

  return (
    <>
      <Header title="Projects" />
      <div className="grid w-full grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
