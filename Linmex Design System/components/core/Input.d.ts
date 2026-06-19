import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label above the control. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message; turns the field red and replaces the hint. */
  error?: string;
  /** Leading icon node. */
  iconLeft?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Fill container width. @default true */
  full?: boolean;
}

/** Text input with label, hint, error and brand-orange focus ring. */
export function Input(props: InputProps): JSX.Element;
