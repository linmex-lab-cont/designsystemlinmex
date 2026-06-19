/* @ds-bundle: {"format":3,"namespace":"LinmexDesignSystem_fdd2a9","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"PropertyCard","sourcePath":"components/realestate/PropertyCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"59bd1c135204","components/core/Button.jsx":"7ab547f4900b","components/core/Card.jsx":"5c30550dca0d","components/core/Input.jsx":"4f824108c7df","components/core/Stat.jsx":"37d0ca7a3fa1","components/realestate/PropertyCard.jsx":"dab033976d64","ui_kits/website/app.jsx":"d7f421a8c62b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LinmexDesignSystem_fdd2a9 = window.LinmexDesignSystem_fdd2a9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Compact status / category label. Pill or square, solid or soft.
 */
function Badge({
  children,
  variant = 'soft',
  tone = 'orange',
  shape = 'pill',
  size = 'md',
  dot = false,
  ...rest
}) {
  const tones = {
    orange: {
      solid: ['var(--orange-500)', '#fff'],
      soft: ['var(--orange-50)', 'var(--orange-700)'],
      dotc: 'var(--orange-500)'
    },
    navy: {
      solid: ['var(--navy-800)', '#fff'],
      soft: ['var(--info-wash)', 'var(--navy-700)'],
      dotc: 'var(--navy-700)'
    },
    neutral: {
      solid: ['var(--gray-600)', '#fff'],
      soft: ['var(--gray-100)', 'var(--gray-700)'],
      dotc: 'var(--gray-500)'
    },
    success: {
      solid: ['var(--success)', '#fff'],
      soft: ['var(--success-wash)', 'var(--success)'],
      dotc: 'var(--success)'
    },
    warning: {
      solid: ['var(--warning)', '#3a2900'],
      soft: ['var(--warning-wash)', '#8a5a00'],
      dotc: 'var(--warning)'
    },
    danger: {
      solid: ['var(--danger)', '#fff'],
      soft: ['var(--danger-wash)', 'var(--danger)'],
      dotc: 'var(--danger)'
    }
  };
  const t = tones[tone] || tones.orange;
  const [bg, color] = variant === 'solid' ? t.solid : t.soft;
  const isOutline = variant === 'outline';
  const pad = size === 'sm' ? '3px 9px' : '5px 12px';
  const fs = size === 'sm' ? '11px' : '12px';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: pad,
      font: `var(--fw-semibold) ${fs}/1 var(--font-condensed)`,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: isOutline ? 'var(--text-muted)' : color,
      background: isOutline ? 'transparent' : bg,
      border: isOutline ? '1px solid var(--border-strong)' : '1px solid transparent',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      whiteSpace: 'nowrap'
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: t.dotc,
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Linmex primary button. Confident, sharp-cornered, brand-orange by default.
 * Variants: primary (orange), secondary (navy), outline, ghost, onDark.
 */
function Button({
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
  const heights = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h)',
    lg: 'var(--control-h-lg)'
  };
  const pads = {
    sm: '0 16px',
    md: '0 22px',
    lg: '0 30px'
  };
  const fonts = {
    sm: '14px',
    md: '15px',
    lg: '16px'
  };
  const palettes = {
    primary: {
      bg: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: 'transparent',
      hover: 'var(--color-primary-hover)',
      active: 'var(--color-primary-active)',
      shadow: 'var(--shadow-orange)'
    },
    secondary: {
      bg: 'var(--navy-800)',
      color: '#fff',
      border: 'transparent',
      hover: 'var(--navy-700)',
      active: 'var(--navy-900)',
      shadow: 'var(--shadow-sm)'
    },
    outline: {
      bg: 'transparent',
      color: 'var(--color-ink)',
      border: 'var(--border-strong)',
      hover: 'var(--gray-50)',
      active: 'var(--gray-100)',
      shadow: 'none'
    },
    ghost: {
      bg: 'transparent',
      color: 'var(--color-primary)',
      border: 'transparent',
      hover: 'var(--orange-50)',
      active: 'var(--orange-100)',
      shadow: 'none'
    },
    onDark: {
      bg: '#fff',
      color: 'var(--navy-800)',
      border: 'transparent',
      hover: 'var(--gray-100)',
      active: 'var(--gray-200)',
      shadow: 'none'
    }
  };
  const p = palettes[variant] || palettes.primary;
  const [state, setState] = React.useState('rest');
  const bg = disabled ? 'var(--gray-200)' : state === 'active' ? p.active : state === 'hover' ? p.hover : p.bg;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('rest'),
    onMouseDown: () => setState('active'),
    onMouseUp: () => setState('hover'),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '9px',
      width: full ? '100%' : 'auto',
      height: heights[size],
      padding: pads[size],
      font: `var(--fw-bold) ${fonts[size]}/1 var(--font-heading)`,
      letterSpacing: '.01em',
      color: disabled ? 'var(--gray-400)' : p.color,
      background: bg,
      border: `1.5px solid ${p.border === 'transparent' ? bg : p.border}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: disabled || state !== 'rest' ? 'none' : p.shadow,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)',
      whiteSpace: 'nowrap'
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. White card with hairline border + soft shadow,
 * optional orange accent edge or an interactive hover lift.
 */
function Card({
  children,
  accent = false,
  interactive = false,
  padding = 'md',
  as = 'div',
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      padding: pads[padding],
      overflow: 'hidden',
      transform: interactive && hover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '4px',
      background: 'var(--color-primary)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text field with optional label, leading icon, hint and error state.
 * Focus shows the brand orange ring.
 */
function Input({
  label,
  hint,
  error,
  iconLeft,
  id,
  type = 'text',
  size = 'md',
  full = true,
  style = {},
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [focus, setFocus] = React.useState(false);
  const h = {
    sm: 'var(--control-h-sm)',
    md: 'var(--control-h)',
    lg: 'var(--control-h-lg)'
  }[size];
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--color-primary)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: full ? '100%' : 'auto',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      marginBottom: '6px',
      font: 'var(--fw-semibold) 13px/1 var(--font-heading)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      height: h,
      padding: '0 14px',
      background: 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus && !error ? 'var(--ring)' : 'none',
      transition: 'border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-subtle)',
      flex: '0 0 auto'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--fw-regular) 15px/1 var(--font-body)',
      color: 'var(--text-strong)'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: 'var(--fw-medium) 12px/1.4 var(--font-body)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Headline metric — big Barlow Condensed figure over a caps label.
 * Used in hero strips and proof sections.
 */
function Stat({
  value,
  label,
  sublabel,
  align = 'left',
  tone = 'ink',
  size = 'md',
  ...rest
}) {
  const color = tone === 'orange' ? 'var(--color-primary)' : tone === 'onDark' ? '#fff' : 'var(--color-ink)';
  const labelColor = tone === 'onDark' ? 'var(--text-on-dark-dim)' : 'var(--text-muted)';
  const figure = {
    sm: '36px',
    md: '52px',
    lg: '68px'
  }[size];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--fw-bold) ${figure}/0.95 var(--font-condensed)`,
      letterSpacing: '.01em',
      color
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 12px/1.3 var(--font-condensed)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) 13px/1.4 var(--font-body)',
      color: labelColor,
      textTransform: 'none',
      letterSpacing: 0
    }
  }, sublabel));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/realestate/PropertyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Real-estate listing card: image with status badge, name, location,
 * a row of specs and a price. Lifts on hover.
 */
