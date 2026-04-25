// Peter Gross — 6 Logo Concepts
// All in the Cedar Reverb design language.

const C = {
  black: '#17100A',
  mahogany: '#2C1810',
  cedar: '#8B5E3C',
  midCedar: '#6B4226',
  cream: '#F2E8D9',
  warmWhite: '#FAF6F0',
  gold: '#C9A96E',
  goldLight: '#DFC08A',
  textDark: '#2C1810',
  textMid: '#5C3D24',
};

const fontD = "'Fraunces', Georgia, serif";
const fontB = "'Lato', sans-serif";

// ─────────────────────────────────────────────
// Shared bits
// ─────────────────────────────────────────────
function LogoCard({ bg, children, pad = 56 }) {
  return (
    <div style={{
      width: 560, height: 420, background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: pad, position: 'relative', overflow: 'hidden',
    }}>
      {children}
    </div>
  );
}

function Caption({ num, title, subtitle }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 2,
      fontFamily: fontB, marginBottom: 14,
    }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 14,
      }}>
        <span style={{
          fontFamily: fontD, fontStyle: 'italic', fontWeight: 300,
          fontSize: 22, color: C.cedar, lineHeight: 1,
        }}>0{num}</span>
        <span style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '.25em',
          textTransform: 'uppercase', color: C.textDark, whiteSpace: 'nowrap',
        }}>{title}</span>
      </div>
      <div style={{
        fontSize: 12, fontWeight: 300, color: C.textMid,
        fontStyle: 'italic', fontFamily: fontD, marginLeft: 36,
      }}>{subtitle}</div>
    </div>
  );
}

function LogoBlock({ num, title, subtitle, dark, children }) {
  const bg = dark ? C.mahogany : C.warmWhite;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      <Caption num={num} title={title} subtitle={subtitle} />
      <div style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 14px 44px rgba(44,24,16,0.1)',
        borderRadius: 2, overflow: 'hidden',
      }}>
        <LogoCard bg={bg}>{children}</LogoCard>
        {/* secondary mini strip: flipped bg + mono */}
        <div style={{
          display: 'flex', borderTop: `1px solid ${dark ? 'rgba(242,232,217,.06)' : 'rgba(44,24,16,.08)'}`,
        }}>
          <div style={{
            flex: 1, background: dark ? C.warmWhite : C.black,
            padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            minHeight: 110,
          }}>
            <div style={{ transform: 'scale(.42)', transformOrigin: 'center' }}>
              {children}
            </div>
          </div>
          <div style={{
            flex: 1, background: dark ? C.black : C.cream,
            padding: '22px 28px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderLeft: `1px solid ${dark ? 'rgba(242,232,217,.06)' : 'rgba(44,24,16,.08)'}`,
          }}>
            <WordmarkMini dark={dark} />
          </div>
        </div>
      </div>
    </div>
  );
}

function WordmarkMini({ dark }) {
  return (
    <div style={{ textAlign: 'center', fontFamily: fontD }}>
      <div style={{
        fontSize: 10, fontWeight: 700, letterSpacing: '.3em',
        textTransform: 'uppercase',
        color: dark ? C.gold : C.cedar, opacity: .8,
        fontFamily: fontB, marginBottom: 6,
      }}>Solo Acoustic Guitar</div>
      <div style={{
        fontSize: 26, fontWeight: 300, lineHeight: 1,
        color: dark ? C.cream : C.mahogany, letterSpacing: '-.01em',
      }}>Peter <em style={{ color: dark ? C.gold : C.cedar }}>Gross</em></div>
      <div style={{
        width: 30, height: 1, background: dark ? 'rgba(201,169,110,.4)' : 'rgba(139,94,60,.4)',
        margin: '10px auto 0',
      }} />
    </div>
  );
}

// ─────────────────────────────────────────────
// 01 — Rosette Monogram
// PG tucked into a concentric guitar-rosette mandala
// ─────────────────────────────────────────────
function Logo01() {
  return (
    <svg viewBox="0 0 320 320" width="300" height="300">
      <defs>
        <clipPath id="rose-clip"><circle cx="160" cy="160" r="110" /></clipPath>
      </defs>
      {/* Rosette rings */}
      <circle cx="160" cy="160" r="140" fill="none" stroke={C.gold} strokeWidth=".8" opacity=".3" />
      <circle cx="160" cy="160" r="130" fill="none" stroke={C.gold} strokeWidth="1.2" opacity=".9" />
      <circle cx="160" cy="160" r="118" fill="none" stroke={C.gold} strokeWidth=".5" opacity=".55" />
      <circle cx="160" cy="160" r="88"  fill="none" stroke={C.gold} strokeWidth=".5" opacity=".55" />
      <circle cx="160" cy="160" r="76"  fill="none" stroke={C.gold} strokeWidth="1.2" opacity=".9" />
      {/* Decorative petals around rim */}
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i * 15) * Math.PI / 180;
        const x1 = 160 + Math.cos(a) * 88;
        const y1 = 160 + Math.sin(a) * 88;
        const x2 = 160 + Math.cos(a) * 118;
        const y2 = 160 + Math.sin(a) * 118;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.gold} strokeWidth=".6" opacity=".5" />;
      })}
      {/* Tiny dots */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 + 15) * Math.PI / 180;
        const x = 160 + Math.cos(a) * 103;
        const y = 160 + Math.sin(a) * 103;
        return <circle key={i} cx={x} cy={y} r="1.3" fill={C.gold} opacity=".85" />;
      })}
      {/* PG monogram */}
      <text x="160" y="185" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="92"
        fill={C.cream} letterSpacing="-4">
        <tspan>P</tspan>
        <tspan fontStyle="italic" fill={C.gold} dx="-6">G</tspan>
      </text>
      {/* Through string */}
      <line x1="160" y1="30" x2="160" y2="290" stroke={C.gold} strokeWidth=".5" opacity=".25" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 02 — Strings Ligature
