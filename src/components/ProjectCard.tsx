import type { Project } from '../data/projects';
import { ApiGlyph, AiGlyph, FrameworkGlyph } from './Icons';

const glyphs = {
  framework: FrameworkGlyph,
  api: ApiGlyph,
  ai: AiGlyph,
} as const;

export function ProjectCard({ project }: { project: Project }) {
  const Glyph = glyphs[project.glyph];
  const titleId = `project-${project.id}`;

  // Determine the status displayed on the card.
  const status =
    project.status ??
    (project.repositoryLinks?.length || project.repoUrl
      ? 'Available'
      : 'Placeholder');

  return (
    <li>
      <article className="project" aria-labelledby={titleId}>
        {/* Project icon and status */}
        <div className="project__top">
          <Glyph className="project__glyph" />

          <span className="project__status">{status}</span>
        </div>

        {/* Project title and description */}
        <h3 id={titleId} className="project__title">
          {project.title}
        </h3>

        <p className="project__summary">{project.summary}</p>

        {/* Technology stack */}
        <ul className="project__focus" aria-label="Technologies and focus areas">
          {project.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Framework highlights and relevant experience */}
        <p className="project__related">
          <span>Related experience</span>
          {project.relatedExperience}
        </p>

        {/* Repository links */}
        {project.repositoryLinks?.length ? (
          <div className="project__repositories">
            <span className="project__repo-label">
              Explore repositories
            </span>

            <div className="project__repo-links">
              {project.repositoryLinks.map((repo) => (
                <a
                  key={repo.label}
                  className="project__link"
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${repo.label} repository (opens in a new tab)`}
                >
                  {repo.label} ↗
                </a>
              ))}
            </div>
          </div>
        ) : project.repoUrl ? (
          <a
            className="project__link"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} repository (opens in a new tab)`}
          >
            View repository ↗
          </a>
        ) : (
          <p className="project__pending">
  {project.status === 'Private Repository'
    ? 'Private repository · Source code not publicly available'
    : project.status === 'Implemented'
      ? 'Implementation details available on request'
      : 'Repository link coming soon'}
</p>
        )}
      </article>
    </li>
  );
}