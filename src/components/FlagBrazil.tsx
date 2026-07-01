export default function FlagBrazil({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 0.7}
      viewBox="0 0 36 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Português (Brasil)"
    >
      {/* Green background */}
      <rect width="36" height="25" rx="3" fill="#009739" />
      {/* Yellow diamond */}
      <polygon points="18,3 30,12.5 18,22 6,12.5" fill="#FEDD00" />
      {/* Blue circle */}
      <circle cx="18" cy="12.5" r="5.5" fill="#002776" />
      {/* White arc (simplified) */}
      <path
        d="M13 13.5 Q18 17 23 13.5"
        stroke="white"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