// Six vertical strings pass through a bold serif PG
// ─────────────────────────────────────────────
function Logo02() {
  return (
    <svg viewBox="0 0 420 300" width="400" height="286">
      {/* Six guitar strings */}
      {[0,1,2,3,4,5].map(i => {
        const x = 40 + i * 68;
        const w = 0.5 + i * 0.35;
        const op = 0.35 + i * 0.1;
        return <line key={i} x1={x} y1="20" x2={x} y2="280" stroke={C.cedar} strokeWidth={w} opacity={op} />;
      })}
      {/* Nut line */}
      <line x1="24" y1="40" x2="396" y2="40" stroke={C.gold} strokeWidth="2" />
      <line x1="24" y1="260" x2="396" y2="260" stroke={C.gold} strokeWidth="2" />
      {/* Fret dots */}
      <circle cx="210" cy="100" r="3" fill={C.gold} opacity=".6" />
      <circle cx="210" cy="200" r="3" fill={C.gold} opacity=".6" />
      {/* PG */}
      <text x="210" y="185" textAnchor="middle"
        fontFamily={fontD} fontWeight="400" fontSize="150"
        fill={C.mahogany} letterSpacing="-8" style={{ paintOrder: 'stroke' }}
        stroke={C.warmWhite} strokeWidth="14" strokeLinejoin="round">
        <tspan>P</tspan>
        <tspan fontStyle="italic" dx="-10" fill={C.cedar} stroke={C.warmWhite}>G</tspan>
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────
// 03 — Soundhole Seal
// Circular stamp/seal with PG as the soundhole center
// ─────────────────────────────────────────────
function Logo03() {
  return (
    <svg viewBox="0 0 320 320" width="300" height="300">
      <defs>
        <path id="arc-top" d="M 160 160 m -118 0 a 118 118 0 1 1 236 0" fill="none" />
        <path id="arc-bot" d="M 55 190 a 118 118 0 0 0 210 0" fill="none" />
      </defs>
      {/* Outer seal */}
      <circle cx="160" cy="160" r="138" fill="none" stroke={C.gold} strokeWidth="1" opacity=".35" />
      <circle cx="160" cy="160" r="128" fill="none" stroke={C.gold} strokeWidth="2.2" />
      <circle cx="160" cy="160" r="108" fill="none" stroke={C.gold} strokeWidth=".6" opacity=".5" />
      {/* Curved text top */}
      <text fontFamily={fontB} fontSize="12" fontWeight="700" letterSpacing="5"
        fill={C.gold}>
        <textPath href="#arc-top" startOffset="50%" textAnchor="middle">
          PETER · GROSS
        </textPath>
      </text>
      <text fontFamily={fontB} fontSize="10" fontWeight="700" letterSpacing="6"
        fill={C.gold} opacity=".75">
        <textPath href="#arc-bot" startOffset="50%" textAnchor="middle">
          EST · ASHLAND · OR
        </textPath>
      </text>
      {/* Dot separators */}
      <circle cx="42" cy="160" r="2.5" fill={C.gold} />
      <circle cx="278" cy="160" r="2.5" fill={C.gold} />
      {/* Inner soundhole */}
      <circle cx="160" cy="160" r="70" fill={C.black} />
      <circle cx="160" cy="160" r="70" fill="none" stroke={C.gold} strokeWidth=".8" opacity=".6" />
      <circle cx="160" cy="160" r="62" fill="none" stroke={C.gold} strokeWidth=".4" opacity=".4" />
      {/* PG centered */}
      <text x="160" y="180" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="70"
        fill={C.cream} letterSpacing="-3">
        <tspan>P</tspan>
        <tspan fontStyle="italic" fill={C.gold} dx="-4">G</tspan>
      </text>
      {/* Three strings cross the hole */}
      <line x1="140" y1="100" x2="140" y2="220" stroke={C.gold} strokeWidth=".5" opacity=".45" />
      <line x1="160" y1="95"  x2="160" y2="225" stroke={C.gold} strokeWidth=".6" opacity=".35" />
      <line x1="180" y1="100" x2="180" y2="220" stroke={C.gold} strokeWidth=".5" opacity=".45" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 04 — Headstock Mark
// P becomes a guitar headstock silhouette with tuning pegs
// ─────────────────────────────────────────────
function Logo04() {
  return (
    <svg viewBox="0 0 380 320" width="380" height="320">
      {/* Six strings streaming down */}
      {[0,1,2,3,4,5].map(i => {
        const x = 155 + i * 7;
        return <line key={i} x1={x} y1="170" x2={x + (i - 2.5) * 3} y2="310"
          stroke={C.gold} strokeWidth=".7" opacity={.35 + i * .05} />;
      })}
      {/* Headstock body (a tall rounded trapezoid) */}
      <path d="M 90 40 
               Q 90 28 102 28
               L 238 28
               Q 250 28 250 40
               L 248 140
               Q 248 158 230 158
               L 110 158
               Q 92 158 92 140 Z"
        fill={C.mahogany} stroke={C.gold} strokeWidth="1.2" />
      {/* Tuning pegs — 3 left, 3 right */}
      {[0,1,2].map(i => (
        <g key={i}>
          <circle cx="78" cy={50 + i * 38} r="9" fill={C.gold} />
          <circle cx="78" cy={50 + i * 38} r="5" fill={C.mahogany} />
          <rect x="85" y={48 + i * 38} width="12" height="4" fill={C.gold} opacity=".85" />
        </g>
      ))}
      {[0,1,2].map(i => (
        <g key={i}>
          <circle cx="262" cy={50 + i * 38} r="9" fill={C.gold} />
          <circle cx="262" cy={50 + i * 38} r="5" fill={C.mahogany} />
          <rect x="243" y={48 + i * 38} width="12" height="4" fill={C.gold} opacity=".85" />
        </g>
      ))}
      {/* PG inside headstock face */}
      <text x="170" y="120" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="78"
        fill={C.cream} letterSpacing="-3">
        <tspan>P</tspan>
        <tspan fontStyle="italic" fill={C.gold} dx="-4">G</tspan>
      </text>
      {/* Nut */}
      <rect x="108" y="158" width="124" height="6" fill={C.cream} />
      {/* Tag line below */}
      <text x="170" y="290" textAnchor="middle"
        fontFamily={fontB} fontSize="10" fontWeight="700"
        letterSpacing="5" fill={C.cedar}>PETER GROSS</text>
    </svg>
  );
}

// ─────────────────────────────────────────────
// 05 — Waveform Ligature
// P ~ G connected by an acoustic soundwave
// ─────────────────────────────────────────────
function Logo05() {
  return (
    <svg viewBox="0 0 460 220" width="440" height="210">
      {/* Soft horizon line */}
      <line x1="20" y1="110" x2="440" y2="110" stroke={C.gold} strokeWidth=".5" opacity=".2" />
      {/* P */}
      <text x="60" y="165" textAnchor="start"
        fontFamily={fontD} fontWeight="300" fontSize="150"
        fill={C.mahogany} letterSpacing="-4">P</text>
      {/* Waveform between */}
      <g>
        {/* main sine */}
        <path d="M 150 110 
                 Q 170 60 190 110
                 Q 210 160 230 110
                 Q 250 60 270 110
                 Q 290 160 310 110"
          fill="none" stroke={C.cedar} strokeWidth="3" strokeLinecap="round" />
        {/* echo sine */}
        <path d="M 150 110 
                 Q 170 82 190 110
                 Q 210 138 230 110
                 Q 250 82 270 110
                 Q 290 138 310 110"
          fill="none" stroke={C.gold} strokeWidth="1.2" opacity=".6" strokeLinecap="round" />
        {/* dots at nodes */}
        {[150, 190, 230, 270, 310].map((x, i) => (
          <circle key={i} cx={x} cy="110" r="2.2" fill={C.gold} />
        ))}
      </g>
      {/* G */}
      <text x="400" y="165" textAnchor="end"
        fontFamily={fontD} fontStyle="italic" fontWeight="300" fontSize="150"
        fill={C.cedar} letterSpacing="-4">G</text>
      {/* tiny label below */}
      <text x="230" y="200" textAnchor="middle"
        fontFamily={fontB} fontSize="9" fontWeight="700"
        letterSpacing="6" fill={C.cedar} opacity=".7">SOLO · ACOUSTIC · GUITAR</text>
    </svg>
  );
}

// ─────────────────────────────────────────────
// 06 — Fretboard Monogram
// PG carved into a vertical fretboard with fret markers
// ─────────────────────────────────────────────
function Logo06() {
  return (
    <svg viewBox="0 0 300 380" width="280" height="354">
      {/* Fretboard */}
      <rect x="90" y="30" width="120" height="320" fill={C.mahogany} stroke={C.gold} strokeWidth="1" />
      {/* Wood grain */}
      {[0,1,2,3].map(i => (
        <line key={i} x1="90" y1={70 + i * 80} x2="210" y2={72 + i * 80}
          stroke={C.black} strokeWidth="1" opacity=".3" />
      ))}
      {/* Frets */}
      {[60, 110, 160, 210, 260, 310].map((y, i) => (
        <line key={i} x1="90" y1={y} x2="210" y2={y}
          stroke={C.gold} strokeWidth={i === 0 ? 3 : 1.2} opacity={i === 0 ? 1 : .7} />
      ))}
      {/* Fret markers (side dots) */}
      <circle cx="150" cy="185" r="4" fill={C.gold} opacity=".8" />
      <circle cx="142" cy="285" r="3.2" fill={C.gold} opacity=".7" />
      <circle cx="158" cy="285" r="3.2" fill={C.gold} opacity=".7" />
      {/* Strings */}
      {[0,1,2,3,4,5].map(i => {
        const x = 100 + i * 20;
        const w = 0.5 + i * 0.25;
        return <line key={i} x1={x} y1="30" x2={x} y2="350" stroke={C.gold} strokeWidth={w} opacity=".55" />;
      })}
      {/* PG stacked */}
      <text x="150" y="155" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="78"
        fill={C.cream} letterSpacing="-3" style={{ paintOrder: 'stroke' }}
        stroke={C.mahogany} strokeWidth="8">P</text>
      <text x="150" y="255" textAnchor="middle"
        fontFamily={fontD} fontStyle="italic" fontWeight="300" fontSize="78"
        fill={C.gold} letterSpacing="-3" style={{ paintOrder: 'stroke' }}
        stroke={C.mahogany} strokeWidth="8">G</text>
    </svg>
  );
}

// ─────────────────────────────────────────────
// 07 — G-as-Soundhole
// The bowl of G literally becomes the guitar body/soundhole,
// with P anchoring the upper bout as a pickguard.
// ─────────────────────────────────────────────
function Logo07() {
  return (
    <svg viewBox="0 0 360 360" width="340" height="340">
      <defs>
        <radialGradient id="bodyShade" cx="50%" cy="52%" r="52%">
          <stop offset="0%" stopColor={C.cedar} stopOpacity=".7" />
          <stop offset="100%" stopColor={C.black} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Giant italic G — drawn as guitar body */}
      <text x="180" y="280" textAnchor="middle"
        fontFamily={fontD} fontStyle="italic" fontWeight="300" fontSize="340"
        fill={C.mahogany} letterSpacing="-10">G</text>
      {/* Body shading overlay */}
      <ellipse cx="180" cy="210" rx="120" ry="140" fill="url(#bodyShade)" opacity=".6" style={{mixBlendMode: 'screen'}} />
      {/* Soundhole rings inside the G's counter */}
      <circle cx="178" cy="205" r="54" fill={C.black} />
      <circle cx="178" cy="205" r="54" fill="none" stroke={C.gold} strokeWidth="2" />
      <circle cx="178" cy="205" r="46" fill="none" stroke={C.gold} strokeWidth=".5" opacity=".6" />
      <circle cx="178" cy="205" r="40" fill="none" stroke={C.gold} strokeWidth=".5" opacity=".4" />
      {/* Rosette petals around hole */}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * 22.5) * Math.PI / 180;
        const x1 = 178 + Math.cos(a) * 54;
        const y1 = 205 + Math.sin(a) * 54;
        const x2 = 178 + Math.cos(a) * 60;
        const y2 = 205 + Math.sin(a) * 60;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.gold} strokeWidth=".6" opacity=".7" />;
      })}
      {/* P tucked into upper-left as a pickguard */}
      <g>
        <path d="M 70 100 Q 60 95 60 108 L 60 168 Q 60 178 72 176 L 108 170 Q 122 167 122 154 L 122 122 Q 122 108 110 106 Z"
          fill={C.gold} opacity=".95" />
        <text x="92" y="158" textAnchor="middle"
          fontFamily={fontD} fontWeight="400" fontSize="64"
          fill={C.mahogany} letterSpacing="-2">P</text>
      </g>
      {/* Strings across the G body → soundhole */}
      {[0,1,2,3,4,5].map(i => {
        const x = 148 + i * 12;
        return <line key={i} x1={x} y1="100" x2={x} y2="310"
          stroke={C.gold} strokeWidth={0.4 + i * 0.2} opacity={.3 + i * .06} />;
      })}
      {/* Bridge */}
      <rect x="150" y="272" width="56" height="5" rx="1" fill={C.gold} opacity=".85" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 08 — Plectrum / Pick
