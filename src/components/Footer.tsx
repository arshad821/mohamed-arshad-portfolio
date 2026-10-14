import { profile } from '../data/profile';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p>Quality Engineer | QA Automation Engineer · Sharjah, UAE</p>
      </div>
    </footer>
  );
}
