export default function FlagUSA({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 36 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="English (US)"
    >
      {/* Stripes */}
      <rect width="36" height="25" rx="3" fill="#B22234" />
      {[2, 6, 10, 14, 18, 22].map((y) => (
        <rect key={y} x="0" y={y} width="36" height="2" fill="white" />
      ))}
      {/* Canton (blue rectangle) */}
      <rect x="0" y="0" width="16" height="13" rx="0" fill="#3C3B6E" />
      {/* Stars (simplified - just dots) */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4, 5].map((col) => {
          if (row % 2 === 0 && col > 4) return null;
          if (row % 2 === 1 && col > 3) return null;
          const cx = row % 2 === 0 ? 1.5 + col * 2.8 : 2.8 + col * 2.8;
          const cy = 1.3 + row * 2.3;
          return (
            <circle key={`${row}-${col}`} cx={cx} cy={cy} r="0.7" fill="white" />
          );
        })
      )}
    </svg>
  );
}