// A guitar-pick silhouette with PG die-cut out of it.
// Bold, iconic, reads at any size.
// ─────────────────────────────────────────────
function Logo08() {
  return (
    <svg viewBox="0 0 320 360" width="280" height="315">
      <defs>
        <mask id="pick-mask">
          <rect width="320" height="360" fill="white" />
          {/* PG knocked out */}
          <text x="160" y="220" textAnchor="middle"
            fontFamily={fontD} fontWeight="400" fontSize="150"
            fill="black" letterSpacing="-10">P</text>
          <text x="160" y="220" textAnchor="middle"
            fontFamily={fontD} fontStyle="italic" fontWeight="400" fontSize="150"
            fill="black" letterSpacing="-10" transform="translate(44 0)">G</text>
        </mask>
      </defs>
      {/* Pick shape — curved triangle */}
      <path
        d="M 160 40 
           C 230 40 270 100 275 170
           C 278 230 230 290 160 320
           C 90 290 42 230 45 170
           C 50 100 90 40 160 40 Z"
        fill={C.gold}
        mask="url(#pick-mask)"
      />
      {/* Subtle shadow ridge on the pick */}
      <path
        d="M 160 40 
           C 230 40 270 100 275 170
           C 278 230 230 290 160 320"
        fill="none" stroke={C.mahogany} strokeWidth="1.2" opacity=".35"
      />
      {/* Strum lines curving off the bottom */}
      <path d="M 90 320 Q 160 340 230 320" stroke={C.cedar} strokeWidth="1" opacity=".45" fill="none" />
      <path d="M 70 334 Q 160 360 250 334" stroke={C.cedar} strokeWidth=".8" opacity=".3" fill="none" />
      <path d="M 50 348 Q 160 378 270 348" stroke={C.cedar} strokeWidth=".6" opacity=".2" fill="none" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// 09 — Ampersand Lockup
// P & G bound by a cursive ampersand built from a treble-clef /
// guitar scroll — premium wine-label/luthier feel.
// ─────────────────────────────────────────────
function Logo09() {
  return (
    <svg viewBox="0 0 420 360" width="400" height="342">
      {/* vertical deco lines */}
      <line x1="30" y1="60" x2="30" y2="300" stroke={C.gold} strokeWidth=".5" opacity=".4" />
      <line x1="390" y1="60" x2="390" y2="300" stroke={C.gold} strokeWidth=".5" opacity=".4" />
      {/* top label */}
      <text x="210" y="60" textAnchor="middle"
        fontFamily={fontB} fontSize="10" fontWeight="700"
        letterSpacing="8" fill={C.cedar} opacity=".75">— FROM ASHLAND, OREGON —</text>
      {/* P */}
      <text x="95" y="235" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="220"
        fill={C.mahogany} letterSpacing="-6">P</text>
      {/* G */}
      <text x="325" y="235" textAnchor="middle"
        fontFamily={fontD} fontStyle="italic" fontWeight="300" fontSize="220"
        fill={C.mahogany} letterSpacing="-6">G</text>
      {/* Ornate ampersand / scroll in center */}
      <g transform="translate(210 200)">
        {/* decorative scroll resembling a guitar headstock scroll + treble flourish */}
        <path d="M -28 30 
                 C -46 10 -32 -20 -8 -18
                 C 18 -16 24 12 6 28
                 C -12 44 -34 30 -20 12
                 C -8 -4 12 -2 22 14
                 C 32 30 30 48 12 52
                 C -10 56 -28 48 -22 34"
          fill="none" stroke={C.gold} strokeWidth="3" strokeLinecap="round" />
        {/* little dot accents */}
        <circle cx="26" cy="-12" r="2.5" fill={C.gold} />
        <circle cx="-26" cy="48" r="2.5" fill={C.gold} />
        {/* tiny underscore */}
        <line x1="-32" y1="70" x2="32" y2="70" stroke={C.cedar} strokeWidth="1" opacity=".6" />
      </g>
      {/* bottom etched name */}
      <text x="210" y="300" textAnchor="middle"
        fontFamily={fontD} fontStyle="italic" fontWeight="300" fontSize="26"
        fill={C.cedar}>Peter · Gross</text>
      <text x="210" y="325" textAnchor="middle"
        fontFamily={fontB} fontSize="9" fontWeight="700"
        letterSpacing="6" fill={C.cedar} opacity=".55">ACOUSTIC · COMPOSITIONS</text>
    </svg>
  );
}

// ─────────────────────────────────────────────
// 10 — Tablature Sketch
// PG drawn as hand-written guitar tablature —
// ink-on-notebook, loose, very un-logo-like.
// ─────────────────────────────────────────────
function Logo10() {
  return (
    <svg viewBox="0 0 460 280" width="440" height="268">
      {/* 6 tab staff lines */}
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1="30" y1={70 + i * 22} x2="430" y2={70 + i * 22}
          stroke={C.mahogany} strokeWidth="1" opacity=".85" />
      ))}
      {/* Left "TAB" cluster */}
      <text x="12" y="120" fontFamily={fontD} fontWeight="400" fontSize="34"
        fill={C.mahogany} letterSpacing="-2">T</text>
      <text x="12" y="148" fontFamily={fontD} fontWeight="400" fontSize="34"
        fill={C.mahogany} letterSpacing="-2">A</text>
      <text x="12" y="176" fontFamily={fontD} fontWeight="400" fontSize="34"
        fill={C.mahogany} letterSpacing="-2">B</text>
      {/* Bar line */}
      <line x1="52" y1="70" x2="52" y2="180" stroke={C.mahogany} strokeWidth="1.5" />
      {/* Fret numbers on strings spelling 'PG' visually */}
      {/* cluster 1 */}
      {[
        [80, 70, '3'], [80, 92, '5'], [80, 114, '2'],
        [112, 136, '0'], [112, 158, '4'], [112, 180, '7'],
      ].map(([x, y, n], i) => (
        <g key={`c1-${i}`}>
          <rect x={x-9} y={y-9} width="18" height="18" fill={C.warmWhite} />
          <text x={x} y={y+5} textAnchor="middle" fontFamily={fontB} fontSize="13" fontWeight="700" fill={C.cedar}>{n}</text>
        </g>
      ))}
      {/* Big PG handwritten over the staff */}
      <text x="235" y="180" textAnchor="middle"
        fontFamily={fontD} fontStyle="italic" fontWeight="300" fontSize="170"
        fill={C.cedar} letterSpacing="-4" opacity=".92">P<tspan dx="-10">g</tspan></text>
      {/* cluster 2 */}
      {[
        [355, 92, '7'], [355, 114, '5'], [355, 136, '4'],
        [388, 70, '2'], [388, 158, '0'], [388, 180, '3'],
      ].map(([x, y, n], i) => (
        <g key={`c2-${i}`}>
          <rect x={x-9} y={y-9} width="18" height="18" fill={C.warmWhite} />
          <text x={x} y={y+5} textAnchor="middle" fontFamily={fontB} fontSize="13" fontWeight="700" fill={C.cedar}>{n}</text>
        </g>
      ))}
      {/* End bar */}
      <line x1="420" y1="70" x2="420" y2="180" stroke={C.mahogany} strokeWidth="1.5" />
      <line x1="426" y1="70" x2="426" y2="180" stroke={C.mahogany} strokeWidth="2.5" />
      {/* Tempo/title above staff */}
      <text x="30" y="50" fontFamily={fontD} fontStyle="italic" fontSize="15" fill={C.textMid}>
        ♩ = 68  ·  open tuning
      </text>
      {/* signature below */}
      <text x="430" y="220" textAnchor="end"
        fontFamily={fontD} fontStyle="italic" fontSize="20" fill={C.mahogany}>— Peter Gross</text>
      <text x="430" y="240" textAnchor="end"
        fontFamily={fontB} fontSize="9" fontWeight="700" letterSpacing="4" fill={C.cedar} opacity=".6">
        UNTITLED, 2024
      </text>
    </svg>
  );
}

