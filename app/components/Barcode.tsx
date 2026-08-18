const BARS = [
  2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 1, 2, 4, 2, 1, 3, 1, 2, 2, 1, 3, 4, 1, 2, 1,
  3, 2, 1, 4, 1, 2, 3, 1, 2, 4, 2, 1, 3, 1, 2, 2, 1, 4, 1, 2, 1, 3, 1,
];

export default function Barcode({ className = "" }: { className?: string }) {
  const positions = BARS.reduce<number[]>(
    (acc, w, i) => [...acc, (acc[i - 1] ?? 0) + (i > 0 ? BARS[i - 1] + 1 : 0)],
    []
  );
  return (
    <svg
      viewBox="0 0 140 40"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {BARS.map((w, i) => (
        <rect
          key={i}
          x={positions[i]}
          y={0}
          width={w}
          height={40}
          fill={i % 2 === 0 ? "currentColor" : "transparent"}
        />
      ))}
    </svg>
  );
}