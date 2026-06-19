import * as React from 'react';

export interface PropertyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Cover image URL. */
  image?: string;
  /** Development / unit name. */
  name: string;
  /** Location line (city / colonia). */
  location: string;
  /** Formatted price, e.g. "$2.4M MXN". */
  price: string;
  /** Small word before the price. @default "desde" */
  priceNote?: string;
  /** Status pill text, e.g. "Disponible". */
  status?: string;
  /** Status pill colour. @default "success" */
  statusTone?: 'orange' | 'navy' | 'neutral' | 'success' | 'warning' | 'danger';
  /** Spec chips, e.g. ["2 rec", "120 m²", "2 baños"]. */
  specs?: string[];
}

/**
 * Real-estate listing card composing Badge — image, status, name, location, specs, price.
 * @startingPoint section="Real estate" subtitle="Property / development listing card" viewport="380x420"
 */
export function PropertyCard(props: PropertyCardProps): JSX.Element;