// ═════════════════════════════════════════════
// G-AS-SOUNDHOLE VARIATIONS (on concept #7)
// ═════════════════════════════════════════════

// 7A — Matched serif
// Same font & weight for P and G; roman throughout.
function Logo7A() {
  return (
    <svg viewBox="0 0 360 360" width="340" height="340">
      {/* Giant roman G with soundhole as counter */}
      <text x="200" y="290" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="340"
        fill={C.mahogany} letterSpacing="-10">G</text>
      {/* Soundhole rings inside G counter */}
      <circle cx="198" cy="210" r="54" fill={C.black} />
      <circle cx="198" cy="210" r="54" fill="none" stroke={C.gold} strokeWidth="2" />
      <circle cx="198" cy="210" r="46" fill="none" stroke={C.gold} strokeWidth=".5" opacity=".55" />
      {/* Rosette ticks */}
      {Array.from({ length: 20 }).map((_, i) => {
        const a = (i * 18) * Math.PI / 180;
        const x1 = 198 + Math.cos(a) * 54;
        const y1 = 210 + Math.sin(a) * 54;
        const x2 = 198 + Math.cos(a) * 60;
        const y2 = 210 + Math.sin(a) * 60;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.gold} strokeWidth=".6" opacity=".8" />;
      })}
      {/* P — SAME FONT, SAME WEIGHT, SAME SIZE, same stance as G */}
      <text x="110" y="230" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="220"
        fill={C.mahogany} letterSpacing="-8">P</text>
      {/* Strings across soundhole */}
      {[0,1,2,3,4,5].map(i => {
        const x = 170 + i * 12;
        return <line key={i} x1={x} y1="120" x2={x} y2="310"
          stroke={C.gold} strokeWidth={0.4 + i * 0.18} opacity={.3 + i * .06} />;
      })}
      <rect x="170" y="278" width="56" height="4" rx="1" fill={C.gold} opacity=".85" />
    </svg>
  );
}

// 7B — Full acoustic body
// G expanded into a full guitar silhouette with neck climbing into P.
function Logo7B() {
  return (
    <svg viewBox="0 0 360 400" width="320" height="356">
      {/* Guitar body — full dreadnought from G's counter */}
      <path d="M 180 140
               C 240 140 272 200 272 250
               C 272 310 230 360 180 360
               C 130 360 88 310 88 250
               C 88 200 120 140 180 140 Z"
        fill={C.mahogany} stroke={C.gold} strokeWidth="1.2" />
      {/* Waist cut */}
      <path d="M 110 230 Q 180 216 250 230" stroke={C.black} strokeWidth="1.2" opacity=".35" fill="none" />
      {/* Soundhole = G's counter */}
      <circle cx="180" cy="250" r="44" fill={C.black} />
      <circle cx="180" cy="250" r="44" fill="none" stroke={C.gold} strokeWidth="1.6" />
      <circle cx="180" cy="250" r="38" fill="none" stroke={C.gold} strokeWidth=".5" opacity=".5" />
      {/* G letterform stroke curling into soundhole */}
      <path d="M 224 250 L 224 286 L 198 286"
        fill="none" stroke={C.cream} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bridge */}
      <rect x="148" y="310" width="64" height="6" rx="1.5" fill={C.gold} />
      {/* Strings running up into the neck */}
      {[0,1,2,3,4,5].map(i => {
        const x = 152 + i * 12;
        return <line key={i} x1={x} y1="310" x2={x} y2="60" stroke={C.gold} strokeWidth={0.4 + i * 0.18} opacity={.4 + i * .05} />;
      })}
      {/* Neck */}
      <rect x="148" y="40" width="64" height="140" fill={C.mahogany} stroke={C.gold} strokeWidth=".8" />
      {/* Fret marks */}
      {[70, 100, 130, 160].map((y, i) => (
        <line key={i} x1="148" y1={y} x2="212" y2={y} stroke={C.gold} strokeWidth=".8" opacity=".5" />
      ))}
      <circle cx="180" cy="115" r="3" fill={C.gold} opacity=".7" />
      {/* P as headstock */}
      <g>
        <rect x="132" y="10" width="96" height="40" rx="4" fill={C.gold} />
        <text x="180" y="44" textAnchor="middle"
          fontFamily={fontD} fontWeight="400" fontSize="42"
          fill={C.mahogany} letterSpacing="-2">P</text>
      </g>
    </svg>
  );
}

// 7C — Vintage oval decal
// Old-style guitar-brand decal — oval frame, P and G matched roman.
function Logo7C() {
  return (
    <svg viewBox="0 0 440 360" width="420" height="344">
      <defs>
        <path id="oval-top-7c" d="M 220 180 m -190 0 a 190 140 0 1 1 380 0" fill="none" />
        <path id="oval-bot-7c" d="M 40 210 a 190 140 0 0 0 360 0" fill="none" />
      </defs>
      {/* Double oval frame */}
      <ellipse cx="220" cy="180" rx="196" ry="146" fill="none" stroke={C.gold} strokeWidth=".8" opacity=".45" />
      <ellipse cx="220" cy="180" rx="186" ry="138" fill="none" stroke={C.gold} strokeWidth="2.2" />
      <ellipse cx="220" cy="180" rx="168" ry="122" fill="none" stroke={C.gold} strokeWidth=".5" opacity=".55" />
      {/* Curved top text */}
      <text fontFamily={fontB} fontSize="12" fontWeight="700" letterSpacing="7" fill={C.gold}>
        <textPath href="#oval-top-7c" startOffset="50%" textAnchor="middle">PETER GROSS · EST. ASHLAND</textPath>
      </text>
      <text fontFamily={fontB} fontSize="10" fontWeight="700" letterSpacing="8" fill={C.gold} opacity=".75">
        <textPath href="#oval-bot-7c" startOffset="50%" textAnchor="middle">SOLO · ACOUSTIC · GUITAR</textPath>
      </text>
      {/* Dot separators */}
      <circle cx="34" cy="180" r="2.5" fill={C.gold} />
      <circle cx="406" cy="180" r="2.5" fill={C.gold} />
      {/* P matched roman */}
      <text x="140" y="220" textAnchor="middle"
        fontFamily={fontD} fontWeight="400" fontSize="140"
        fill={C.cream} letterSpacing="-4">P</text>
      {/* G matched roman with soundhole knockout */}
      <text x="300" y="220" textAnchor="middle"
        fontFamily={fontD} fontWeight="400" fontSize="140"
        fill={C.cream} letterSpacing="-4">G</text>
      {/* Soundhole */}
      <circle cx="296" cy="180" r="28" fill={C.black} />
      <circle cx="296" cy="180" r="28" fill="none" stroke={C.gold} strokeWidth="1.4" />
      <circle cx="296" cy="180" r="23" fill="none" stroke={C.gold} strokeWidth=".4" opacity=".5" />
      {/* Three strings across */}
      <line x1="286" y1="140" x2="286" y2="220" stroke={C.gold} strokeWidth=".5" opacity=".55" />
      <line x1="296" y1="135" x2="296" y2="225" stroke={C.gold} strokeWidth=".6" opacity=".45" />
      <line x1="306" y1="140" x2="306" y2="220" stroke={C.gold} strokeWidth=".5" opacity=".55" />
      {/* Middle dot */}
      <circle cx="220" cy="180" r="2" fill={C.gold} />
    </svg>
  );
}

// 7D — Line-art minimal
// Single-stroke monoline P and G, soundhole = thin ring. Works tiny.
function Logo7D() {
  return (
    <svg viewBox="0 0 420 220" width="400" height="210">
      {/* P — built from strokes */}
      <g stroke={C.mahogany} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="75" y1="40" x2="75" y2="190" />
        <path d="M 75 40 L 138 40 Q 170 40 170 72 Q 170 104 138 104 L 75 104" />
      </g>
      {/* G — also monoline, counter is the soundhole ring */}
      <g stroke={C.mahogany} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 320 60 
                 Q 285 40 260 70
                 Q 230 108 245 152
                 Q 262 192 305 188
                 Q 345 184 348 148
                 L 348 118
                 L 318 118" />
      </g>
      {/* Soundhole ring inside G */}
      <circle cx="298" cy="125" r="32" fill="none" stroke={C.gold} strokeWidth="3" />
      <circle cx="298" cy="125" r="26" fill="none" stroke={C.gold} strokeWidth=".6" opacity=".55" />
      {/* Six tiny strings through the hole */}
      {[0,1,2,3,4,5].map(i => {
        const x = 278 + i * 8;
        return <line key={i} x1={x} y1="88" x2={x} y2="162" stroke={C.gold} strokeWidth=".5" opacity=".5" />;
      })}
      {/* Tiny baseline */}
      <line x1="75" y1="205" x2="348" y2="205" stroke={C.cedar} strokeWidth=".5" opacity=".4" />
    </svg>
  );
}

