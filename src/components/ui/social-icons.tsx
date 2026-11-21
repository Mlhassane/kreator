export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 3c.3 2.1 1.5 3.6 3.4 3.9v2.6c-1.3.1-2.4-.3-3.4-1v6.2c0 3.5-2.8 6.3-6.2 6.3A6.2 6.2 0 0 1 4 14.8c0-3.4 2.7-6.2 6.1-6.2.3 0 .7 0 1 .1v2.8a3.3 3.3 0 1 0 2.4 3.2V3h3.1Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect
        x="2.5"
        y="5.5"
        width="19"
        height="13"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M10.5 9.6v4.8l4.2-2.4-4.2-2.4Z" fill="currentColor" />
    </svg>
  );
}
