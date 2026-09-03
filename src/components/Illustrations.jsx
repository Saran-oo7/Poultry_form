/*
 * Larger scene illustrations. Same idea as the icons: pure SVG, animated with
 * CSS, no external images required.
 */
import Icon from './Icons.jsx'

/* Sunrise farmyard used behind the hero. */
export function FarmScene() {
  return (
    <svg
      className="scene"
      viewBox="0 0 520 360"
      role="img"
      aria-label="Illustration of a poultry farm at sunrise with a shed, hens and chicks"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="55%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#fef3c7" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="100%" stopColor="#3f9142" />
        </linearGradient>
        <linearGradient id="roof" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
        <clipPath id="scene-clip">
          <rect x="0" y="0" width="520" height="360" rx="28" />
        </clipPath>
      </defs>

      <g clipPath="url(#scene-clip)">
        <rect width="520" height="360" fill="url(#sky)" />

        {/* sun */}
        <g className="sc-sun">
          <circle cx="410" cy="96" r="42" fill="#fbbf24" opacity=".35" />
          <circle cx="410" cy="96" r="30" fill="#f59e0b" />
        </g>

        {/* drifting clouds */}
        <g fill="#fffbeb" opacity=".9">
          <g className="sc-cloud sc-cloud-a">
            <ellipse cx="90" cy="72" rx="34" ry="16" />
            <ellipse cx="118" cy="66" rx="24" ry="18" />
            <ellipse cx="62" cy="68" rx="20" ry="13" />
          </g>
          <g className="sc-cloud sc-cloud-b" opacity=".7">
            <ellipse cx="300" cy="48" rx="28" ry="13" />
            <ellipse cx="322" cy="44" rx="19" ry="15" />
          </g>
        </g>

        {/* hills */}
        <path d="M-20 214q120-70 250-16 130 54 310-8v190H-20z" fill="#86efac" opacity=".7" />
        <path d="M-20 244q140-52 268-6 128 46 292-22v154H-20z" fill="url(#ground)" />

        {/* poultry shed */}
        <g className="sc-shed">
          <path d="M96 238V166h150v72z" fill="#fef3c7" />
          <path d="M84 168 171 116l87 52z" fill="url(#roof)" />
          <rect x="150" y="188" width="42" height="50" rx="3" fill="#92400e" />
          <rect x="112" y="186" width="28" height="22" rx="3" fill="#7dd3fc" stroke="#92400e" strokeWidth="3" />
          <rect x="202" y="186" width="28" height="22" rx="3" fill="#7dd3fc" stroke="#92400e" strokeWidth="3" />
          <path d="M171 128v22" stroke="#fef3c7" strokeWidth="4" />
          {/* weather vane rooster */}
          <g className="sc-vane">
            <path d="M164 128h16l-4-6 4-6h-16z" fill="#78350f" />
          </g>
        </g>

        {/* fence */}
        <g stroke="#a16207" strokeWidth="7" strokeLinecap="round">
          <path d="M288 250v-40M328 252v-40M368 254v-40M408 256v-40M448 258v-40M488 260v-40" />
          <path d="M280 224h216M280 244h216" strokeWidth="6" />
        </g>

        {/* feed trough */}
        <g>
          <path d="M300 300h84l-10 20h-64z" fill="#a16207" />
          <path d="M304 300h76l-3 6h-70z" fill="#fcd34d" />
        </g>

        {/* birds in the yard — animated on the <g>, not on the nested <svg>,
            because transforms on a nested svg are not reliable everywhere */}
        <g className="sc-bird-1">
          <Icon name="hen" x="52" y="248" width="86" height="86" />
        </g>
        <g className="sc-bird-2">
          <Icon name="rooster" x="176" y="244" width="92" height="92" />
        </g>
        <g className="sc-bird-3">
          <Icon name="chick" x="290" y="286" width="46" height="46" />
        </g>
        <g className="sc-bird-4">
          <Icon name="chick" x="336" y="288" width="42" height="42" />
        </g>
        <g className="sc-bird-5">
          <Icon name="egg" x="424" y="292" width="34" height="34" />
        </g>
        <Icon name="feed" x="452" y="256" width="66" height="66" />

        {/* floating feathers */}
        <g fill="#fff" opacity=".85">
          <path className="sc-feather sc-feather-1" d="M0 0c8-6 16-2 14 8-2 9-11 12-16 6-4-5-2-11 2-14z" />
          <path className="sc-feather sc-feather-2" d="M0 0c8-6 16-2 14 8-2 9-11 12-16 6-4-5-2-11 2-14z" />
          <path className="sc-feather sc-feather-3" d="M0 0c8-6 16-2 14 8-2 9-11 12-16 6-4-5-2-11 2-14z" />
        </g>

        {/* grass tufts */}
        <g stroke="#166534" strokeWidth="4" strokeLinecap="round" opacity=".55">
          <path className="sc-grass" d="M40 344c0-12 6-18 6-18M46 344c2-14 10-20 10-20" />
          <path className="sc-grass" d="M244 350c0-12 6-18 6-18M250 350c2-14 10-20 10-20" style={{ animationDelay: '.4s' }} />
          <path className="sc-grass" d="M470 344c0-12 6-18 6-18M476 344c2-14 10-20 10-20" style={{ animationDelay: '.8s' }} />
        </g>
      </g>
    </svg>
  )
}