// 7E — Branded / woodburned
// Matched stencil P and G, rough burnt edge texture — feels stamped into wood.
function Logo7E() {
  return (
    <svg viewBox="0 0 400 360" width="360" height="324">
      <defs>
        <filter id="burn" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="2.4" />
        </filter>
        <pattern id="woodgrain" width="400" height="360" patternUnits="userSpaceOnUse">
          <rect width="400" height="360" fill="none" />
          {Array.from({length: 9}).map((_, i) => (
            <path key={i} d={`M 0 ${40*i+20} Q 100 ${40*i+10+i} 200 ${40*i+20} Q 300 ${40*i+30-i} 400 ${40*i+20}`}
              stroke={C.black} strokeWidth=".6" fill="none" opacity=".18" />
          ))}
        </pattern>
      </defs>
      {/* Woodgrain background */}
      <rect x="20" y="20" width="360" height="320" fill={C.cedar} opacity=".22" />
      <rect x="20" y="20" width="360" height="320" fill="url(#woodgrain)" />
      {/* Border brand-frame */}
      <rect x="30" y="30" width="340" height="300" fill="none" stroke={C.mahogany} strokeWidth="2" opacity=".85" filter="url(#burn)" />
      <rect x="40" y="40" width="320" height="280" fill="none" stroke={C.mahogany} strokeWidth=".8" opacity=".5" />
      {/* Matched stencil P (same weight) */}
      <g filter="url(#burn)">
        <text x="120" y="235" textAnchor="middle"
          fontFamily={fontD} fontWeight="400" fontSize="180"
          fill={C.mahogany} letterSpacing="-6">P</text>
        <text x="280" y="235" textAnchor="middle"
          fontFamily={fontD} fontWeight="400" fontSize="180"
          fill={C.mahogany} letterSpacing="-6">G</text>
      </g>
      {/* Soundhole punched through G */}
      <circle cx="276" cy="188" r="30" fill={C.black} />
      <circle cx="276" cy="188" r="30" fill="none" stroke={C.gold} strokeWidth="1.5" filter="url(#burn)" />
      {/* Brand stamp label */}
      <text x="200" y="295" textAnchor="middle"
        fontFamily={fontB} fontSize="9" fontWeight="700"
        letterSpacing="8" fill={C.mahogany} opacity=".8" filter="url(#burn)">
        ASHLAND · OR · EST 2024
      </text>
      {/* Tiny dots */}
      <circle cx="60" cy="50" r="2" fill={C.mahogany} opacity=".6" />
      <circle cx="340" cy="50" r="2" fill={C.mahogany} opacity=".6" />
      <circle cx="60" cy="310" r="2" fill={C.mahogany} opacity=".6" />
      <circle cx="340" cy="310" r="2" fill={C.mahogany} opacity=".6" />
    </svg>
  );
}

// ═════════════════════════════════════════════
// FREE-FORM SERIES — 5 new concepts, full latitude
// ═════════════════════════════════════════════

// 11 — Constellation
// P and G as stellar bodies connected by fine star-chart lines;
// guitar strings become light trails fading into deep space.
function Logo11() {
  const stars = [
    [100,80],[62,130],[88,190],[130,155],[70,210],
    [260,72],[300,110],[288,165],[340,140],[320,200],[256,195],
  ];
  // "constellation" edges connecting them
  const edges = [[0,1],[1,2],[2,3],[3,0],[1,4],
                 [5,6],[6,7],[7,8],[8,5],[7,9],[9,10],[10,7]];
  return (
    <svg viewBox="0 0 420 280" width="400" height="267">
      <defs>
        <radialGradient id="starfield" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={C.gold} stopOpacity=".04" />
          <stop offset="100%" stopColor={C.black} stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Deep space wash */}
      <rect width="420" height="280" fill="none" />
      <ellipse cx="210" cy="140" rx="190" ry="130" fill="url(#starfield)" />
      {/* Constellation edges */}
      {edges.map(([a, b], i) => (
        <line key={i}
          x1={stars[a][0]} y1={stars[a][1]}
          x2={stars[b][0]} y2={stars[b][1]}
          stroke={C.gold} strokeWidth=".6" opacity=".28" />
      ))}
      {/* Star dots */}
      {stars.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4.5" fill={C.mahogany} />
          <circle cx={x} cy={y} r="2.2" fill={C.gold} opacity=".9" />
          <circle cx={x} cy={y} r="6" fill="none" stroke={C.gold} strokeWidth=".4" opacity=".3" />
        </g>
      ))}
      {/* PG drawn in fine star-chart lettering */}
      <text x="90" y="235" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="120"
        fill="none" stroke={C.cream} strokeWidth=".8" letterSpacing="-4" opacity=".9">P</text>
      <text x="300" y="235" textAnchor="middle"
        fontFamily={fontD} fontStyle="italic" fontWeight="300" fontSize="120"
        fill="none" stroke={C.gold} strokeWidth=".8" letterSpacing="-4" opacity=".85">G</text>
      {/* Thin latitude/longitude lines */}
      <ellipse cx="210" cy="140" rx="170" ry="110" fill="none" stroke={C.gold} strokeWidth=".3" opacity=".15" />
      <ellipse cx="210" cy="140" rx="120" ry="78" fill="none" stroke={C.gold} strokeWidth=".3" opacity=".1" />
      <line x1="40" y1="140" x2="380" y2="140" stroke={C.gold} strokeWidth=".3" opacity=".12" />
      {/* Bottom label */}
      <text x="210" y="266" textAnchor="middle"
        fontFamily={fontB} fontSize="8" fontWeight="700"
        letterSpacing="6" fill={C.cedar} opacity=".7">PETER · GROSS</text>
    </svg>
  );
}

// 12 — Cathedral Arch
// The hourglass waist-curve of a guitar body becomes a gothic pointed arch.
// PG sits inside the void like an inscription above a doorway.
function Logo12() {
  return (
    <svg viewBox="0 0 340 400" width="300" height="353">
      {/* Outer arch — two guitar-bout curves meeting at a point */}
      <path d="M 40 360
               C 40 240 40 180 170 60
               C 300 180 300 240 300 360 Z"
        fill="none" stroke={C.gold} strokeWidth="2" />
      <path d="M 55 360
               C 55 245 55 190 170 75
               C 285 190 285 245 285 360 Z"
        fill="none" stroke={C.gold} strokeWidth=".5" opacity=".45" />
      {/* Interior fill */}
      <path d="M 55 360
               C 55 245 55 190 170 75
               C 285 190 285 245 285 360 Z"
        fill={C.mahogany} opacity=".85" />
      {/* Soundhole rose window */}
      <circle cx="170" cy="230" r="58" fill={C.black} />
      <circle cx="170" cy="230" r="58" fill="none" stroke={C.gold} strokeWidth="1.5" />
      <circle cx="170" cy="230" r="50" fill="none" stroke={C.gold} strokeWidth=".4" opacity=".5" />
      {/* Rose window spoke pattern */}
      {Array.from({length: 8}).map((_, i) => {
        const a = (i * 45) * Math.PI / 180;
        return <line key={i}
          x1={170 + Math.cos(a) * 22} y1={230 + Math.sin(a) * 22}
          x2={170 + Math.cos(a) * 50} y2={230 + Math.sin(a) * 50}
          stroke={C.gold} strokeWidth=".7" opacity=".65" />;
      })}
      <circle cx="170" cy="230" r="22" fill="none" stroke={C.gold} strokeWidth=".7" opacity=".5" />
      <circle cx="170" cy="230" r="8" fill={C.gold} opacity=".5" />
      {/* Carved PG above the rose window */}
      <text x="170" y="165" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="72"
        fill={C.cream} letterSpacing="-3">
        <tspan>P</tspan>
        <tspan fontStyle="italic" fill={C.gold} dx="-4">G</tspan>
      </text>
      {/* Horizontal divider bar */}
      <line x1="70" y1="175" x2="270" y2="175" stroke={C.gold} strokeWidth=".7" opacity=".4" />
      {/* Bottom inscription */}
      <text x="170" y="330" textAnchor="middle"
        fontFamily={fontB} fontSize="9" fontWeight="700"
        letterSpacing="5" fill={C.gold} opacity=".6">PETER GROSS</text>
    </svg>
  );
}

