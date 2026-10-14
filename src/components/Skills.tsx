import { skillGroups } from '../data/skills';
import { Section } from './Section';
import './Skills.css';

export function Skills() {
  return (
    <Section id="skills" title="Technical skills" tone="charcoal">
      <div className="skills">
        {skillGroups.map((group) => (
          <section key={group.title} className="skills__group" aria-labelledby={`skills-${group.title}`}>
            <h3 id={`skills-${group.title}`}>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
