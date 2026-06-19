import React from 'react';

/**
 * Linmex primary button. Confident, sharp-cornered, brand-orange by default.
 * Variants: primary (orange), secondary (navy), outline, ghost, onDark.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  type = 'button',
  onClick,
  ...rest
}) {
  const heights = { sm: 'var(--control-h-sm)', md: 'var(--control-h)', lg: 'var(--control-h-lg)' };
  const pads = { sm: '0 16px', md: '0 22px', lg: '0 30px' };
  const fonts = { sm: '14px', md: '15px', lg: '16px' };

  const palettes = {
    primary: { bg: 'var(--color-primary)', color: 'var(--color-on-primary)', border: 'transparent',
      hover: 'var(--color-primary-hover)', active: 'var(--color-primary-active)', shadow: 'var(--shadow-orange)' },
    secondary: { bg: 'var(--navy-800)', color: '#fff', border: 'transparent',
      hover: 'var(--navy-700)', active: 'var(--navy-900)', shadow: 'var(--shadow-sm)' },
    outline: { bg: 'transparent', color: 'var(--color-ink)', border: 'var(--border-strong)',
      hover: 'var(--gray-50)', active: 'var(--gray-100)', shadow: 'none' },
    ghost: { bg: 'transparent', color: 'var(--color-primary)', border: 'transparent',
      hover: 'var(--orange-50)', active: 'var(--orange-100)', shadow: 'none' },
    onDark: { bg: '#fff', color: 'var(--navy-800)', border: 'transparent',
      hover: 'var(--gray-100)', active: 'var(--gray-200)', shadow: 'none' },
  };
  const p = palettes[variant] || palettes.primary;
  const [state, setState] = React.useState('rest');

  const bg = disabled ? 'var(--gray-200)' : (state === 'active' ? p.active : state === 'hover' ? p.hover : p.bg);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setState('hover')}
      onMouseLeave={() => setState('rest')}
      onMouseDown={() => setState('active')}
      onMouseUp={() => setState('hover')}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '9px',
        width: full ? '100%' : 'auto',
        height: heights[size], padding: pads[size],
        font: `var(--fw-bold) ${fonts[size]}/1 var(--font-heading)`,
        letterSpacing: '.01em',
        color: disabled ? 'var(--gray-400)' : p.color,
        background: bg,
        border: `1.5px solid ${p.border === 'transparent' ? bg : p.border}`,
        borderRadius: 'var(--radius-sm)',
        boxShadow: disabled || state !== 'rest' ? 'none' : p.shadow,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
        whiteSpace: 'nowrap',
      }}
      {...rest}
    >
      {iconLeft && <span style={{ display: 'flex' }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: 'flex' }}>{iconRight}</span>}
    </button>
  );
}
