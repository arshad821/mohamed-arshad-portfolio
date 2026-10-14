import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function Base(props: IconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    />
  );
}

export const PinIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </Base>
);

export const MailIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Base>
);

export const PhoneIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </Base>
);

export const LinkedInIcon = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 11v5M8 8v.01M12 16v-5m0 2.5c0-1.4 1-2.5 2.4-2.5S17 12 17 13.6V16" />
  </Base>
);

export const GitHubIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M9 19c-4 1.2-4-2-6-2.5m12 4.5v-3.1a2.7 2.7 0 0 0-.8-2.1c2.8-.3 5.8-1.4 5.8-6.2a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.3s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.4 2.7 5.3 3 5.3 3a4.5 4.5 0 0 0-.1 3.3A4.8 4.8 0 0 0 3.9 9.6c0 4.8 3 5.9 5.800 6.2a2.7 2.700 0 0 0-.8 2.1V21" />
  </Base>
);

export const MenuIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Base>
);

export const CloseIcon = (p: IconProps) => (
  <Base {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Base>
);

export const FrameworkGlyph = (p: IconProps) => (
  <Base width="40" height="40" strokeWidth="1.3" {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 14l2 2 4-4" />
  </Base>
);

export const ApiGlyph = (p: IconProps) => (
  <Base width="40" height="40" strokeWidth="1.3" {...p}>
    <circle cx="6" cy="6" r="2.2" />
    <circle cx="18" cy="8" r="2.2" />
    <circle cx="9" cy="18" r="2.2" />
    <path d="m7.8 7 8.3.7M7.3 8l1 7.8M16.7 9.8 10.8 16.5" />
  </Base>
);

export const AiGlyph = (p: IconProps) => (
  <Base width="40" height="40" strokeWidth="1.3" {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="m12 8 1.6 2.4L16 12l-2.4 1.6L12 16l-1.6-2.4L8 12l2.4-1.6Z" />
  </Base>
);
