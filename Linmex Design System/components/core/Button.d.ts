import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'onDark';
  /** Control height. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to fill the container width. */
  full?: boolean;
  children?: React.ReactNode;
}

/**
 * Linmex action button — sharp corners, brand orange, Cairo bold label.
 * @startingPoint section="Core" subtitle="Brand buttons in every variant & size" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
