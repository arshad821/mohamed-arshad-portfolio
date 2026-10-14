import { experience } from '../data/experience';
import { ExperienceItem } from './ExperienceItem';
import { Section } from './Section';
import './Experience.css';

export function Experience() {
  return (
    <Section id="experience" title="Professional experience" tone="charcoal">
      <ol className="timeline">
        {experience.map((entry) => (
          <ExperienceItem key={`${entry.company}-${entry.period}`} entry={entry} />
        ))}
      </ol>
    </Section>
  );
}