function PropertyCard({
  image,
  name,
  location,
  price,
  priceNote = 'desde',
  status,
  statusTone = 'success',
  specs = [],
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur) var(--ease-out), transform var(--dur) var(--ease-out)',
      cursor: onClick ? 'pointer' : 'default',
      display: 'flex',
      flexDirection: 'column'
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      background: 'var(--gray-100)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), status && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '12px',
      left: '12px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: statusTone,
    variant: "solid",
    size: "sm"
  }, status))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 2px',
      font: 'var(--fw-bold) 19px/1.2 var(--font-heading)',
      color: 'var(--color-ink)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      font: 'var(--fw-medium) 13px/1.3 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })), location)), specs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
      marginTop: '2px'
    }
  }, specs.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: 'var(--fw-semibold) 12px/1 var(--font-condensed)',
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '10px',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'baseline',
      gap: '6px'
    }
  }, priceNote && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 12px/1 var(--font-condensed)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, priceNote), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-bold) 22px/1 var(--font-condensed)',
      color: 'var(--color-primary)'
    }
  }, price))));
}
Object.assign(__ds_scope, { PropertyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/realestate/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* Grupo Linmex — Website UI kit
   Composes the design-system primitives (Button, Badge, Card, Stat,
   PropertyCard) into a brand-faithful marketing site. */
const {
  Button,
  Badge,
  Card,
  Input,
  Stat,
  PropertyCard
} = window.LinmexDesignSystem_fdd2a9;
const {
  useState,
  useEffect,
  useRef
} = React;
const A = '../../assets';

/* ---- Lucide icon (innerHTML injection — no React/DOM conflict) ---- */
function Icon({
  name,
  size = 20,
  color,
  style
}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = `<i data-lucide="${name}"></i>`;
    window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      fontSize: size,
      color,
      lineHeight: 0,
      ...style
    }
  });
}

