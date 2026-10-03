/**
 * DoodleArt — playful flat illustration panel in the Colossal spirit:
 * a blue laptop blooming with shapes, teal vines, a cream sun,
 * coral blob-friend, stars and flowers on deep olive black.
 * Pure inline SVG, no assets needed.
 */
const DoodleArt = () => {
  return (
    <div
      className="relative overflow-hidden rounded-[28px] border border-[#fff7e8]/12 bg-[#0c120e]"
      role="img"
      aria-label="Playful illustration of a laptop surrounded by plants, stars and shapes"
    >
      {/* faint dotted texture */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,247,232,0.07) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      <svg viewBox="0 0 800 440" className="relative w-full h-auto block" aria-hidden="true">
        {/* cream sun */}
        <g className="animate-float-soft">
          <circle cx="660" cy="86" r="52" fill="#FFF7E8" />
          <circle cx="660" cy="86" r="52" fill="none" stroke="#0a0d0b" strokeWidth="5" opacity="0.12" />
          <circle cx="643" cy="72" r="7" fill="#F2C94C" />
          <circle cx="678" cy="98" r="5" fill="#F2705C" />
        </g>

        {/* yellow lightning */}
        <polygon
          points="120,60 146,60 128,104 152,104 112,168 124,112 102,112"
          fill="#F2C94C"
          className="animate-wiggle"
          style={{ transformOrigin: '127px 114px' }}
        />

        {/* stars */}
        <g fill="#F2C94C">
          <polygon points="250,52 256,68 272,74 256,80 250,96 244,80 228,74 244,68" />
          <polygon points="560,190 564,200 574,204 564,208 560,218 556,208 546,204 556,200" />
        </g>
        <g fill="#F5A8B8">
          <polygon points="330,300 334,310 344,314 334,318 330,328 326,318 316,314 326,310" />
          <polygon points="706,250 710,260 720,264 710,268 706,278 702,268 692,264 702,260" />
        </g>

        {/* left vine */}
        <g stroke="#3E8E5A" strokeWidth="9" fill="none" strokeLinecap="round">
          <path d="M60 420 C 50 330, 90 300, 70 220 C 55 160, 95 130, 85 80" />
        </g>
        <g fill="#3E8E5A">
          <ellipse cx="52" cy="350" rx="22" ry="11" transform="rotate(-30 52 350)" />
          <ellipse cx="88" cy="310" rx="22" ry="11" transform="rotate(25 88 310)" />
          <ellipse cx="58" cy="262" rx="22" ry="11" transform="rotate(-30 58 262)" />
          <ellipse cx="92" cy="214" rx="22" ry="11" transform="rotate(25 92 214)" />
          <ellipse cx="80" cy="160" rx="20" ry="10" transform="rotate(-25 80 160)" />
          <ellipse cx="100" cy="112" rx="18" ry="9" transform="rotate(20 100 112)" />
        </g>

        {/* right vine */}
        <g stroke="#3E8E5A" strokeWidth="9" fill="none" strokeLinecap="round">
          <path d="M740 420 C 750 340, 710 310, 730 240 C 744 190, 712 160, 722 120" />
        </g>
        <g fill="#7ED492">
          <ellipse cx="748" cy="352" rx="22" ry="11" transform="rotate(30 748 352)" />
          <ellipse cx="714" cy="312" rx="22" ry="11" transform="rotate(-25 714 312)" />
          <ellipse cx="744" cy="264" rx="22" ry="11" transform="rotate(30 744 264)" />
          <ellipse cx="716" cy="216" rx="20" ry="10" transform="rotate(-25 716 216)" />
        </g>
        {/* hanging yellow leaves */}
        <g fill="#F2C94C">
          <ellipse cx="640" cy="230" rx="26" ry="32" transform="rotate(18 640 230)" />
          <ellipse cx="700" cy="180" rx="22" ry="27" transform="rotate(-14 700 180)" />
        </g>
        <g stroke="#0a0d0b" strokeWidth="3" opacity="0.35">
          <path d="M640 204 L640 256 M628 220 L652 220 M630 238 L650 238" />
          <path d="M700 158 L700 202 M690 172 L710 172 M691 188 L709 188" />
        </g>

        {/* cream paper platform */}
        <g className="animate-float-soft" style={{ animationDelay: '-3s' }}>
          <polygon points="180,420 240,240 560,240 620,420" fill="#FFF7E8" />
          <polygon points="180,420 240,240 290,240 230,420" fill="#0a0d0b" opacity="0.08" />
        </g>

        {/* blue laptop */}
        <g className="animate-float-soft" style={{ animationDelay: '-1.5s' }}>
          {/* screen */}
          <rect x="300" y="130" width="200" height="140" rx="14" fill="#2B5A8C" />
          <rect x="312" y="142" width="176" height="116" rx="8" fill="#5B9BD5" />
          {/* screen doodles */}
          <circle cx="400" cy="185" r="26" fill="#FFF7E8" />
          <circle cx="400" cy="185" r="11" fill="#0a0d0b" />
          <circle cx="404" cy="181" r="3.5" fill="#FFF7E8" />
          <ellipse cx="350" cy="225" rx="26" ry="16" fill="#F5A8B8" />
          <polygon points="450,150 456,164 470,170 456,176 450,190 444,176 430,170 444,164" fill="#F2C94C" />
          <path d="M330 160 q 12 -14 24 0 q 12 14 24 0" stroke="#F2C94C" strokeWidth="6" fill="none" strokeLinecap="round" />
          <polygon points="455,225 475,225 468,205 462,205" fill="#FFF7E8" />
          <polygon points="478,225 498,225 491,208 485,208" fill="#FFF7E8" opacity="0.7" />
          {/* base */}
          <polygon points="280,270 520,270 548,318 252,318" fill="#1c1c1f" />
          <polygon points="280,270 520,270 528,286 272,286" fill="#2e2e33" />
          <g stroke="#4a4a52" strokeWidth="3">
            <line x1="300" y1="296" x2="500" y2="296" />
            <line x1="310" y1="306" x2="490" y2="306" />
          </g>
          <rect x="372" y="288" width="56" height="10" rx="5" fill="#4a4a52" />
        </g>

        {/* coral blob friend */}
        <g className="animate-float-soft" style={{ animationDelay: '-5s' }}>
          <ellipse cx="252" cy="330" rx="44" ry="52" fill="#F2705C" />
          <circle cx="252" cy="312" r="17" fill="#FFF7E8" />
          <circle cx="252" cy="312" r="7.5" fill="#0a0d0b" />
          <path d="M236 348 q 16 12 32 0" stroke="#0a0d0b" strokeWidth="4" fill="none" strokeLinecap="round" />
          <ellipse cx="222" cy="288" rx="10" ry="16" fill="#F2705C" transform="rotate(-20 222 288)" />
        </g>

        {/* squiggle snakes */}
        <path
          d="M500 130 q 20 -26 44 -18 q 22 8 14 32 q -8 22 14 28"
          stroke="#F2C94C" strokeWidth="10" fill="none" strokeLinecap="round"
        />
        <path
          d="M548 140 q 16 -22 36 -16"
          stroke="#F5A8B8" strokeWidth="9" fill="none" strokeLinecap="round"
        />

        {/* flowers */}
        <g className="animate-float-soft" style={{ animationDelay: '-2s' }}>
          <line x1="150" y1="420" x2="150" y2="350" stroke="#7ED492" strokeWidth="7" strokeLinecap="round" />
          <circle cx="150" cy="336" r="9" fill="#F2C94C" />
          <circle cx="132" cy="344" r="11" fill="#F2705C" />
          <circle cx="168" cy="344" r="11" fill="#F2705C" />
          <circle cx="141" cy="328" r="11" fill="#F2705C" />
          <circle cx="159" cy="328" r="11" fill="#F2705C" />
        </g>
        <g>
          <line x1="620" y1="420" x2="620" y2="356" stroke="#7ED492" strokeWidth="7" strokeLinecap="round" />
          <circle cx="620" cy="342" r="9" fill="#F2C94C" />
          <circle cx="602" cy="350" r="11" fill="#F5A8B8" />
          <circle cx="638" cy="350" r="11" fill="#F5A8B8" />
          <circle cx="611" cy="334" r="11" fill="#F5A8B8" />
          <circle cx="629" cy="334" r="11" fill="#F5A8B8" />
        </g>

        {/* ground dots */}
        <g fill="#FFF7E8" opacity="0.5">
          <circle cx="200" cy="400" r="4" />
          <circle cx="600" cy="402" r="4" />
          <circle cx="560" cy="386" r="3" />
          <circle cx="240" cy="388" r="3" />
        </g>
      </svg>
    </div>
  )
}

export default DoodleArt
