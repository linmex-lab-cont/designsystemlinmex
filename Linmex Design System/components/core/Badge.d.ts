import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Fill style. @default "soft" */
  variant?: 'solid' | 'soft' | 'outline';
  /** Colour family. @default "orange" */
  tone?: 'orange' | 'navy' | 'neutral' | 'success' | 'warning' | 'danger';
  /** Corner shape. @default "pill" */
  shape?: 'pill' | 'square';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Show a leading status dot. */
  dot?: boolean;
  children?: React.ReactNode;
}

/**
 * Compact category / status label in Barlow Condensed caps.
 */
export function Badge(props: BadgeProps): JSX.Element;
