import { motion } from 'framer-motion';
import { axisLabels } from '../data/archetypes';

const AXES = ['feu', 'pouvoir', 'social', 'morale', 'conflit', 'vulnerabilite'];
const SIZE = 300;
const CENTER = SIZE / 2;
const RADIUS = SIZE / 2 - 40;
const LEVELS = 5;

function polarToCartesian(angle, radius) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(rad),
    y: CENTER + radius * Math.sin(rad),
  };
}

export default function RadarChart({ scores }) {
  const angleStep = 360 / AXES.length;

  const gridLines = [];
  for (let level = 1; level <= LEVELS; level++) {
    const r = (RADIUS / LEVELS) * level;
    const points = AXES.map((_, i) => {
      const p = polarToCartesian(i * angleStep, r);
      return `${p.x},${p.y}`;
    }).join(' ');
    gridLines.push(
      <polygon
        key={`grid-${level}`}
        points={points}
        fill="none"
        stroke="rgba(201, 168, 76, 0.1)"
        strokeWidth="0.5"
      />
    );
  }

  const axisLines = AXES.map((_, i) => {
    const p = polarToCartesian(i * angleStep, RADIUS);
    return (
      <line
        key={`axis-${i}`}
        x1={CENTER}
        y1={CENTER}
        x2={p.x}
        y2={p.y}
        stroke="rgba(201, 168, 76, 0.08)"
        strokeWidth="0.5"
      />
    );
  });

  const labels = AXES.map((axis, i) => {
    const p = polarToCartesian(i * angleStep, RADIUS + 24);
    return (
      <text
        key={`label-${i}`}
        x={p.x}
        y={p.y}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-parchment/50 text-[9px] font-body"
      >
        {axisLabels[axis]}
      </text>
    );
  });

  const valueLabels = AXES.map((axis, i) => {
    const value = scores[axis] || 0;
    const r = (value / 100) * RADIUS;
    const p = polarToCartesian(i * angleStep, r + 14);
    return (
      <text
        key={`value-${i}`}
        x={p.x}
        y={p.y}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-gold/70 text-[8px] font-display"
      >
        {value}
      </text>
    );
  });

  const dataPoints = AXES.map((axis, i) => {
    const value = scores[axis] || 0;
    const r = (value / 100) * RADIUS;
    return polarToCartesian(i * angleStep, r);
  });
  const dataPath = dataPoints.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <div className="flex justify-center">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full max-w-[300px] h-auto">
        {gridLines}
        {axisLines}
        {labels}

        <motion.polygon
          points={AXES.map(() => `${CENTER},${CENTER}`).join(' ')}
          animate={{ points: dataPath }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          fill="rgba(139, 0, 0, 0.2)"
          stroke="rgba(201, 168, 76, 0.6)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {dataPoints.map((p, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={CENTER}
            cy={CENTER}
            r="2.5"
            fill="rgba(201, 168, 76, 0.8)"
            animate={{ cx: p.x, cy: p.y }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 + i * 0.05 }}
          />
        ))}

        {valueLabels}
      </svg>
    </div>
  );
}
