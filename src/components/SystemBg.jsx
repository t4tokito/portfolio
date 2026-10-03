/**
 * SmoothBg — deep olive-black ambient background.
 * Warm sun glow + teal depth. Calm, editorial, colossal vibe.
 */
const SystemBg = () => {
  return (
    <div className="fixed inset-0 -z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#0a0d0b]" />

      {/* warm sun glow — top center */}
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full opacity-60 blur-3xl animate-float-soft"
        style={{
          background:
            'radial-gradient(closest-side, rgba(242,201,76,0.10), rgba(242,112,92,0.05), transparent)',
        }}
      />
      {/* teal depth — left */}
      <div
        className="absolute top-[35%] -left-40 w-[560px] h-[560px] rounded-full opacity-50 blur-3xl animate-float-soft"
        style={{
          background: 'radial-gradient(closest-side, rgba(70,207,169,0.09), transparent)',
          animationDelay: '-2s',
        }}
      />
      {/* deep green — right */}
      <div
        className="absolute top-[55%] -right-48 w-[620px] h-[620px] rounded-full opacity-50 blur-3xl animate-float-soft"
        style={{
          background: 'radial-gradient(closest-side, rgba(46,80,52,0.35), transparent)',
          animationDelay: '-4s',
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-px bg-gradient-to-r from-transparent via-[#f2c94c]/40 to-transparent" />
    </div>
  )
}

export default SystemBg
