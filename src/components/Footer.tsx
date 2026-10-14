import { profile } from '../data/profile';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with React, TypeScript and Vite.</p>
      </div>
    </footer>
  );
}