/* Egg that cracks open into a chick — used as a small decorative loop. */
export function HatchScene() {
  return (
    <svg className="hatch" viewBox="0 0 120 120" role="img" aria-label="An egg hatching into a chick">
      <ellipse cx="60" cy="108" rx="34" ry="7" fill="#000" opacity=".12" />
      <g className="hatch-top">
        <path d="M60 18c9 0 17 14 18 25l-36 1C43 33 51 18 60 18z" fill="#fef3c7" stroke="#d6b877" strokeWidth="2" />
      </g>
      <g className="hatch-chick">
        <Icon name="chick" x="34" y="34" width="52" height="52" />
      </g>
      <path
        d="M28 62c0-2 32-9 32-9s32 7 32 9c0 16-14 30-32 30s-32-14-32-30z"
        fill="#fef3c7"
        stroke="#d6b877"
        strokeWidth="2"
      />
      <path d="M28 62l10-6 10 6 12-6 10 6 10-6 12 6" fill="none" stroke="#d6b877" strokeWidth="2" />
    </svg>
  )
}

/* Simple growth curve used in the growth-cycle section. */
export function GrowthCurve() {
  return (
    <svg className="curve" viewBox="0 0 420 200" role="img" aria-label="Broiler weight gain curve from day 0 to day 42">
      <defs>
        <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand)" stopOpacity=".45" />
          <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="var(--line)" strokeWidth="1">
        <path d="M40 20h360M40 65h360M40 110h360M40 155h360" />
      </g>
      <path
        className="curve-area"
        d="M40 165C110 160 150 140 200 105s90-70 160-85v185H40z"
        fill="url(#curveFill)"
      />
      <path
        className="curve-line"
        d="M40 165C110 160 150 140 200 105s90-70 160-85"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <g fill="var(--brand-dark)">
        <circle className="curve-dot" cx="40" cy="165" r="5" />
        <circle className="curve-dot" cx="130" cy="152" r="5" style={{ animationDelay: '.2s' }} />
        <circle className="curve-dot" cx="200" cy="105" r="5" style={{ animationDelay: '.4s' }} />
        <circle className="curve-dot" cx="280" cy="60" r="5" style={{ animationDelay: '.6s' }} />
        <circle className="curve-dot" cx="360" cy="20" r="5" style={{ animationDelay: '.8s' }} />
      </g>
      <g fill="var(--muted)" fontSize="12" textAnchor="middle">
        <text x="40" y="190">D0</text>
        <text x="130" y="190">D10</text>
        <text x="200" y="190">D24</text>
        <text x="280" y="190">D35</text>
        <text x="360" y="190">D42</text>
      </g>
    </svg>
  )
}
