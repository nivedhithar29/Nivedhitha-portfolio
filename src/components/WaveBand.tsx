/**
 * A layered, stylised ukiyo-e wave band rendered entirely in SVG.
 * Used as a decorative finale / divider, lightweight and on-palette.
 *
 * variant:
 *   'sea'     — cool teal/navy (default; the contact-section finale)
 *   'sunrise' — amber → warm cream → blush, so the hero resolves into
 *               the exact #FFEFF0 the About section opens with.
 */
export default function WaveBand({
  className = '',
  variant = 'sea',
}: {
  className?: string;
  variant?: 'sea' | 'sunrise';
}) {
  const sunrise = variant === 'sunrise';

  const back = sunrise ? '#FFD9A6' : '#AAC4DA';
  const crest = sunrise ? '#FFF5E6' : '#FFE9CF';
  const glow = sunrise ? '#F89128' : '#F89128';

  return (
    <svg
      className={className}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      fill="none"
      role="img"
      aria-label="A stylised ukiyo-e wave"
    >
      <defs>
        <linearGradient id={`wb-deep-${variant}`} x1="0" y1="0" x2="0" y2="1">
          {sunrise ? (
            <>
              <stop offset="0" stopColor="#FFF5E6" />
              <stop offset="1" stopColor="#FFEFF0" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#577A9A" />
              <stop offset="1" stopColor="#06346F" />
            </>
          )}
        </linearGradient>
        <linearGradient id={`wb-mid-${variant}`} x1="0" y1="0" x2="0" y2="1">
          {sunrise ? (
            <>
              <stop offset="0" stopColor="#FBC677" />
              <stop offset="1" stopColor="#FFF5E6" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#89A6C0" />
              <stop offset="1" stopColor="#577A9A" />
            </>
          )}
        </linearGradient>
      </defs>

      {/* back swell */}
      <path
        d="M0 150 C 180 90, 320 90, 480 150 S 820 230, 1000 150 S 1300 80, 1440 140 L 1440 320 L 0 320 Z"
        fill={back}
        opacity={sunrise ? 0.85 : 0.7}
      />
      {/* mid swell */}
      <path
        d="M0 190 C 200 130, 360 250, 560 190 S 900 120, 1080 200 S 1320 250, 1440 200 L 1440 320 L 0 320 Z"
        fill={`url(#wb-mid-${variant})`}
        opacity="0.92"
      />
      {/* foam crest line */}
      <path
        d="M0 196 C 200 136, 360 256, 560 196 S 900 126, 1080 206 S 1320 256, 1440 206"
        stroke={crest}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* front deep wave */}
      <path
        d="M0 244 C 240 200, 420 300, 680 250 S 1040 200, 1220 256 S 1380 290, 1440 262 L 1440 320 L 0 320 Z"
        fill={`url(#wb-deep-${variant})`}
      />
      {/* horizon glow */}
      <path
        d="M0 150 C 180 90, 320 90, 480 150 S 820 230, 1000 150 S 1300 80, 1440 140"
        stroke={glow}
        strokeWidth="2"
        opacity={sunrise ? 0.5 : 0.6}
      />
    </svg>
  );
}
