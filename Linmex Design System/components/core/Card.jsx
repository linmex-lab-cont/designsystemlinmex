import React from 'react';

/**
 * Surface container. White card with hairline border + soft shadow,
 * optional orange accent edge or an interactive hover lift.
 */
export function Card({ children, accent = false, interactive = false, padding = 'md', as = 'div', style = {}, ...rest }) {
  const pads = { none: 0, sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-8)' };
  const [hover, setHover] = React.useState(false);
  const Tag = as;

  return (
    <Tag
      onMouseEnter={interactive ? () => setHover(true) : undefined}
      onMouseLeave={interactive ? () => setHover(false) : undefined}
      style={{
        position: 'relative',
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        padding: pads[padding],
        overflow: 'hidden',
        transform: interactive && hover ? 'translateY(-3px)' : 'none',
        transition: 'box-shadow var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {accent && (
        <span style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
          background: 'var(--color-primary)',
        }} />
      )}
      {children}
    </Tag>
  );
}
