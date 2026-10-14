import { aboutFacts, aboutParagraphs, resultHighlights } from '../data/profile';
import { Section } from './Section';
import './About.css';

export function About() {
  return (
    <Section id="about" title="About me" tone="cream">
      <div className="about">
        <div className="about__story">
          {aboutParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <aside className="about__side" aria-label="Quick facts and results">
          <dl className="about__facts">
            {aboutFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="about__subhead">Results from past roles</h3>
          <ul className="about__results">
            {resultHighlights.map((r) => (
              <li key={r.figure}>
                <strong>{r.figure}</strong> {r.detail}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
