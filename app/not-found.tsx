import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 160px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 20px',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--color-primary)',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}
      >
        404 error
      </span>
      <h1
        style={{
          fontFamily: 'var(--font-head)',
          fontSize: '40px',
          fontWeight: 800,
          color: 'var(--green-900)',
          margin: '0 0 16px',
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          color: 'var(--color-text-secondary)',
          maxWidth: '440px',
          lineHeight: 1.6,
          margin: '0 0 32px',
        }}
      >
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Button href="/" size="lg">
        Return to Home
      </Button>
    </div>
  );
}
