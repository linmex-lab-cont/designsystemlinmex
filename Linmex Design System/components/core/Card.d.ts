import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Show a brand-orange accent edge on the left. */
  accent?: boolean;
  /** Lift + deepen shadow on hover. */
  interactive?: boolean;
  /** Inner padding. @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Element tag to render. @default "div" */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/** White surface container with hairline border and soft elevation. */
export function Card(props: CardProps): JSX.Element;
