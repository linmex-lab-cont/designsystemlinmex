/* Grupo Linmex — Website UI kit
   Composes the design-system primitives (Button, Badge, Card, Stat,
   PropertyCard) into a brand-faithful marketing site. */
const { Button, Badge, Card, Input, Stat, PropertyCard } = window.LinmexDesignSystem_fdd2a9;
const { useState, useEffect, useRef } = React;
const A = '../../assets';

/* ---- Lucide icon (innerHTML injection — no React/DOM conflict) ---- */
function Icon({ name, size = 20, color, style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el || !window.lucide) return;
    el.innerHTML = `<i data-lucide="${name}"></i>`;
    window.lucide.createIcons();
  });
  return <span ref={ref} style={{ display: 'inline-flex', fontSize: size, color, lineHeight: 0, ...style }} />;
}

/* ---- Data ---------------------------------------------------------- */
const NAV = [['home', 'Inicio'], ['developments', 'Desarrollos'], ['nosotros', 'Nosotros'], ['contact', 'Contacto']];

const DEVS = [
  { id: 1, name: 'Residencial Palmar', location: 'Col. Campestre, Mérida', price: '$2.4M', status: 'Disponible', statusTone: 'success',
    img: `${A}/imagery/development-street.png`, type: 'Departamentos', specs: ['2–3 rec', '120–180 m²', 'Entrega 2026'] },
  { id: 2, name: 'Parque Norte', location: 'Temozón Norte, Mérida', price: '$1.1M', status: 'Pre-venta', statusTone: 'orange',
    img: `${A}/imagery/family-orange-duotone.png`, type: 'Lotes', specs: ['Lotes', '250–400 m²', 'Amenidades'] },
  { id: 3, name: 'Distrito Mérida', location: 'Montebello, Mérida', price: '$3.8M', status: 'Últimas unidades', statusTone: 'warning',
    img: `${A}/imagery/hero-symbol-family.png`, type: 'Departamentos', specs: ['1–2 rec', '78–135 m²', 'Roof garden'] },
  { id: 4, name: 'Villas del Sur', location: 'Cholul, Mérida', price: '$2.9M', status: 'Disponible', statusTone: 'success',
    img: `${A}/imagery/development-street.png`, type: 'Casas', specs: ['3 rec', '210 m²', 'Privada'] },
  { id: 5, name: 'Altozano Lotes', location: 'Altozano, Mérida', price: '$1.6M', status: 'Pre-venta', statusTone: 'orange',
    img: `${A}/imagery/family-dark-duotone.png`, type: 'Lotes', specs: ['Lotes', '300–600 m²', 'Club house'] },
  { id: 6, name: 'Centro Histórico 47', location: 'Centro, Mérida', price: '$4.2M', status: 'Disponible', statusTone: 'success',
    img: `${A}/imagery/family-orange-duotone.png`, type: 'Departamentos', specs: ['2 rec', '140 m²', 'Restaurado'] },
];

const PILLARS = [
  { icon: 'telescope', eyebrow: 'Eje A', title: 'Liderazgo visionario', body: 'Entendemos el mercado antes que los demás: inteligencia inmobiliaria y anticipación de tendencias.' },
  { icon: 'shield-check', eyebrow: 'Eje B', title: 'Guía confiable', body: 'Reducimos el riesgo con evidencia real, experiencia comprobada y proyectos cumplidos.' },
  { icon: 'handshake', eyebrow: 'Eje C', title: 'Partner clave', body: 'Acompañamiento útil en cada etapa: rentabilidad absoluta, soporte especializado y certeza legal.' },
  { icon: 'users', eyebrow: 'Eje D', title: 'Construcción de comunidad', body: 'Impulsamos el desarrollo de Yucatán y vinculamos la marca con su entorno territorial.' },
];

