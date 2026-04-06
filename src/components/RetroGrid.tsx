'use client'

export function RetroGrid({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ perspective: '200px' }}
    >
      <div className="absolute inset-0" style={{ transform: 'rotateX(45deg)' }}>
        <div
          className="animate-grid-fade"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 182, 212, 0.05) 1px, transparent 0),
              linear-gradient(to bottom, rgba(6, 182, 212, 0.05) 1px, transparent 0)
            `,
            backgroundSize: '60px 60px',
            position: 'absolute',
            inset: '-200%',
          }}
        />
      </div>
      {/* Fade edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 30%, var(--color-space-black, #09090b) 70%)',
        }}
      />
    </div>
  )
}
