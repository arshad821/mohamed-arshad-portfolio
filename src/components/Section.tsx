import type { ReactNode } from 'react';
import './Section.css';

interface SectionProps {
  id: string;
  title: string;
  tone: 'cream' | 'charcoal' | 'sand' | 'ember';
  children: ReactNode;
  intro?: string;
}

/** Shared wrapper: landmark, heading, consistent width and spacing. */
export function Section({ id, title, tone, intro, children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={headingId}>
      <div className="container">
        <header className="section__head">
          <h2 id={headingId} className="section__title">
            {title}
          </h2>
          {intro ? <p className="section__intro">{intro}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