/* ---- Data ---------------------------------------------------------- */
const NAV = [['home', 'Inicio'], ['developments', 'Desarrollos'], ['nosotros', 'Nosotros'], ['contact', 'Contacto']];
const DEVS = [{
  id: 1,
  name: 'Residencial Palmar',
  location: 'Col. Campestre, Mérida',
  price: '$2.4M',
  status: 'Disponible',
  statusTone: 'success',
  img: `${A}/imagery/development-street.png`,
  type: 'Departamentos',
  specs: ['2–3 rec', '120–180 m²', 'Entrega 2026']
}, {
  id: 2,
  name: 'Parque Norte',
  location: 'Temozón Norte, Mérida',
  price: '$1.1M',
  status: 'Pre-venta',
  statusTone: 'orange',
  img: `${A}/imagery/family-orange-duotone.png`,
  type: 'Lotes',
  specs: ['Lotes', '250–400 m²', 'Amenidades']
}, {
  id: 3,
  name: 'Distrito Mérida',
  location: 'Montebello, Mérida',
  price: '$3.8M',
  status: 'Últimas unidades',
  statusTone: 'warning',
  img: `${A}/imagery/hero-symbol-family.png`,
  type: 'Departamentos',
  specs: ['1–2 rec', '78–135 m²', 'Roof garden']
}, {
  id: 4,
  name: 'Villas del Sur',
  location: 'Cholul, Mérida',
  price: '$2.9M',
  status: 'Disponible',
  statusTone: 'success',
  img: `${A}/imagery/development-street.png`,
  type: 'Casas',
  specs: ['3 rec', '210 m²', 'Privada']
}, {
  id: 5,
  name: 'Altozano Lotes',
  location: 'Altozano, Mérida',
  price: '$1.6M',
  status: 'Pre-venta',
  statusTone: 'orange',
  img: `${A}/imagery/family-dark-duotone.png`,
  type: 'Lotes',
  specs: ['Lotes', '300–600 m²', 'Club house']
}, {
  id: 6,
  name: 'Centro Histórico 47',
  location: 'Centro, Mérida',
  price: '$4.2M',
  status: 'Disponible',
  statusTone: 'success',
  img: `${A}/imagery/family-orange-duotone.png`,
  type: 'Departamentos',
  specs: ['2 rec', '140 m²', 'Restaurado']
}];
const PILLARS = [{
  icon: 'telescope',
  eyebrow: 'Eje A',
  title: 'Liderazgo visionario',
  body: 'Entendemos el mercado antes que los demás: inteligencia inmobiliaria y anticipación de tendencias.'
}, {
  icon: 'shield-check',
  eyebrow: 'Eje B',
  title: 'Guía confiable',
  body: 'Reducimos el riesgo con evidencia real, experiencia comprobada y proyectos cumplidos.'
}, {
  icon: 'handshake',
  eyebrow: 'Eje C',
  title: 'Partner clave',
  body: 'Acompañamiento útil en cada etapa: rentabilidad absoluta, soporte especializado y certeza legal.'
}, {
  icon: 'users',
  eyebrow: 'Eje D',
  title: 'Construcción de comunidad',
  body: 'Impulsamos el desarrollo de Yucatán y vinculamos la marca con su entorno territorial.'
}];

