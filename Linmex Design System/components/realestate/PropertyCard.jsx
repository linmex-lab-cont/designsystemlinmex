import React from 'react';
import { Badge } from '../core/Badge.jsx';

/**
 * Real-estate listing card: image with status badge, name, location,
 * a row of specs and a price. Lifts on hover.
 */
export function PropertyCard({
  image, name, location, price, priceNote = 'desde', status, statusTone = 'success', specs = [], onClick, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)',
        cursor: onClick ? 'pointer' : 'default', display: 'flex', flexDirection: 'column',
      }}
      {...rest}
    >
      <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden', background: 'var(--gray-100)' }}>
        {image && <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover',
          transform: hover ? 'scale(1.04)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-out)' }} />}
        {status && <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
          <Badge tone={statusTone} variant="solid" size="sm">{status}</Badge>
        </div>}
      </div>
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        <div>
          <h4 style={{ margin: '0 0 2px', font: 'var(--fw-bold) 19px/1.2 var(--font-heading)', color: 'var(--color-ink)' }}>{name}</h4>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '5px',
            font: 'var(--fw-medium) 13px/1.3 var(--font-body)', color: 'var(--text-muted)' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flex: '0 0 auto' }}>
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            {location}
          </p>
        </div>
        {specs.length > 0 && (
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '2px' }}>
            {specs.map((s, i) => (
              <span key={i} style={{ font: 'var(--fw-semibold) 12px/1 var(--font-condensed)', letterSpacing: '.06em',
                textTransform: 'uppercase', color: 'var(--text-body)' }}>{s}</span>
            ))}
          </div>
        )}
        <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid var(--border)',
          display: 'flex', alignItems: 'baseline', gap: '6px' }}>
          {priceNote && <span style={{ font: 'var(--fw-medium) 12px/1 var(--font-condensed)', letterSpacing: '.1em',
            textTransform: 'uppercase', color: 'var(--text-subtle)' }}>{priceNote}</span>}
          <span style={{ font: 'var(--fw-bold) 22px/1 var(--font-condensed)', color: 'var(--color-primary)' }}>{price}</span>
        </div>
      </div>
    </div>
  );
}