/* ---- Brand symbol (inline SVG, recolourable — exact official geometry) --- */
function Symbol({ size = 28, color = 'var(--orange-500)', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 1000 1000" style={style} aria-hidden="true">
      <polygon fill={color} points="0,0 1000,0 746,333 0,333" />
      <polygon fill={color} points="681,333 1000,333 1000,667 424,667" />
      <polygon fill={color} points="0,668 484,668 201,1000 0,1000" />
    </svg>
  );
}
/* ---- Full lockup — the OFFICIAL logo asset (never reconstructed) --------
   variant 'color'    → orange symbol + navy wordmark (use on light surfaces)
   variant 'reversed' → orange symbol + white wordmark (use on dark navy) */
function Wordmark({ variant = 'color', height = 30 }) {
  const src = variant === 'reversed'
    ? `${A}/logo/Linmex-Logo-Blanco.png`
    : `${A}/logo/Linmex-Logo-Principal-Full Color.png`;
  return <img src={src} alt="Linmex" style={{ height, width: 'auto', display: 'block' }} />;
}

/* ---- Eyebrow + heading helper -------------------------------------- */
function Lead({ eyebrow, title, sub, center, dark }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', maxWidth: center ? 720 : 640, margin: center ? '0 auto' : 0 }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>{eyebrow}</div>
      <h2 style={{ font: 'var(--text-h2)', color: dark ? '#fff' : 'var(--color-ink)', margin: 0 }}>{title}</h2>
      {sub && <p style={{ marginTop: 14, font: '400 18px/1.6 var(--font-body)', color: dark ? 'var(--text-on-dark-dim)' : 'var(--text-muted)' }}>{sub}</p>}
    </div>
  );
}