/* ---- Brand symbol (inline SVG, recolourable — exact official geometry) --- */
function Symbol({
  size = 28,
  color = 'var(--orange-500)',
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 1000 1000",
    style: style,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("polygon", {
    fill: color,
    points: "0,0 1000,0 746,333 0,333"
  }), /*#__PURE__*/React.createElement("polygon", {
    fill: color,
    points: "681,333 1000,333 1000,667 424,667"
  }), /*#__PURE__*/React.createElement("polygon", {
    fill: color,
    points: "0,668 484,668 201,1000 0,1000"
  }));
}
/* ---- Full lockup — the OFFICIAL logo asset (never reconstructed) --------
   variant 'color'    → orange symbol + navy wordmark (use on light surfaces)
   variant 'reversed' → orange symbol + white wordmark (use on dark navy) */
function Wordmark({
  variant = 'color',
  height = 30
}) {
  const src = variant === 'reversed' ? `${A}/logo/Linmex-Logo-Blanco.png` : `${A}/logo/Linmex-Logo-Principal-Full Color.png`;
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Linmex",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  });
}

/* ---- Eyebrow + heading helper -------------------------------------- */
function Lead({
  eyebrow,
  title,
  sub,
  center,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: center ? 'center' : 'left',
      maxWidth: center ? 720 : 640,
      margin: center ? '0 auto' : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: dark ? '#fff' : 'var(--color-ink)',
      margin: 0
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      font: '400 18px/1.6 var(--font-body)',
      color: dark ? 'var(--text-on-dark-dim)' : 'var(--text-muted)'
    }
  }, sub));
}

/* ==================================================================== */
/* Header                                                               */
/* ==================================================================== */
function Header({
  route,
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    height: 30
  })), /*#__PURE__*/React.createElement("nav", {
    className: "lk-nav",
    style: {
      display: 'flex',
      gap: 34
    }
  }, NAV.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    className: route === k ? 'active' : '',
    onClick: () => go(k)
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      font: 'var(--fw-bold) 15px/1 var(--font-condensed)',
      letterSpacing: '.04em',
      color: 'var(--color-ink)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    color: "var(--orange-500)"
  }), " 999 345 28 93"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('contact')
  }, "Agenda una cita"))));
}

