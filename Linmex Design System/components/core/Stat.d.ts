import * as React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The figure, e.g. "+18%" or "12". */
  value: React.ReactNode;
  /** Caps label under the figure. */
  label: string;
  /** Optional secondary line. */
  sublabel?: string;
  /** @default "left" */
  align?: 'left' | 'center';
  /** @default "ink" */
  tone?: 'ink' | 'orange' | 'onDark';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
}

/** Headline metric: big Barlow Condensed figure over a caps label. */
export function Stat(props: StatProps): JSX.Element;
