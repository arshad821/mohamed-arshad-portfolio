import type { CSSProperties } from 'react';
import { profile } from '../data/profile';
import heroDesktop from '../assets/hero-desktop.webp';
import heroMobile from '../assets/hero-mobile.webp';
import { PinIcon } from './Icons';
import './Hero.css';

/** Position in the page-load sequence; CSS turns it into a stagger delay. */
const step = (i: number) => ({ '--i': i }) as CSSProperties;

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <picture>
          <source media="(max-width: 1023px)" srcSet={heroMobile} width="720" height="878" />
          <img
            src={heroDesktop}
            width="1600"
            height="900"
            alt="Portrait of Mohamed Arshad in a black blazer and turtleneck, lit by warm evening sun"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="hero__glow" aria-hidden="true" />
      </div>

      <div className="hero__inner container">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__name" style={step(0)}>
            {profile.name}
          </h1>

          <p className="hero__roles" style={step(1)}>
  <span>{profile.titles[0]}</span>
</p>

          <p className="hero__headline">
            <span className="hero__line" style={step(2)}>
              {profile.headline[0]}
            </span>
            <span className="hero__line hero__line--warm" style={step(3)}>
              {profile.headline[1]}
            </span>
          </p>

          <p className="hero__intro" style={step(4)}>
            {profile.intro}
          </p>

          <div className="hero__actions" style={step(5)}>
            <a className="button button--primary" href="#projects">
              View Projects
            </a>
            <a className="button button--ghost" href="#contact">
              Let's Connect
            </a>
          </div>

          <p className="hero__location" style={step(6)}>
            <PinIcon width={18} height={18} />
            <span>{profile.location}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
