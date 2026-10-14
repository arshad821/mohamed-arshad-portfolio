import type { Project } from '../data/projects';
import { ApiGlyph, AiGlyph, FrameworkGlyph } from './Icons';

const glyphs = { framework: FrameworkGlyph, api: ApiGlyph, ai: AiGlyph } as const;

export function ProjectCard({ project }: { project: Project }) {
  const Glyph = glyphs[project.glyph];
  const titleId = `project-${project.id}`;

  return (
    <li>
      <article className="project" aria-labelledby={titleId}>
        <div className="project__top">
          <Glyph className="project__glyph" />
          <span className="project__status">{project.repoUrl ? 'Available' : 'Placeholder'}</span>
        </div>

        <h3 id={titleId} className="project__title">
          {project.title}
        </h3>
        <p className="project__summary">{project.summary}</p>

        <ul className="project__focus" aria-label="Focus areas">
          {project.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="project__related">
          <span>Related experience</span>
          {project.relatedExperience}
        </p>

        {project.repoUrl ? (
          <a className="project__link" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            View repository
            <span className="visually-hidden"> for {project.title} (opens in a new tab)</span>
          </a>
        ) : (
          <p className="project__pending">Repository link coming soon</p>
        )}
      </article>
    </li>
  );
}
