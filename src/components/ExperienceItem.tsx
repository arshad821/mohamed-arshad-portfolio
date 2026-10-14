import type { ExperienceEntry } from '../data/experience';

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <li className="job">
      <article>
        <div className="job__meta">
          <p className="job__period">{entry.period}</p>
          <p className="job__location">{entry.location}</p>
        </div>

        <div className="job__body">
          <h3 className="job__company">{entry.company}</h3>
          <p className="job__role">{entry.role}</p>

          <div className="job__project">
            <p className="job__project-name">Project: {entry.project}</p>
            <p>{entry.projectSummary}</p>
          </div>

          <ul className="job__list">
            {entry.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
}
