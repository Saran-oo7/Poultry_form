/*
 * Hand drawn inline SVG icon set for the farm.
 * Everything is vector + CSS animated, so there are no image files to host and
 * nothing breaks when the site is opened offline.
 *
 * Usage:  <Icon name="hen" size={48} />
 */

const P = {
  /* ---------------- Poultry ---------------- */
  hen: (
    <g>
      {/* tail feathers */}
      <path
        className="ic-tail"
        d="M17 38C7 35 5 22 12 15c1 9 7 12 10 17z"
        fill="var(--ic-2, #b45309)"
      />
      {/* body */}
      <ellipse cx="31" cy="38" rx="17" ry="14" fill="var(--ic-1, #f59e0b)" />
      {/* wing */}
      <path
        d="M24 36c6-5 15-4 19 2-4 6-13 8-19 2z"
        fill="var(--ic-2, #b45309)"
        opacity=".85"
      />
      {/* neck */}
      <path d="M38 30l3-9 10 3-2 12z" fill="var(--ic-1, #f59e0b)" />
      {/* head */}
      <circle cx="46" cy="21" r="9" fill="var(--ic-1, #f59e0b)" />
      {/* comb */}
      <path
        className="ic-comb"
        d="M40 13q2-6 4.5-1 2.5-6 5-1 2.5-5 4 1-1.5 3-6.5 3.5T40 13z"
        fill="var(--ic-red, #dc2626)"
      />
      {/* wattle */}
      <path
        className="ic-comb"
        d="M50 28q4 3 1.5 6.5Q47 33 48.5 28z"
        fill="var(--ic-red, #dc2626)"
      />
      {/* beak */}
      <path d="M54 21l9 3-9 3.5z" fill="var(--ic-beak, #f97316)" />
      {/* eye */}
      <circle className="ic-eye" cx="48" cy="19" r="2" fill="#26201a" />
      {/* legs */}
      <g
        stroke="var(--ic-beak, #f97316)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M27 51v6M23.5 58.5h6M37 51v6M33.5 58.5h6" />
      </g>
    </g>
  ),

  rooster: (
    <g>
      {/* long tail */}
      <path
        className="ic-tail"
        d="M18 40C4 38 2 16 14 6c-1 14 6 20 10 26z"
        fill="var(--ic-2, #7c2d12)"
      />
      <path
        className="ic-tail"
        d="M18 41C8 41 4 26 12 16c1 11 7 15 11 20z"
        fill="var(--ic-red, #dc2626)"
        opacity=".75"
      />
      <ellipse cx="32" cy="39" rx="16" ry="14" fill="var(--ic-1, #c2410c)" />
      <path
        d="M25 37c6-5 15-4 19 2-4 6-13 8-19 2z"
        fill="var(--ic-2, #7c2d12)"
        opacity=".8"
      />
      <path d="M39 31l3-10 10 3-2 13z" fill="var(--ic-1, #c2410c)" />
      <circle cx="47" cy="20" r="9" fill="var(--ic-1, #c2410c)" />
      <path
        className="ic-comb"
        d="M39 12q2.5-8 5-2 3-8 6-2 3-7 4.5 1-2 3.5-7.5 4T39 12z"
        fill="var(--ic-red, #dc2626)"
      />
      <path
        className="ic-comb"
        d="M50 27q5 4 2 9-5-2-4-9z"
        fill="var(--ic-red, #dc2626)"
      />
      <path d="M55 20l9 3-9 3.5z" fill="var(--ic-beak, #f59e0b)" />
      <circle className="ic-eye" cx="49" cy="18" r="2" fill="#26201a" />
      <g
        stroke="var(--ic-beak, #f59e0b)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M28 52v5M24.5 58.5h6M38 52v5M34.5 58.5h6" />
      </g>
    </g>
  ),

  chick: (
    <g className="ic-hop">
      <ellipse cx="32" cy="38" rx="15" ry="14" fill="var(--ic-1, #fbbf24)" />
      <circle cx="32" cy="20" r="11" fill="var(--ic-1, #fbbf24)" />
      <path
        d="M20 38c4-4 9-4 12 0-3 5-8 5-12 0z"
        fill="var(--ic-2, #f59e0b)"
        opacity=".8"
      />
      <path d="M42 19l8 3-8 3z" fill="var(--ic-beak, #f97316)" />
      <circle className="ic-eye" cx="36" cy="18" r="2" fill="#26201a" />
      {/* head tuft */}
      <path
        className="ic-comb"
        d="M31 9q1-6 3-1 2-4 2 1z"
        fill="var(--ic-2, #f59e0b)"
      />
      <g
        stroke="var(--ic-beak, #f97316)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M28 51v6M24.5 58.5h6M37 51v6M33.5 58.5h6" />
      </g>
    </g>
  ),

  egg: (
    <g className="ic-wobble">
      <path
        d="M32 6c10 0 18 16 18 27a18 18 0 1 1-36 0C14 22 22 6 32 6z"
        fill="var(--ic-1, #fef3c7)"
        stroke="var(--ic-2, #d6b877)"
        strokeWidth="2"
      />
      <ellipse cx="25" cy="26" rx="4.5" ry="7" fill="#fff" opacity=".75" />
    </g>
  ),

  brooder: (
    <g>
      {/* lamp shade */}
      <path d="M32 8v6" stroke="var(--ic-2, #b45309)" strokeWidth="2.5" />
      <path d="M14 30 32 13l18 17z" fill="var(--ic-2, #b45309)" />
      {/* glow */}
      <circle className="ic-glow" cx="32" cy="32" r="7" fill="var(--ic-red, #f59e0b)" />
      <path
        className="ic-glow"
        d="M32 40c9 0 16 6 16 12H16c0-6 7-12 16-12z"
        fill="var(--ic-1, #fcd34d)"
        opacity=".55"
      />
      <g stroke="var(--ic-1, #fcd34d)" strokeWidth="2.2" strokeLinecap="round">
        <path className="ic-glow" d="M18 40l-5 5M46 40l5 5M32 44v7" />
      </g>
    </g>
  ),

  feed: (
    <g>
      {/* sack */}
      <path
        d="M20 20h24c3 10 4 20 3 30a4 4 0 0 1-4 4H21a4 4 0 0 1-4-4c-1-10 0-20 3-30z"
        fill="var(--ic-1, #a16207)"
      />
      <path d="M20 20l3-6h18l3 6z" fill="var(--ic-2, #713f12)" />
      <rect x="24" y="30" width="16" height="12" rx="2" fill="var(--ic-light, #fef3c7)" />
      {/* grains */}
      <g fill="var(--ic-2, #713f12)">
        <circle className="ic-grain" cx="29" cy="36" r="2" />
        <circle className="ic-grain" cx="35" cy="36" r="2" style={{ animationDelay: '.3s' }} />
      </g>
    </g>
  ),

  /* ---------------- Business ---------------- */
  truck: (
    <g>
      <rect x="4" y="20" width="30" height="22" rx="3" fill="var(--ic-1, #16a34a)" />
      <path d="M34 26h11l9 9v7H34z" fill="var(--ic-2, #15803d)" />
      <rect x="37" y="28" width="8" height="6" rx="1.5" fill="var(--ic-light, #dcfce7)" />
      {/* crate slats */}
      <g stroke="var(--ic-light, #dcfce7)" strokeWidth="2" opacity=".6">
        <path d="M10 26h18M10 32h18M10 38h18" />
      </g>
      <g fill="#26201a">
        <circle className="ic-wheel" cx="16" cy="47" r="6" />
        <circle className="ic-wheel" cx="45" cy="47" r="6" />
      </g>
      <g fill="#9ca3af">
        <circle cx="16" cy="47" r="2.4" />
        <circle cx="45" cy="47" r="2.4" />
      </g>
    </g>
  ),

  shield: (
    <g>
      <path
        d="M32 5l22 8v18c0 14-9 23-22 28C19 54 10 45 10 31V13z"
        fill="var(--ic-1, #0ea5e9)"
      />
      <path
        d="M32 11l16 6v14c0 10.5-6.6 17.6-16 21.6z"
        fill="var(--ic-2, #0284c7)"
      />
      <path
        className="ic-draw"
        d="M22 32l7 7 14-15"
        fill="none"
        stroke="#fff"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  ),

  chart: (
    <g>
      <rect x="6" y="8" width="52" height="48" rx="6" fill="var(--ic-light, #ecfdf5)" />
      <g fill="var(--ic-1, #16a34a)">
        <rect className="ic-bar" x="15" y="34" width="8" height="14" rx="2" />
        <rect className="ic-bar" x="28" y="26" width="8" height="22" rx="2" style={{ animationDelay: '.15s' }} />
        <rect className="ic-bar" x="41" y="16" width="8" height="32" rx="2" style={{ animationDelay: '.3s' }} />
      </g>
      <path
        className="ic-draw"
        d="M14 30l14-8 8 6 12-12"
        fill="none"
        stroke="var(--ic-2, #ea580c)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </g>
  ),

  award: (
    <g>
      <circle cx="32" cy="24" r="16" fill="var(--ic-1, #f59e0b)" />
      <circle cx="32" cy="24" r="11" fill="var(--ic-2, #b45309)" />
      <path
        d="M32 16l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L32 29.4 26.7 32.2l1.1-5.9-4.3-4.1 5.9-.8z"
        fill="#fff7ed"
      />
      <path d="M22 37l-4 20 14-7 14 7-4-20z" fill="var(--ic-red, #dc2626)" opacity=".9" />
    </g>
  ),

  leaf: (
    <g>
      <path
        className="ic-sway"
        d="M52 8C24 8 10 22 10 40c0 6 2 11 5 15 2-14 10-24 26-30-12 8-18 17-20 30 20 4 33-9 34-30 .3-6 0-11-3-17z"
        fill="var(--ic-1, #22c55e)"
      />
    </g>
  ),

  /* ---------------- Partner logo marks ---------------- */
  nest: (
    <g>
      <path d="M6 40h52c-3 10-13 16-26 16S9 50 6 40z" fill="var(--ic-2, #92400e)" />
      <g stroke="var(--ic-2, #92400e)" strokeWidth="2.4" strokeLinecap="round">
        <path d="M8 40q10-8 22-8t26 8" />
      </g>
      <g fill="var(--ic-1, #fef3c7)" stroke="var(--ic-2, #d6b877)" strokeWidth="1.6">
        <ellipse cx="24" cy="34" rx="7" ry="9" />
        <ellipse cx="40" cy="34" rx="7" ry="9" />
      </g>
    </g>
  ),

  mill: (
    <g>
      <path d="M12 24h40v32H12z" fill="var(--ic-1, #a16207)" />
      <path d="M32 4l24 20H8z" fill="var(--ic-2, #713f12)" />
      <rect x="24" y="34" width="16" height="22" rx="2" fill="var(--ic-light, #fef3c7)" />
      <circle cx="32" cy="20" r="4" fill="var(--ic-light, #fef3c7)" />
    </g>
  ),

  cart: (
    <g>
      <path
        d="M8 12h8l7 27h26"
        fill="none"
        stroke="var(--ic-1, #0ea5e9)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 18h36l-5 17H22z" fill="var(--ic-2, #38bdf8)" />
      <g fill="#26201a">
        <circle cx="25" cy="50" r="5" />
        <circle cx="45" cy="50" r="5" />
      </g>
    </g>
  ),

  /* ---------------- UI ---------------- */
  phone: (
    <path
      d="M14 8h10l5 12-6 4a26 26 0 0 0 13 13l4-6 12 5v10c0 3-2 5-5 5C25 51 12 38 9 13c0-3 2-5 5-5z"
      fill="currentColor"
    />
  ),
  mail: (
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round">
      <rect x="6" y="14" width="52" height="36" rx="5" />
      <path d="M8 18l24 17 24-17" />
    </g>
  ),
  pin: (
    <g fill="currentColor">
      <path d="M32 4c11 0 20 9 20 20 0 15-20 36-20 36S12 39 12 24c0-11 9-20 20-20z" />
      <circle cx="32" cy="23" r="7" fill="#fff" />
    </g>
  ),
  clock: (
    <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
      <circle cx="32" cy="32" r="24" />
      <path d="M32 17v16l11 7" />
    </g>
  ),
  whatsapp: (
    <path
      fill="currentColor"
      d="M32 6C17.6 6 6 17.6 6 32c0 4.6 1.2 9 3.4 12.8L6 58l13.6-3.3C23.3 56.8 27.6 58 32 58c14.4 0 26-11.6 26-26S46.4 6 32 6zm0 47c-4 0-7.9-1.1-11.2-3.1l-.8-.5-8.1 2 2.1-7.9-.5-.8A20.8 20.8 0 0 1 11 32c0-11.6 9.4-21 21-21s21 9.4 21 21-9.4 21-21 21zm11.6-15.7c-.6-.3-3.7-1.9-4.3-2.1-.6-.2-1-.3-1.4.3s-1.6 2.1-2 2.5c-.4.4-.7.5-1.3.2a17 17 0 0 1-8.4-7.3c-.6-1.1.6-1 1.8-3.4.2-.4.1-.8 0-1.1s-1.4-3.3-1.9-4.5c-.5-1.2-1-1-1.4-1h-1.2c-.4 0-1.1.2-1.7.8-.6.6-2.2 2.2-2.2 5.3s2.3 6.1 2.6 6.6c.3.4 4.5 6.9 10.9 9.7 4 1.7 5.6 1.9 7.7 1.6 1.2-.2 3.7-1.5 4.2-3 .5-1.5.5-2.7.4-3-.2-.3-.6-.4-1.2-.7z"
    />
  ),
  arrow: (
    <path
      d="M12 32h38m-14-14 14 14-14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  check: (
    <path
      d="M14 33l12 12 24-26"
      fill="none"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  menu: (
    <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
      <path d="M10 18h44M10 32h44M10 46h44" />
    </g>
  ),
  close: (
    <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
      <path d="M14 14l36 36M50 14L14 50" />
    </g>
  ),
  quote: (
    <path
      fill="currentColor"
      d="M22 14c-8 0-14 6-14 14s5 13 12 13c-1 6-5 8-9 9v6c12-1 20-11 20-26 0-10-4-16-9-16zm28 0c-8 0-14 6-14 14s5 13 12 13c-1 6-5 8-9 9v6c12-1 20-11 20-26 0-10-4-16-9-16z"
    />
  ),
}

export default function Icon({ name, size = 40, className = '', ...rest }) {
  const glyph = P[name]
  if (!glyph) return null
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={`icon icon-${name} ${className}`.trim()}
      role="img"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {glyph}
    </svg>
  )
}

export const iconNames = Object.keys(P)
