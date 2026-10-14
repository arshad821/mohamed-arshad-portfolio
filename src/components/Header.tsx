import { useEffect, useState } from 'react';
import { navItems } from '../data/navigation';
import { profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import { CloseIcon, MenuIcon } from './Icons';
import './Header.css';

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(navItems.map((item) => item.id));

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const className = ['header', scrolled || open ? 'header--solid' : ''].join(' ').trim();

  return (
    <header className={className}>
      <div className="header__inner container">
        <a className="header__brand" href="#home" onClick={() => setOpen(false)}>
          <span className="header__mark" aria-hidden="true">
            MA
          </span>
          <span className="header__name">{profile.name}</span>
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav id="primary-nav" className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