/* ==================================================================== */
/* Header                                                               */
/* ==================================================================== */
function Header({ route, go }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a onClick={() => go('home')} style={{ cursor: 'pointer', display: 'inline-flex' }}><Wordmark height={30} /></a>
        <nav className="lk-nav" style={{ display: 'flex', gap: 34 }}>
          {NAV.map(([k, label]) => (
            <a key={k} className={route === k ? 'active' : ''} onClick={() => go(k)}>{label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 7, font: 'var(--fw-bold) 15px/1 var(--font-condensed)', letterSpacing: '.04em', color: 'var(--color-ink)' }}>
            <Icon name="phone" size={15} color="var(--orange-500)" /> 999 345 28 93
          </span>
          <Button variant="primary" onClick={() => go('contact')}>Agenda una cita</Button>
        </div>
      </div>
    </header>
  );
}

/* ==================================================================== */
/* HOME                                                                 */
/* ==================================================================== */
function Hero({ go }) {
  return (
    <section style={{ position: 'relative', background: 'var(--navy-800)', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.5,
        background: 'repeating-linear-gradient(115deg, var(--navy-800) 0 90px, var(--navy-700) 90px 180px)' }} />
      <div className="container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 56, alignItems: 'center', padding: '88px var(--gutter) 96px' }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Desarrollo inmobiliario · Yucatán</div>
          <h1 style={{ font: 'var(--text-h1)', color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
            Crece tu inversión.<br /><span style={{ color: 'var(--orange-400)' }}>Asegura tu patrimonio.</span>
          </h1>
          <p style={{ marginTop: 22, maxWidth: 480, font: '400 19px/1.6 var(--font-body)', color: 'var(--text-on-dark)' }}>
            Identificamos oportunidades, ejecutamos con excelencia y generamos valor real para inversionistas y comunidades en Mérida.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 32 }}>
            <Button variant="primary" size="lg" onClick={() => go('developments')} iconRight={<Icon name="arrow-right" size={18} />}>Ver desarrollos</Button>
            <Button variant="onDark" size="lg" onClick={() => go('contact')}>Habla con un asesor</Button>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 48 }}>
            <Stat value="+18%" label="Plusvalía anual" tone="onDark" size="sm" />
            <Stat value="12" label="Desarrollos" tone="onDark" size="sm" />
            <Stat value="1,500+" label="Familias" tone="onDark" size="sm" />
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', aspectRatio: '4/5' }}>
            <img src={`${A}/imagery/development-street.png`} alt="Desarrollo Linmex" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'absolute', left: -28, bottom: 34, background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--orange-50)', display: 'grid', placeItems: 'center' }}>
              <Icon name="trending-up" size={24} color="var(--orange-500)" />
            </span>
            <div>
              <div style={{ font: 'var(--fw-bold) 22px/1 var(--font-condensed)', color: 'var(--color-ink)' }}>100% escriturado</div>
              <div style={{ font: 'var(--fw-medium) 12px/1.3 var(--font-condensed)', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Certeza legal garantizada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section id="nosotros" style={{ background: 'var(--surface-card)', padding: '96px 0' }}>
      <div className="container">
        <Lead eyebrow="Por qué Linmex" title="Cuatro ejes, una sola certeza" sub="Cada eje activa una dimensión distinta de la marca. Juntos construyen una narrativa coherente para inversores, aliados y comunidades." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 48 }}>
          {PILLARS.map((p) => (
            <Card key={p.title} padding="lg" interactive>
              <span style={{ width: 52, height: 52, borderRadius: 'var(--radius-md)', background: 'var(--orange-50)', display: 'grid', placeItems: 'center', marginBottom: 18 }}>
                <Icon name={p.icon} size={26} color="var(--orange-500)" />
              </span>
              <div className="eyebrow" style={{ marginBottom: 8 }}>{p.eyebrow}</div>
              <h3 style={{ font: 'var(--text-h4)', color: 'var(--color-ink)', margin: '0 0 10px' }}>{p.title}</h3>
              <p style={{ margin: 0, font: '400 14.5px/1.6 var(--font-body)', color: 'var(--text-body)' }}>{p.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatStrip() {
  const items = [['12', 'Desarrollos'], ['+18%', 'Plusvalía anual'], ['1,500+', 'Familias'], ['100%', 'Escriturado']];
  return (
    <section style={{ background: 'var(--surface-page)', padding: '40px 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '40px 0' }}>
        {items.map(([v, l]) => <Stat key={l} value={v} label={l} align="center" />)}
      </div>
    </section>
  );
}

function FeaturedDevs({ go, openDev }) {
  return (
    <section style={{ background: 'var(--surface-page)', padding: '88px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24 }}>
          <Lead eyebrow="Desarrollos" title="Proyectos destacados" />
          <Button variant="outline" onClick={() => go('developments')} iconRight={<Icon name="arrow-right" size={16} />}>Ver todos</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 40 }}>
          {DEVS.slice(0, 3).map((d) => (
            <PropertyCard key={d.id} image={d.img} name={d.name} location={d.location} price={d.price}
              status={d.status} statusTone={d.statusTone} specs={d.specs} onClick={() => openDev(d)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ go }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--orange-500)' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.5,
        background: 'repeating-linear-gradient(115deg, var(--orange-500) 0 80px, var(--orange-600) 80px 160px)' }} />
      <div className="container" style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, padding: '64px var(--gutter)' }}>
        <div>
          <h2 style={{ font: 'var(--text-h2)', color: '#fff', margin: 0 }}>¿Listo para invertir con certeza?</h2>
          <p style={{ marginTop: 12, font: '500 18px/1.5 var(--font-body)', color: 'rgba(255,255,255,.9)' }}>
            Agenda una cita con un asesor y conoce el desarrollo ideal para tu patrimonio.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 14, flex: '0 0 auto' }}>
          <Button variant="onDark" size="lg" onClick={() => go('contact')}>Agenda una cita</Button>
          <Button variant="secondary" size="lg" iconLeft={<Icon name="message-circle" size={18} />}>WhatsApp</Button>
        </div>
      </div>
    </section>
  );
}

function Footer({ go }) {
  const col = (title, links) => (
    <div>
      <div style={{ font: 'var(--fw-semibold) 12px/1 var(--font-condensed)', letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--orange-400)', marginBottom: 16 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
        {links.map((l) => <a key={l} style={{ font: '400 14px/1 var(--font-body)', color: 'var(--text-on-dark-dim)', cursor: 'pointer' }}>{l}</a>)}
      </div>
    </div>
  );
  return (
    <footer style={{ background: 'var(--navy-900)', color: '#fff', padding: '72px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <Wordmark variant="reversed" height={32} />
            <p style={{ marginTop: 18, maxWidth: 280, font: '400 14px/1.6 var(--font-body)', color: 'var(--text-on-dark-dim)' }}>
              Desarrollo inmobiliario integral &amp; sustentable. Una comunidad de líderes inmobiliarios en Mérida, Yucatán.
            </p>
          </div>
          {col('Desarrollos', ['Departamentos', 'Lotes', 'Casas', 'Pre-venta'])}
          {col('Empresa', ['Nosotros', 'Inteligencia inmobiliaria', 'Responsabilidad social', 'Aliados'])}
          {col('Contacto', ['999 345 28 93', 'grupolinmex.com.mx', 'Col. Campestre, Mérida', '@linmex'])}
        </div>
        <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid var(--border-dark)', display: 'flex', justifyContent: 'space-between', font: '400 13px/1 var(--font-body)', color: 'var(--text-on-dark-dim)' }}>
          <span>© 2026 Grupo Linmex. Todos los derechos reservados.</span>
          <span>Aviso de privacidad · Términos</span>
        </div>
      </div>
    </footer>
  );
}

function Home({ go, openDev }) {
  return (<>
    <Hero go={go} />
    <StatStrip />
    <FeaturedDevs go={go} openDev={openDev} />
    <Pillars />
    <CtaBand go={go} />
  </>);
}

/* ==================================================================== */
/* DEVELOPMENTS                                                         */
/* ==================================================================== */
function Developments({ openDev }) {
  const [filter, setFilter] = useState('Todos');
  const tabs = ['Todos', 'Departamentos', 'Lotes', 'Casas'];
  const list = filter === 'Todos' ? DEVS : DEVS.filter((d) => d.type === filter);
  return (
    <section style={{ background: 'var(--surface-page)' }}>
      <div style={{ background: 'var(--navy-800)', padding: '64px 0 72px' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 12 }}>Desarrollos</div>
          <h1 style={{ font: 'var(--text-h1)', color: '#fff', margin: 0, maxWidth: 720 }}>Encuentra el desarrollo ideal para tu inversión</h1>
        </div>
      </div>
      <div className="container" style={{ padding: '40px var(--gutter) 96px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, marginBottom: 32, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 10 }}>
            {tabs.map((t) => (
              <button key={t} onClick={() => setFilter(t)} style={{
                cursor: 'pointer', padding: '9px 18px', borderRadius: 'var(--radius-pill)',
                font: 'var(--fw-semibold) 13px/1 var(--font-condensed)', letterSpacing: '.08em', textTransform: 'uppercase',
                border: '1.5px solid ' + (filter === t ? 'var(--orange-500)' : 'var(--border-strong)'),
                background: filter === t ? 'var(--orange-500)' : 'transparent', color: filter === t ? '#fff' : 'var(--text-muted)',
                transition: 'all var(--dur)' }}>{t}</button>
            ))}
          </div>
          <div style={{ width: 280 }}>
            <Input placeholder="Buscar por zona…" iconLeft={<Icon name="search" size={16} />} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {list.map((d) => (
            <PropertyCard key={d.id} image={d.img} name={d.name} location={d.location} price={d.price}
              status={d.status} statusTone={d.statusTone} specs={d.specs} onClick={() => openDev(d)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================================================================== */
/* DETAIL                                                               */
/* ==================================================================== */
function Detail({ dev, go }) {
  const d = dev || DEVS[0];
  const amenities = [['waves', 'Alberca'], ['dumbbell', 'Gimnasio'], ['trees', 'Áreas verdes'], ['shield', 'Seguridad 24/7'], ['car', 'Estacionamiento'], ['utensils', 'Casa club']];
  return (
    <section style={{ background: 'var(--surface-page)', paddingBottom: 96 }}>
      <div className="container" style={{ padding: '28px var(--gutter) 0' }}>
        <button onClick={() => go('developments')} style={{ cursor: 'pointer', background: 'none', border: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, font: 'var(--fw-semibold) 14px/1 var(--font-heading)', color: 'var(--text-muted)', padding: '8px 0' }}>
          <Icon name="arrow-left" size={16} /> Volver a desarrollos
        </button>
      </div>
      <div className="container" style={{ paddingTop: 12 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12, height: 440 }}>
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <img src={d.img} alt={d.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 12 }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}><img src={`${A}/imagery/family-orange-duotone.png`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}><img src={`${A}/imagery/family-dark-duotone.png`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          </div>
        </div>
      </div>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 48, marginTop: 40 }}>
        <div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
            <Badge tone={d.statusTone} variant="solid">{d.status}</Badge>
            <Badge tone="navy" variant="soft" shape="square">{d.type}</Badge>
          </div>
          <h1 style={{ font: 'var(--text-h1)', color: 'var(--color-ink)', margin: '0 0 8px' }}>{d.name}</h1>
          <p style={{ display: 'flex', alignItems: 'center', gap: 7, font: '500 16px/1 var(--font-body)', color: 'var(--text-muted)', margin: 0 }}>
            <Icon name="map-pin" size={16} color="var(--orange-500)" /> {d.location}
          </p>
          <hr style={{ border: 0, borderTop: '1px solid var(--border)', margin: '28px 0' }} />
          <p style={{ font: '400 16px/1.7 var(--font-body)', color: 'var(--text-body)', maxWidth: 560 }}>
            Un desarrollo pensado para crecer tu patrimonio con certeza. Arquitectura contemporánea, amenidades de primer nivel y la plusvalía que solo Linmex garantiza, en una de las zonas de mayor crecimiento de Mérida.
          </p>
          <div style={{ display: 'flex', gap: 36, margin: '28px 0' }}>
            {d.specs.map((s, i) => (
              <div key={i}>
                <div style={{ font: 'var(--fw-bold) 24px/1 var(--font-condensed)', color: 'var(--color-ink)' }}>{s.split(' ')[0]}</div>
                <div style={{ font: 'var(--fw-medium) 12px/1.3 var(--font-condensed)', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 4 }}>{s.split(' ').slice(1).join(' ') || 'Disponible'}</div>
              </div>
            ))}
          </div>
          <h3 style={{ font: 'var(--text-h4)', color: 'var(--color-ink)', margin: '32px 0 18px' }}>Amenidades</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
            {amenities.map(([ic, label]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '14px 16px', background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)' }}>
                <Icon name={ic} size={20} color="var(--orange-500)" />
                <span style={{ font: 'var(--fw-semibold) 14px/1 var(--font-heading)', color: 'var(--text-strong)' }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Card padding="lg" style={{ position: 'sticky', top: 96 }}>
            <div style={{ font: 'var(--fw-medium) 12px/1 var(--font-condensed)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>Precio desde</div>
            <div style={{ font: 'var(--fw-bold) 40px/1 var(--font-condensed)', color: 'var(--color-primary)', margin: '6px 0 4px' }}>{d.price} <span style={{ font: 'var(--fw-semibold) 16px/1 var(--font-condensed)', color: 'var(--text-muted)' }}>MXN</span></div>
            <div style={{ font: '400 13px/1.4 var(--font-body)', color: 'var(--text-muted)', marginBottom: 22 }}>Planes de financiamiento disponibles. Apartado desde $20,000.</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Input label="Nombre" placeholder="Tu nombre" />
              <Input label="Teléfono" placeholder="999 000 0000" iconLeft={<Icon name="phone" size={15} />} />
              <Button variant="primary" full size="lg">Solicitar información</Button>
              <Button variant="outline" full iconLeft={<Icon name="download" size={16} />}>Descargar brochure</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ==================================================================== */
/* CONTACT                                                              */
/* ==================================================================== */
function Contact() {
  const [sent, setSent] = useState(false);
  const info = [['phone', 'Teléfono', '(+52) 999 345 28 93'], ['mail', 'Correo', 'gerenza@grupolinmex.com.mx'], ['map-pin', 'Oficinas', 'Calle 9 por 40 y 42 #279 H, Col. Campestre, C.P. 97120, Mérida, Yucatán'], ['clock', 'Horario', 'Lun–Vie 9:00–18:00 · Sáb 9:00–14:00']];
  return (
    <section style={{ background: 'var(--surface-page)' }}>
      <div style={{ background: 'var(--navy-800)', padding: '64px 0 72px' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 12 }}>Contacto</div>
          <h1 style={{ font: 'var(--text-h1)', color: '#fff', margin: 0, maxWidth: 680 }}>Hablemos de tu próxima inversión</h1>
        </div>
      </div>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, padding: '64px var(--gutter) 96px' }}>
        <div>
          <Lead eyebrow="Estamos para ayudarte" title="Un asesor te acompaña en cada etapa" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 34 }}>
            {info.map(([ic, label, val]) => (
              <div key={label} style={{ display: 'flex', gap: 16 }}>
                <span style={{ width: 46, height: 46, flex: '0 0 auto', borderRadius: 'var(--radius-md)', background: 'var(--orange-50)', display: 'grid', placeItems: 'center' }}>
                  <Icon name={ic} size={22} color="var(--orange-500)" />
                </span>
                <div>
                  <div style={{ font: 'var(--fw-semibold) 12px/1 var(--font-condensed)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: 5 }}>{label}</div>
                  <div style={{ font: '500 15px/1.5 var(--font-body)', color: 'var(--text-strong)', maxWidth: 320 }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Card padding="lg">
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <span style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--success-wash)', display: 'inline-grid', placeItems: 'center', marginBottom: 18 }}>
                <Icon name="check" size={32} color="var(--success)" />
              </span>
              <h3 style={{ font: 'var(--text-h3)', color: 'var(--color-ink)', margin: '0 0 8px' }}>¡Gracias!</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>Un asesor te contactará en breve.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ font: 'var(--text-h4)', color: 'var(--color-ink)', margin: 0 }}>Solicita información</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <Input label="Nombre" placeholder="Tu nombre" />
                <Input label="Teléfono" placeholder="999 000 0000" />
              </div>
              <Input label="Correo electrónico" type="email" placeholder="tu@correo.com" iconLeft={<Icon name="mail" size={15} />} />
              <Input label="Desarrollo de interés" placeholder="Residencial Palmar" />
              <Button variant="primary" size="lg" full onClick={() => setSent(true)}>Enviar solicitud</Button>
              <p style={{ font: '400 12px/1.5 var(--font-body)', color: 'var(--text-subtle)', margin: 0, textAlign: 'center' }}>
                Al enviar aceptas nuestro aviso de privacidad.
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}

/* ==================================================================== */
/* App router                                                           */
/* ==================================================================== */
function App() {
  const [route, setRoute] = useState('home');
  const [dev, setDev] = useState(null);
  const go = (r) => { setRoute(r); window.scrollTo({ top: 0, behavior: 'instant' }); };
  const openDev = (d) => { setDev(d); go('detail'); };
  return (
    <div>
      <Header route={route === 'detail' ? 'developments' : route} go={go} />
      {route === 'home' && <Home go={go} openDev={openDev} />}
      {route === 'developments' && <Developments openDev={openDev} />}
      {route === 'nosotros' && <Home go={go} openDev={openDev} />}
      {route === 'detail' && <Detail dev={dev} go={go} />}
      {route === 'contact' && <Contact />}
      <Footer go={go} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