/* ==================================================================== */
/* HOME                                                                 */
/* ==================================================================== */
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--navy-800)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5,
      background: 'repeating-linear-gradient(115deg, var(--navy-800) 0 90px, var(--navy-700) 90px 180px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center',
      padding: '88px var(--gutter) 96px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 18
    }
  }, "Desarrollo inmobiliario \xB7 Yucat\xE1n"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h1)',
      color: '#fff',
      margin: 0,
      letterSpacing: '-0.02em'
    }
  }, "Crece tu inversi\xF3n.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--orange-400)'
    }
  }, "Asegura tu patrimonio.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 22,
      maxWidth: 480,
      font: '400 19px/1.6 var(--font-body)',
      color: 'var(--text-on-dark)'
    }
  }, "Identificamos oportunidades, ejecutamos con excelencia y generamos valor real para inversionistas y comunidades en M\xE9rida."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('developments'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Ver desarrollos"), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => go('contact')
  }, "Habla con un asesor")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "+18%",
    label: "Plusval\xEDa anual",
    tone: "onDark",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "12",
    label: "Desarrollos",
    tone: "onDark",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1,500+",
    label: "Familias",
    tone: "onDark",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      aspectRatio: '4/5'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/imagery/development-street.png`,
    alt: "Desarrollo Linmex",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -28,
      bottom: 34,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      padding: '18px 22px',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      borderRadius: 'var(--radius-md)',
      background: 'var(--orange-50)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-up",
    size: 24,
    color: "var(--orange-500)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 22px/1 var(--font-condensed)',
      color: 'var(--color-ink)'
    }
  }, "100% escriturado"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) 12px/1.3 var(--font-condensed)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Certeza legal garantizada"))))));
}
function Pillars() {
  return /*#__PURE__*/React.createElement("section", {
    id: "nosotros",
    style: {
      background: 'var(--surface-card)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Lead, {
    eyebrow: "Por qu\xE9 Linmex",
    title: "Cuatro ejes, una sola certeza",
    sub: "Cada eje activa una dimensi\xF3n distinta de la marca. Juntos construyen una narrativa coherente para inversores, aliados y comunidades."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      marginTop: 48
    }
  }, PILLARS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    padding: "lg",
    interactive: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--orange-50)',
      display: 'grid',
      placeItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 26,
    color: "var(--orange-500)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 8
    }
  }, p.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--color-ink)',
      margin: '0 0 10px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 14.5px/1.6 var(--font-body)',
      color: 'var(--text-body)'
    }
  }, p.body))))));
}
function StatStrip() {
  const items = [['12', 'Desarrollos'], ['+18%', 'Plusvalía anual'], ['1,500+', 'Familias'], ['100%', 'Escriturado']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24,
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '40px 0'
    }
  }, items.map(([v, l]) => /*#__PURE__*/React.createElement(Stat, {
    key: l,
    value: v,
    label: l,
    align: "center"
  }))));
}
function FeaturedDevs({
  go,
  openDev
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Lead, {
    eyebrow: "Desarrollos",
    title: "Proyectos destacados"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('developments'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginTop: 40
    }
  }, DEVS.slice(0, 3).map(d => /*#__PURE__*/React.createElement(PropertyCard, {
    key: d.id,
    image: d.img,
    name: d.name,
    location: d.location,
    price: d.price,
    status: d.status,
    statusTone: d.statusTone,
    specs: d.specs,
    onClick: () => openDev(d)
  })))));
}
function CtaBand({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--orange-500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.5,
      background: 'repeating-linear-gradient(115deg, var(--orange-500) 0 80px, var(--orange-600) 80px 160px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 40,
      padding: '64px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: '#fff',
      margin: 0
    }
  }, "\xBFListo para invertir con certeza?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      font: '500 18px/1.5 var(--font-body)',
      color: 'rgba(255,255,255,.9)'
    }
  }, "Agenda una cita con un asesor y conoce el desarrollo ideal para tu patrimonio.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => go('contact')
  }, "Agenda una cita"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 18
    })
  }, "WhatsApp"))));
}
function Footer({
  go
}) {
  const col = (title, links) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 12px/1 var(--font-condensed)',
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--orange-400)',
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      font: '400 14px/1 var(--font-body)',
      color: 'var(--text-on-dark-dim)',
      cursor: 'pointer'
    }
  }, l))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: '#fff',
      padding: '72px 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "reversed",
    height: 32
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      maxWidth: 280,
      font: '400 14px/1.6 var(--font-body)',
      color: 'var(--text-on-dark-dim)'
    }
  }, "Desarrollo inmobiliario integral & sustentable. Una comunidad de l\xEDderes inmobiliarios en M\xE9rida, Yucat\xE1n.")), col('Desarrollos', ['Departamentos', 'Lotes', 'Casas', 'Pre-venta']), col('Empresa', ['Nosotros', 'Inteligencia inmobiliaria', 'Responsabilidad social', 'Aliados']), col('Contacto', ['999 345 28 93', 'grupolinmex.com.mx', 'Col. Campestre, Mérida', '@linmex'])), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 56,
      paddingTop: 24,
      borderTop: '1px solid var(--border-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      font: '400 13px/1 var(--font-body)',
      color: 'var(--text-on-dark-dim)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Grupo Linmex. Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", null, "Aviso de privacidad \xB7 T\xE9rminos"))));
}
function Home({
  go,
  openDev
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(StatStrip, null), /*#__PURE__*/React.createElement(FeaturedDevs, {
    go: go,
    openDev: openDev
  }), /*#__PURE__*/React.createElement(Pillars, null), /*#__PURE__*/React.createElement(CtaBand, {
    go: go
  }));
}

/* ==================================================================== */
/* DEVELOPMENTS                                                         */
/* ==================================================================== */
function Developments({
  openDev
}) {
  const [filter, setFilter] = useState('Todos');
  const tabs = ['Todos', 'Departamentos', 'Lotes', 'Casas'];
  const list = filter === 'Todos' ? DEVS : DEVS.filter(d => d.type === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-800)',
      padding: '64px 0 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Desarrollos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h1)',
      color: '#fff',
      margin: 0,
      maxWidth: 720
    }
  }, "Encuentra el desarrollo ideal para tu inversi\xF3n"))), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      padding: '40px var(--gutter) 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      marginBottom: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setFilter(t),
    style: {
      cursor: 'pointer',
      padding: '9px 18px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--fw-semibold) 13px/1 var(--font-condensed)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      border: '1.5px solid ' + (filter === t ? 'var(--orange-500)' : 'var(--border-strong)'),
      background: filter === t ? 'var(--orange-500)' : 'transparent',
      color: filter === t ? '#fff' : 'var(--text-muted)',
      transition: 'all var(--dur)'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar por zona\u2026",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    })
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, list.map(d => /*#__PURE__*/React.createElement(PropertyCard, {
    key: d.id,
    image: d.img,
    name: d.name,
    location: d.location,
    price: d.price,
    status: d.status,
    statusTone: d.statusTone,
    specs: d.specs,
    onClick: () => openDev(d)
  })))));
}

/* ==================================================================== */
/* DETAIL                                                               */
/* ==================================================================== */
function Detail({
  dev,
  go
}) {
  const d = dev || DEVS[0];
  const amenities = [['waves', 'Alberca'], ['dumbbell', 'Gimnasio'], ['trees', 'Áreas verdes'], ['shield', 'Seguridad 24/7'], ['car', 'Estacionamiento'], ['utensils', 'Casa club']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      paddingBottom: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      padding: '28px var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('developments'),
    style: {
      cursor: 'pointer',
      background: 'none',
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--fw-semibold) 14px/1 var(--font-heading)',
      color: 'var(--text-muted)',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Volver a desarrollos")), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 12,
      height: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: d.img,
    alt: d.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/imagery/family-orange-duotone.png`,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/imagery/family-dark-duotone.png`,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 48,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: d.statusTone,
    variant: "solid"
  }, d.status), /*#__PURE__*/React.createElement(Badge, {
    tone: "navy",
    variant: "soft",
    shape: "square"
  }, d.type)), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h1)',
      color: 'var(--color-ink)',
      margin: '0 0 8px'
    }
  }, d.name), /*#__PURE__*/React.createElement("p", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      font: '500 16px/1 var(--font-body)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--orange-500)"
  }), " ", d.location), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '1px solid var(--border)',
      margin: '28px 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 16px/1.7 var(--font-body)',
      color: 'var(--text-body)',
      maxWidth: 560
    }
  }, "Un desarrollo pensado para crecer tu patrimonio con certeza. Arquitectura contempor\xE1nea, amenidades de primer nivel y la plusval\xEDa que solo Linmex garantiza, en una de las zonas de mayor crecimiento de M\xE9rida."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      margin: '28px 0'
    }
  }, d.specs.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 24px/1 var(--font-condensed)',
      color: 'var(--color-ink)'
    }
  }, s.split(' ')[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) 12px/1.3 var(--font-condensed)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, s.split(' ').slice(1).join(' ') || 'Disponible')))), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--color-ink)',
      margin: '32px 0 18px'
    }
  }, "Amenidades"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, amenities.map(([ic, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '14px 16px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: "var(--orange-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 14px/1 var(--font-heading)',
      color: 'var(--text-strong)'
    }
  }, label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card, {
    padding: "lg",
    style: {
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) 12px/1 var(--font-condensed)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)'
    }
  }, "Precio desde"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 40px/1 var(--font-condensed)',
      color: 'var(--color-primary)',
      margin: '6px 0 4px'
    }
  }, d.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) 16px/1 var(--font-condensed)',
      color: 'var(--text-muted)'
    }
  }, "MXN")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.4 var(--font-body)',
      color: 'var(--text-muted)',
      marginBottom: 22
    }
  }, "Planes de financiamiento disponibles. Apartado desde $20,000."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tu nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    placeholder: "999 000 0000",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    size: "lg"
  }, "Solicitar informaci\xF3n"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    full: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 16
    })
  }, "Descargar brochure"))))));
}

/* ==================================================================== */
/* CONTACT                                                              */
/* ==================================================================== */
function Contact() {
  const [sent, setSent] = useState(false);
  const info = [['phone', 'Teléfono', '(+52) 999 345 28 93'], ['mail', 'Correo', 'gerenza@grupolinmex.com.mx'], ['map-pin', 'Oficinas', 'Calle 9 por 40 y 42 #279 H, Col. Campestre, C.P. 97120, Mérida, Yucatán'], ['clock', 'Horario', 'Lun–Vie 9:00–18:00 · Sáb 9:00–14:00']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-800)',
      padding: '64px 0 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h1)',
      color: '#fff',
      margin: 0,
      maxWidth: 680
    }
  }, "Hablemos de tu pr\xF3xima inversi\xF3n"))), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 56,
      padding: '64px var(--gutter) 96px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Lead, {
    eyebrow: "Estamos para ayudarte",
    title: "Un asesor te acompa\xF1a en cada etapa"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      marginTop: 34
    }
  }, info.map(([ic, label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 46,
      height: 46,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-md)',
      background: 'var(--orange-50)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--orange-500)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 12px/1 var(--font-condensed)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-subtle)',
      marginBottom: 5
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 15px/1.5 var(--font-body)',
      color: 'var(--text-strong)',
      maxWidth: 320
    }
  }, val)))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'var(--success-wash)',
      display: 'inline-grid',
      placeItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 32,
    color: "var(--success)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--color-ink)',
      margin: '0 0 8px'
    }
  }, "\xA1Gracias!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Un asesor te contactar\xE1 en breve.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--color-ink)',
      margin: 0
    }
  }, "Solicita informaci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tu nombre"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    placeholder: "999 000 0000"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Correo electr\xF3nico",
    type: "email",
    placeholder: "tu@correo.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 15
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Desarrollo de inter\xE9s",
    placeholder: "Residencial Palmar"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true,
    onClick: () => setSent(true)
  }, "Enviar solicitud"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 12px/1.5 var(--font-body)',
      color: 'var(--text-subtle)',
      margin: 0,
      textAlign: 'center'
    }
  }, "Al enviar aceptas nuestro aviso de privacidad.")))));
}

/* ==================================================================== */
/* App router                                                           */
/* ==================================================================== */
function App() {
  const [route, setRoute] = useState('home');
  const [dev, setDev] = useState(null);
  const go = r => {
    setRoute(r);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  const openDev = d => {
    setDev(d);
    go('detail');
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    route: route === 'detail' ? 'developments' : route,
    go: go
  }), route === 'home' && /*#__PURE__*/React.createElement(Home, {
    go: go,
    openDev: openDev
  }), route === 'developments' && /*#__PURE__*/React.createElement(Developments, {
    openDev: openDev
  }), route === 'nosotros' && /*#__PURE__*/React.createElement(Home, {
    go: go,
    openDev: openDev
  }), route === 'detail' && /*#__PURE__*/React.createElement(Detail, {
    dev: dev,
    go: go
  }), route === 'contact' && /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, {
    go: go
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

})();
