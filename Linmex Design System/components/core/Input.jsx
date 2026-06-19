import React from 'react';

/**
 * Text field with optional label, leading icon, hint and error state.
 * Focus shows the brand orange ring.
 */
export function Input({
  label, hint, error, iconLeft, id, type = 'text', size = 'md', full = true, style = {}, ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [focus, setFocus] = React.useState(false);
  const h = { sm: 'var(--control-h-sm)', md: 'var(--control-h)', lg: 'var(--control-h-lg)' }[size];

  const borderColor = error ? 'var(--danger)' : focus ? 'var(--color-primary)' : 'var(--border-strong)';

  return (
    <div style={{ width: full ? '100%' : 'auto', ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          display: 'block', marginBottom: '6px',
          font: 'var(--fw-semibold) 13px/1 var(--font-heading)', color: 'var(--text-strong)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        height: h, padding: '0 14px',
        background: 'var(--surface-card)',
        border: `1.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-sm)',
        boxShadow: focus && !error ? 'var(--ring)' : 'none',
        transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      }}>
        {iconLeft && <span style={{ display: 'flex', color: 'var(--text-subtle)', flex: '0 0 auto' }}>{iconLeft}</span>}
        <input
          id={inputId}
          type={type}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, height: '100%', border: 'none', outline: 'none', background: 'transparent',
            font: 'var(--fw-regular) 15px/1 var(--font-body)', color: 'var(--text-strong)',
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <p style={{
          margin: '6px 0 0', font: 'var(--fw-medium) 12px/1.4 var(--font-body)',
          color: error ? 'var(--danger)' : 'var(--text-muted)',
        }}>{error || hint}</p>
      )}
    </div>
  );
}
