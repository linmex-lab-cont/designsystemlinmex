import React from 'react';

/**
 * Headline metric — big Barlow Condensed figure over a caps label.
 * Used in hero strips and proof sections.
 */
export function Stat({ value, label, sublabel, align = 'left', tone = 'ink', size = 'md', ...rest }) {
  const color = tone === 'orange' ? 'var(--color-primary)' : tone === 'onDark' ? '#fff' : 'var(--color-ink)';
  const labelColor = tone === 'onDark' ? 'var(--text-on-dark-dim)' : 'var(--text-muted)';
  const figure = { sm: '36px', md: '52px', lg: '68px' }[size];

  return (
    <div style={{ textAlign: align, display: 'flex', flexDirection: 'column', gap: '4px' }} {...rest}>
      <span style={{
        font: `var(--fw-bold) ${figure}/0.95 var(--font-condensed)`,
        letterSpacing: '.01em', color,
      }}>{value}</span>
      <span style={{
        font: 'var(--fw-semibold) 12px/1.3 var(--font-condensed)',
        letterSpacing: '.14em', textTransform: 'uppercase', color: labelColor,
      }}>{label}</span>
      {sublabel && (
        <span style={{ font: 'var(--fw-regular) 13px/1.4 var(--font-body)', color: labelColor, textTransform: 'none', letterSpacing: 0 }}>{sublabel}</span>
      )}
    </div>
  );
}