// 13 — Fingerprint
// Tight concentric oval whorls — up close it reads as a fingerprint;
// at a distance the negative-space forms PG. Intimate, individual.
function Logo13() {
  const cx = 210, cy = 165;
  const lines = [];
  // Generate whorled concentric paths offset slightly for finger-swirl feel
  for (let i = 2; i <= 28; i++) {
    const rx = i * 6.8;
    const ry = i * 5.2;
    const offsetX = Math.sin(i * 0.55) * 7;
    const offsetY = Math.cos(i * 0.4) * 5;
    lines.push({ rx, ry, ox: offsetX, oy: offsetY, i });
  }
  return (
    <svg viewBox="0 0 420 330" width="400" height="314">
      <defs>
        <clipPath id="finger-clip">
          <ellipse cx={cx} cy={cy} rx="188" ry="145" />
        </clipPath>
        <mask id="pg-mask">
          <rect width="420" height="330" fill="white" />
          <text x={cx} y={cy + 42} textAnchor="middle"
            fontFamily={fontD} fontWeight="400" fontSize="178"
            fill="black" letterSpacing="-8">P</text>
          <text x={cx} y={cy + 42} textAnchor="middle"
            fontFamily={fontD} fontStyle="italic" fontWeight="400" fontSize="178"
            fill="black" letterSpacing="-8" transform="translate(54 0)">G</text>
        </mask>
      </defs>
      {/* Fingerprint whorls — clipped to oval */}
      <g clipPath="url(#finger-clip)" mask="url(#pg-mask)">
        {lines.map(({ rx, ry, ox, oy, i }) => (
          <ellipse key={i}
            cx={cx + ox} cy={cy + oy}
            rx={rx} ry={ry}
            fill="none"
            stroke={C.mahogany}
            strokeWidth="1.4"
            opacity={0.55 + (i / 28) * 0.35}
          />
        ))}
      </g>
      {/* Ghost PG outline so it reads */}
      <text x={cx} y={cy + 42} textAnchor="middle"
        fontFamily={fontD} fontWeight="400" fontSize="178"
        fill="none" stroke={C.gold} strokeWidth=".7" letterSpacing="-8" opacity=".25">P</text>
      <text x={cx} y={cy + 42} textAnchor="middle"
        fontFamily={fontD} fontStyle="italic" fontWeight="400" fontSize="178"
        fill="none" stroke={C.gold} strokeWidth=".7" letterSpacing="-8" opacity=".25"
        transform="translate(54 0)">G</text>
      {/* outer oval */}
      <ellipse cx={cx} cy={cy} rx="188" ry="145" fill="none" stroke={C.cedar} strokeWidth=".8" opacity=".35" />
      <text x={cx} y={cy + 145 + 22} textAnchor="middle"
        fontFamily={fontB} fontSize="9" fontWeight="700"
        letterSpacing="7" fill={C.cedar} opacity=".6">PETER · GROSS</text>
    </svg>
  );
}

// 14 — Moon Phase / Tuning
// Six circles in a row — lit like lunar phases — echo the six tuning pegs.
// The shadow-shape carved across them draws PG.
function Logo14() {
  const phases = [0.08, 0.25, 0.5, 0.75, 0.92, 1.0]; // illumination 0–1
  const r = 28;
  const spacing = 68;
  const startX = 44;
  const cy = 110;
  return (
    <svg viewBox="0 0 440 220" width="420" height="210">
      {/* Moon phase circles */}
      {phases.map((lit, i) => {
        const cx = startX + i * spacing;
        const sweepDir = lit <= 0.5 ? 0 : 1;
        const waxX = cx + r * Math.cos(Math.PI * (1 - lit * 2));
        // Simple: dark circle + bright crescent clipped
        return (
          <g key={i}>
            {/* dark side */}
            <circle cx={cx} cy={cy} r={r} fill={C.mahogany} />
            {/* lit crescent */}
            <circle cx={cx} cy={cy} r={r}
              fill={C.cream} opacity={0.1 + lit * 0.7} />
            {/* Shadow overlay crescent */}
            <path
              d={`M ${cx} ${cy - r}
                  A ${r} ${r} 0 0 ${i < 3 ? 0 : 1} ${cx} ${cy + r}
                  A ${Math.abs(r * (1 - lit * 2))} ${r} 0 0 ${i < 3 ? 1 : 0} ${cx} ${cy - r} Z`}
              fill={C.black} opacity=".7"
            />
            <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.gold} strokeWidth=".8" opacity=".6" />
          </g>
        );
      })}
      {/* Six tuning-peg stems */}
      {phases.map((_, i) => {
        const cx = startX + i * spacing;
        return <line key={i} x1={cx} y1={cy + r} x2={cx} y2={cy + r + 16}
          stroke={C.gold} strokeWidth=".8" opacity=".5" />;
      })}
      {/* PG lettering below the phases */}
      <text x="220" y="192" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="52"
        fill={C.mahogany} letterSpacing="-2">
        <tspan>Peter</tspan>
        <tspan fontStyle="italic" fill={C.cedar} dx="10">Gross</tspan>
      </text>
      {/* Thin rule above name */}
      <line x1="44" y1="170" x2="396" y2="170" stroke={C.gold} strokeWidth=".6" opacity=".35" />
      {/* tiny label */}
      <text x="220" y="208" textAnchor="middle"
        fontFamily={fontB} fontSize="8" fontWeight="700"
        letterSpacing="7" fill={C.cedar} opacity=".55">SOLO · ACOUSTIC · GUITAR</text>
    </svg>
  );
}

// 15 — Torn Reveal
// A piece of warm-white paper is torn back at the corner to expose
// cedar-grain wood beneath; PG is branded into the wood.
function Logo15() {
  return (
    <svg viewBox="0 0 440 320" width="420" height="305">
      <defs>
        <filter id="grain15">
          <feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" seed="12" />
          <feDisplacementMap in="SourceGraphic" scale="3" />
        </filter>
        <filter id="shadow15" x="-5%" y="-5%" width="115%" height="115%">
          <feDropShadow dx="4" dy="4" stdDeviation="6" floodColor={C.black} floodOpacity=".35" />
        </filter>
        {/* Wood grain pattern */}
        <pattern id="wood15" width="440" height="320" patternUnits="userSpaceOnUse">
          <rect width="440" height="320" fill={C.cedar} opacity=".55" />
          {Array.from({length: 12}).map((_, i) => (
            <path key={i}
              d={`M 0 ${26*i+8} Q 110 ${26*i+3+i%3} 220 ${26*i+8} Q 330 ${26*i+13-i%3} 440 ${26*i+8}`}
              stroke={C.mahogany} strokeWidth=".8" fill="none" opacity=".28" />
          ))}
        </pattern>
        <clipPath id="torn-clip">
          {/* Torn paper shape — irregular edge */}
          <polygon points="0,0 440,0 440,320 200,320 160,290 120,310 80,280 30,305 0,320" />
        </clipPath>
      </defs>
      {/* Wood base */}
      <rect width="440" height="320" fill="url(#wood15)" />
      {/* PG branded into the wood */}
      <text x="220" y="215" textAnchor="middle"
        fontFamily={fontD} fontWeight="400" fontSize="200"
        fill={C.mahogany} letterSpacing="-8" filter="url(#grain15)" opacity=".9">
        <tspan>P</tspan><tspan fontStyle="italic" dx="-10">G</tspan>
      </text>
      {/* Paper sheet on top — torn away at bottom-left corner */}
      <polygon
        points="0,0 440,0 440,320 200,320 165,292 118,311 78,281 28,307 0,320"
        fill={C.warmWhite}
        filter="url(#shadow15)"
      />
      {/* Cream paper texture / grain */}
      <polygon
        points="0,0 440,0 440,320 200,320 165,292 118,311 78,281 28,307 0,320"
        fill="none"
        stroke="rgba(44,24,16,.06)" strokeWidth="0"
      />
      {/* Ruled lines on the paper */}
      {Array.from({length: 7}).map((_, i) => (
        <line key={i} x1="44" y1={58 + i * 34} x2="396" y2={58 + i * 34}
          stroke="rgba(44,24,16,.07)" strokeWidth="1"
          clipPath="url(#torn-clip)" />
      ))}
      {/* PG printed on the paper in mahogany ink */}
      <text x="220" y="200" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="180"
        fill={C.mahogany} letterSpacing="-8" opacity=".12"
        clipPath="url(#torn-clip)">
        <tspan>P</tspan><tspan fontStyle="italic" dx="-10">G</tspan>
      </text>
      {/* Torn edge shadow line */}
      <polyline
        points="200,320 165,292 118,311 78,281 28,307 0,320"
        fill="none" stroke="rgba(44,24,16,.18)" strokeWidth="2"
      />
      {/* Label on the wood, below tear */}
      <text x="100" y="295" textAnchor="middle"
        fontFamily={fontD} fontStyle="italic" fontSize="17"
        fill={C.cream} opacity=".65">Peter Gross</text>
      <text x="100" y="312" textAnchor="middle"
        fontFamily={fontB} fontSize="8" fontWeight="700"
        letterSpacing="4" fill={C.cream} opacity=".4">ASHLAND · OR</text>
    </svg>
  );
}

