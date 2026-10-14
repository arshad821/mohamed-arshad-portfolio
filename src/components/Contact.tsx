import { profile } from '../data/profile';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from './Icons';
import { Section } from './Section';
import './Contact.css';

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      tone="ember"
      intro={"Email is the fastest way to reach me. I\u2019m based in Sharjah, UAE."}
    >
      <ul className="contact">
        <li>
          <MailIcon />
          <div>
            <span className="contact__label">Email</span>
            <a className="contact__value contact__value--lead" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </li>
        <li>
          <PhoneIcon />
          <div>
            <span className="contact__label">Phone</span>
            <a className="contact__value" href={profile.phoneHref}>
              {profile.phone}
            </a>
          </div>
        </li>
        <li>
          <LinkedInIcon />
          <div>
            <span className="contact__label">LinkedIn</span>
            <a className="contact__value" href={profile.linkedin.href} target="_blank" rel="noopener noreferrer">
              {profile.linkedin.label}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        </li>
        <li>
          <GitHubIcon />
          <div>
            <span className="contact__label">GitHub</span>
            <a className="contact__value" href={profile.github.href} target="_blank" rel="noopener noreferrer">
              {profile.github.label}
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        </li>
        <li>
          <PinIcon />
          <div>
            <span className="contact__label">Location</span>
            <span className="contact__value">{profile.location}</span>
          </div>
        </li>
      </ul>
    </Section>
  );
}
