import React from 'react';

/**
 * Compact status / category label. Pill or square, solid or soft.
 */
export function Badge({ children, variant = 'soft', tone = 'orange', shape = 'pill', size = 'md', dot = false, ...rest }) {
  const tones = {
    orange:  { solid: ['var(--orange-500)', '#fff'], soft: ['var(--orange-50)', 'var(--orange-700)'], dotc: 'var(--orange-500)' },
    navy:    { solid: ['var(--navy-800)', '#fff'],   soft: ['var(--info-wash)', 'var(--navy-700)'],     dotc: 'var(--navy-700)' },
    neutral: { solid: ['var(--gray-600)', '#fff'],   soft: ['var(--gray-100)', 'var(--gray-700)'],      dotc: 'var(--gray-500)' },
    success: { solid: ['var(--success)', '#fff'],    soft: ['var(--success-wash)', 'var(--success)'],   dotc: 'var(--success)' },
    warning: { solid: ['var(--warning)', '#3a2900'], soft: ['var(--warning-wash)', '#8a5a00'],          dotc: 'var(--warning)' },
    danger:  { solid: ['var(--danger)', '#fff'],     soft: ['var(--danger-wash)', 'var(--danger)'],     dotc: 'var(--danger)' },
  };
  const t = tones[tone] || tones.orange;
  const [bg, color] = variant === 'solid' ? t.solid : t.soft;
  const isOutline = variant === 'outline';
  const pad = size === 'sm' ? '3px 9px' : '5px 12px';
  const fs = size === 'sm' ? '11px' : '12px';

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      padding: pad,
      font: `var(--fw-semibold) ${fs}/1 var(--font-condensed)`,
      letterSpacing: '.08em', textTransform: 'uppercase',
      color: isOutline ? 'var(--text-muted)' : color,
      background: isOutline ? 'transparent' : bg,
      border: isOutline ? '1px solid var(--border-strong)' : '1px solid transparent',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      whiteSpace: 'nowrap',
    }} {...rest}>
      {dot && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: t.dotc, flex: '0 0 auto' }} />}
      {children}
    </span>
  );
}