// ═════════════════════════════════════════════
// SITE-INSPIRED SERIES — drawn from the website's words
// ═════════════════════════════════════════════

// 16 — Morning in the Siskiyous
function Logo16() {
  const peaks = [
    [0,260],[40,200],[80,230],[120,170],[160,195],
    [200,150],[240,190],[280,165],[320,200],[360,175],
    [400,210],[440,260]
  ];
  const d = peaks.map((p,i) => `${i===0?'M':'L'} ${p[0]} ${p[1]}`).join(' ') + ' L 440 340 L 0 340 Z';
  return (
    <svg viewBox="0 0 440 300" width="420" height="286">
      <defs>
        <radialGradient id="sun16" cx="50%" cy="58%" r="45%">
          <stop offset="0%" stopColor={C.gold} stopOpacity=".95" />
          <stop offset="40%" stopColor={C.gold} stopOpacity=".25" />
          <stop offset="100%" stopColor={C.gold} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sky16" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.black} />
          <stop offset="100%" stopColor={C.mahogany} />
        </linearGradient>
      </defs>
      <rect width="440" height="300" fill="url(#sky16)" />
      <circle cx="220" cy="168" r="130" fill="url(#sun16)" />
      <circle cx="220" cy="168" r="22" fill={C.gold} />
      <circle cx="220" cy="168" r="28" fill="none" stroke={C.gold} strokeWidth=".8" opacity=".55" />
      {Array.from({length: 18}).map((_, i) => {
        const a = (i * 20 - 170) * Math.PI / 180;
        const x1 = 220 + Math.cos(a) * 30;
        const y1 = 168 + Math.sin(a) * 30;
        const x2 = 220 + Math.cos(a) * (80 + (i%3)*30);
        const y2 = 168 + Math.sin(a) * (80 + (i%3)*30);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke={C.gold} strokeWidth={i%2===0?".8":".4"} opacity=".35" />;
      })}
      <path d={d} fill={C.black} />
      <text x="220" y="148" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="100"
        fill={C.black} letterSpacing="-4">
        <tspan>P</tspan>
        <tspan fontStyle="italic" fill={C.mahogany} dx="-6">G</tspan>
      </text>
      <text x="220" y="280" textAnchor="middle"
        fontFamily={fontD} fontStyle="italic" fontSize="13"
        fill={C.cream} opacity=".45">Morning in the Siskiyous</text>
    </svg>
  );
}

// 17 — Music That Breathes
function Logo17() {
  return (
    <svg viewBox="0 0 420 280" width="400" height="267">
      <defs>
        <filter id="breath-blur">
          <feGaussianBlur stdDeviation="7" result="blur" />
        </filter>
        <radialGradient id="fog1" cx="42%" cy="50%" r="55%">
          <stop offset="0%" stopColor={C.cream} stopOpacity=".55" />
          <stop offset="100%" stopColor={C.cream} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fog2" cx="60%" cy="48%" r="52%">
          <stop offset="0%" stopColor={C.gold} stopOpacity=".28" />
          <stop offset="100%" stopColor={C.gold} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="155" cy="128" rx="105" ry="82" fill="url(#fog1)" filter="url(#breath-blur)" />
      <ellipse cx="270" cy="122" rx="95" ry="78" fill="url(#fog2)" filter="url(#breath-blur)" />
      {[0,1,2,3,4].map(i => (
        <path key={i}
          d={`M ${305+i*9} ${98+i*15} Q ${345+i*6} ${78+i*12} ${395+i*4} ${108+i*10}`}
          fill="none" stroke={C.gold} strokeWidth=".6" opacity={.28 - i*.04}
          strokeLinecap="round" />
      ))}
      <text x="210" y="175" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="170"
        fill={C.mahogany} letterSpacing="-6" opacity=".92">
        <tspan>P</tspan>
        <tspan fontStyle="italic" fill={C.cedar} dx="-8">G</tspan>
      </text>
      <text x="210" y="248" textAnchor="middle"
        fontFamily={fontD} fontStyle="italic" fontSize="14"
        fill={C.textMid} opacity=".6">music that breathes and lingers</text>
    </svg>
  );
}

// 18 — Open Tuning Hex
function Logo18() {
  const notes = ['D','A','D','F#','A','D'];
  const hex = Array.from({length:6}).map((_,i) => {
    const a = (i * 60 - 90) * Math.PI / 180;
    return [220 + Math.cos(a) * 105, 160 + Math.sin(a) * 105];
  });
  return (
    <svg viewBox="0 0 440 320" width="420" height="305">
      <polygon points={hex.map(p => p.join(',')).join(' ')}
        fill="none" stroke={C.gold} strokeWidth="1.4" />
      <polygon points={hex.map(([x,y]) => {
        const a = Math.atan2(y-160, x-220);
        return [220+Math.cos(a)*95, 160+Math.sin(a)*95].join(',');
      }).join(' ')} fill="none" stroke={C.gold} strokeWidth=".4" opacity=".4" />
      {hex.map(([x,y],i) => (
        <line key={i} x1="220" y1="160" x2={x} y2={y}
          stroke={C.cedar} strokeWidth={.4 + i*.12} opacity=".4" />
      ))}
      {hex.map(([x,y],i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="18" fill={C.mahogany} stroke={C.gold} strokeWidth="1" />
          <text x={x} y={y+5} textAnchor="middle"
            fontFamily={fontD} fontStyle="italic" fontSize="14"
            fill={C.gold}>{notes[i]}</text>
        </g>
      ))}
      <circle cx="220" cy="160" r="58" fill={C.black} />
      <circle cx="220" cy="160" r="58" fill="none" stroke={C.gold} strokeWidth="1" opacity=".5" />
      <text x="220" y="178" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="60"
        fill={C.cream} letterSpacing="-3">
        <tspan>P</tspan>
        <tspan fontStyle="italic" fill={C.gold} dx="-3">G</tspan>
      </text>
      <text x="220" y="295" textAnchor="middle"
        fontFamily={fontB} fontSize="9" fontWeight="700"
        letterSpacing="6" fill={C.cedar} opacity=".65">OPEN · D · TUNING</text>
    </svg>
  );
}

// 19 — Stream of Consciousness
function Logo19() {
  return (
    <svg viewBox="0 0 480 260" width="460" height="248">
      <path
        d="M 30 220
           C 30 180 40 140 60 120
           C 80 100 95 95 95 95
           C 95 80 90 50 75 46
           C 62 44 54 58 58 74
           C 62 90 76 98 92 98
           C 114 98 130 84 130 64
           C 130 46 116 38 102 38
           C 84 38 70 52 70 70
           L 70 220"
        fill="none" stroke={C.cedar} strokeWidth="2.8"
        strokeLinecap="round" strokeLinejoin="round" opacity=".9" />
      <path
        d="M 200 220
           C 235 232 268 240 305 224
           C 355 202 372 160 366 126
           C 358 88 326 72 294 78
           C 264 84 248 108 248 132
           C 248 158 266 170 292 167
           C 314 164 328 148 328 130
           L 328 158"
        fill="none" stroke={C.cedar} strokeWidth="2.8"
        strokeLinecap="round" strokeLinejoin="round" opacity=".9" />
      <path
        d="M 335 162 Q 375 170 408 155 Q 440 140 465 152"
        fill="none" stroke={C.gold} strokeWidth="1.4"
        strokeLinecap="round" opacity=".5" />
      <path
        d="M 380 175 Q 415 168 445 178 Q 465 183 480 176"
        fill="none" stroke={C.gold} strokeWidth=".8"
        strokeLinecap="round" opacity=".3" />
      <path
        d="M 0 242 Q 120 222 240 237 Q 360 252 480 232 L 480 260 L 0 260 Z"
        fill={C.cedar} opacity=".07" />
      <text x="240" y="256" textAnchor="middle"
        fontFamily={fontD} fontStyle="italic" fontSize="12"
        fill={C.textMid} opacity=".55">a stream-of-consciousness approach</text>
    </svg>
  );
}

