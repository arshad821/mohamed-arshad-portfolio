import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';
import './Projects.css';

export function Projects() {
  return (
    <Section
      id="projects"
      title="Featured projects"
      tone="sand"
      intro=""
    >
      <ul className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </Section>
  );
}