// 20 — Cedar Reverb
function Logo20() {
  return (
    <svg viewBox="0 0 380 380" width="360" height="360">
      <defs>
        <radialGradient id="cedar-grad20" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={C.gold} stopOpacity=".18" />
          <stop offset="60%" stopColor={C.cedar} stopOpacity=".08" />
          <stop offset="100%" stopColor={C.mahogany} stopOpacity="0" />
        </radialGradient>
        <path id="label-arc20" d="M 190 190 m -148 0 a 148 148 0 1 1 296 0" fill="none" />
      </defs>
      {Array.from({length: 14}).map((_, i) => {
        const r = 18 + i * 12;
        const ox = Math.sin(i * 0.8) * 3;
        const oy = Math.cos(i * 0.6) * 2;
        const w = i < 4 ? 1.4 : i < 9 ? 1 : .6;
        const op = i < 3 ? .9 : i < 8 ? .65 : .38;
        return <ellipse key={i} cx={190+ox} cy={190+oy} rx={r} ry={r*0.97}
          fill="none" stroke={C.cedar} strokeWidth={w} opacity={op} />;
      })}
      {[175, 195, 215].map((r, i) => (
        <circle key={i} cx="190" cy="190" r={r}
          fill="none" stroke={C.gold} strokeWidth=".8"
          opacity={.5 - i * .14} strokeDasharray="4 6" />
      ))}
      <circle cx="190" cy="190" r="172" fill="url(#cedar-grad20)" />
      {[-20,-8,4,16,28].map((dy, i) => (
        <path key={i}
          d={`M ${190 - Math.sqrt(172*172 - dy*dy)} ${190+dy} L ${190 + Math.sqrt(172*172 - dy*dy)} ${190+dy}`}
          stroke={C.mahogany} strokeWidth=".5" opacity=".2" />
      ))}
      <circle cx="190" cy="190" r="175" fill="none" stroke={C.mahogany} strokeWidth="5" opacity=".7" />
      <circle cx="190" cy="190" r="170" fill="none" stroke={C.cedar} strokeWidth="1" opacity=".5" />
      <text x="190" y="213" textAnchor="middle"
        fontFamily={fontD} fontWeight="300" fontSize="92"
        fill={C.mahogany} letterSpacing="-4">
        <tspan>P</tspan>
        <tspan fontStyle="italic" fill={C.gold} dx="-5">G</tspan>
      </text>
      <text fontFamily={fontB} fontSize="11" fontWeight="700" letterSpacing="8" fill={C.gold} opacity=".7">
        <textPath href="#label-arc20" startOffset="50%" textAnchor="middle">
          CEDAR · REVERB · ASHLAND · OR
        </textPath>
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────
// Main Canvas
// ─────────────────────────────────────────────
function App() {
  return (
    <DesignCanvas>
      {/* Header */}
      <div style={{
        padding: '0 60px 48px', maxWidth: 1200,
      }}>
        <div style={{
          fontSize: 10, fontWeight: 700, letterSpacing: '.3em',
          textTransform: 'uppercase', color: C.cedar, marginBottom: 14,
          fontFamily: fontB,
        }}>Logo Exploration · Cedar Reverb</div>
        <h1 style={{
          fontFamily: fontD, fontWeight: 300, fontSize: 64,
          lineHeight: .95, letterSpacing: '-.02em', color: C.mahogany,
          marginBottom: 16,
        }}>
          Peter <em style={{ color: C.cedar, fontStyle: 'italic' }}>Gross</em> — PG Marks
        </h1>
        <p style={{
          fontFamily: fontD, fontStyle: 'italic', fontWeight: 300,
          fontSize: 20, color: C.textMid, maxWidth: 680, lineHeight: 1.55,
        }}>
          Six monogram directions for an acoustic-guitar solo artist. Each mark is shown at full size,
          inverted on black, and paired with the Fraunces wordmark for identity context.
        </p>
        <div style={{
          width: 60, height: 1, background: C.gold, marginTop: 28, opacity: .8,
        }} />
      </div>

      <DCSection
        title="Primary Direction"
        subtitle="Ornamental, rooted in traditional luthier craft"
      >
        <LogoBlock num="1" title="Rosette Monogram" subtitle="Guitar-soundhole mandala, PG at the center" dark>
          <Logo01 />
        </LogoBlock>
        <LogoBlock num="2" title="String Ligature" subtitle="Bold serif PG threaded by six strings">
          <Logo02 />
        </LogoBlock>
      </DCSection>

      <DCSection
        title="Emblem Direction"
        subtitle="Stamp, seal, headstock — objects that read as trademarks"
      >
        <LogoBlock num="3" title="Soundhole Seal" subtitle="Circular maker's mark with curved typography" dark>
          <Logo03 />
        </LogoBlock>
        <LogoBlock num="4" title="Headstock Mark" subtitle="Tuning-peg headstock framing the monogram">
          <Logo04 />
        </LogoBlock>
      </DCSection>

      <DCSection
        title="Minimal Direction"
        subtitle="Type-led, more modern, works small"
      >
        <LogoBlock num="5" title="Waveform Ligature" subtitle="P and G joined by a resonant soundwave">
          <Logo05 />
        </LogoBlock>
        <LogoBlock num="6" title="Fretboard Monogram" subtitle="Vertical fretboard, PG stacked between frets" dark>
          <Logo06 />
        </LogoBlock>
      </DCSection>

      <DCSection
        title="Experimental Direction"
        subtitle="Bolder, riskier — less literal, more expressive"
      >
        <LogoBlock num="7" title="G-as-Soundhole" subtitle="The G's counter becomes the guitar body">
          <Logo07 />
        </LogoBlock>
        <LogoBlock num="8" title="Plectrum Mark" subtitle="PG die-cut from a solid guitar pick" dark>
          <Logo08 />
        </LogoBlock>
        <LogoBlock num="9" title="Ampersand Lockup" subtitle="P & G bound by a luthier's scroll flourish">
          <Logo09 />
        </LogoBlock>
        <LogoBlock num="10" title="Tablature Sketch" subtitle="Hand-written guitar tab — loose and personal" dark>
          <Logo10 />
        </LogoBlock>
      </DCSection>

      <DCSection
        title="G-as-Soundhole · Variations"
        subtitle="Five riffs on concept #7 — matched-type, full-body, vintage decal, line-art, branded"
      >
        <LogoBlock num="7A" title="Matched Serif" subtitle="Same Fraunces weight for both P and G — roman throughout" dark>
          <Logo7A />
        </LogoBlock>
        <LogoBlock num="7B" title="Full Acoustic Body" subtitle="G expands into a full dreadnought, P becomes the headstock">
          <Logo7B />
        </LogoBlock>
        <LogoBlock num="7C" title="Vintage Decal" subtitle="Oval guitar-brand plate with curved maker's text" dark>
          <Logo7C />
        </LogoBlock>
        <LogoBlock num="7D" title="Line-art Minimal" subtitle="Monoline letters, ring soundhole — works at favicon size">
          <Logo7D />
        </LogoBlock>
        <LogoBlock num="7E" title="Branded / Woodburn" subtitle="Matched stencil type, rough burnt edge, stamped into cedar" dark>
          <Logo7E />
        </LogoBlock>
      </DCSection>

      <DCSection
        title="Free Form Series"
        subtitle="Complete creative latitude — five new directions beyond guitar-as-object"
      >
        <LogoBlock num="11" title="Constellation" subtitle="P & G as star charts, strings become light trails" dark>
          <Logo11 />
        </LogoBlock>
        <LogoBlock num="12" title="Cathedral Arch" subtitle="Guitar-bout curves become a gothic arch, PG inscribed within">
          <Logo12 />
        </LogoBlock>
        <LogoBlock num="13" title="Fingerprint" subtitle="Concentric whorls forming PG in negative space — intimate, individual" dark>
          <Logo13 />
        </LogoBlock>
        <LogoBlock num="14" title="Moon Phase" subtitle="Six tuning-peg circles lit like lunar phases, PG below">
          <Logo14 />
        </LogoBlock>
        <LogoBlock num="15" title="Torn Reveal" subtitle="Cream paper torn back to expose cedar-grain wood and branded PG" dark>
          <Logo15 />
        </LogoBlock>
      </DCSection>

      <DCSection
        title="Site-Inspired Series"
        subtitle="Drawn from the website's own words — tracks, philosophy, place, tuning"
      >
        <LogoBlock num="16" title="Morning in the Siskiyous" subtitle="Featured track — PG rising as the sun over the mountain peaks" dark>
          <Logo16 />
        </LogoBlock>
        <LogoBlock num="17" title="Music That Breathes" subtitle="From the bio — PG formed from exhaled fog and warmth">
          <Logo17 />
        </LogoBlock>
        <LogoBlock num="18" title="Open Tuning Hex" subtitle="Open-D string names orbiting PG in a hexagon" dark>
          <Logo18 />
        </LogoBlock>
        <LogoBlock num="19" title="Stream of Consciousness" subtitle="A single flowing line draws PG and drifts into the landscape">
          <Logo19 />
        </LogoBlock>
        <LogoBlock num="20" title="Cedar Reverb" subtitle="PG at the heartwood of a cedar cross-section, rings as reverb echoes" dark>
          <Logo20 />
        </LogoBlock>
      </DCSection>

      <DCPostIt top={80} right={120} rotate={3} width={220}>
        All marks use Fraunces (display) + Lato (label). Gold stays at #C9A96E — single accent, paired with mahogany and cream.
      </DCPostIt>

      <DCPostIt top={560} left={60} rotate={-2} width={200}>
        Strip under each mark shows the logo inverted on black + the full "Peter Gross" wordmark for lockup reference.
      </DCPostIt>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
