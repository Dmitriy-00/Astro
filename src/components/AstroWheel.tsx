import { useMemo } from "react";
import { motion } from "framer-motion";
import zodiac from "../data/zodiac.json";
import planets from "../data/planets.json";

const radius = 140;

export const AstroWheel = () => {
  const positions = useMemo(
    () =>
      planets.map((planet, idx) => {
        const angle = ((idx / planets.length) * Math.PI * 2 + Math.PI / 4) % (Math.PI * 2);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return { ...planet, angle, x, y };
      }),
    []
  );

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="aspect-square rounded-full border border-[rgba(110,246,255,0.2)] bg-[rgba(22,27,46,0.6)] shadow-glow overflow-hidden">
        <svg viewBox="-200 -200 400 400" className="w-full h-full">
          {[...Array(12)].map((_, idx) => {
            const angle = (idx / 12) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const nextX = Math.cos(angle + Math.PI / 12) * (radius + 18);
            const nextY = Math.sin(angle + Math.PI / 12) * (radius + 18);
            return (
              <g key={idx}>
                <line x1={0} y1={0} x2={x} y2={y} stroke="rgba(110,246,255,0.15)" />
                <text
                  x={nextX}
                  y={nextY}
                  textAnchor="middle"
                  fill="#EAEFF8"
                  fontSize={10}
                  style={{ letterSpacing: 1 }}
                >
                  {zodiac[idx]}
                </text>
              </g>
            );
          })}

          <circle r={radius} stroke="rgba(188,124,255,0.35)" strokeWidth="1" fill="none" />
          <circle r={radius * 0.7} stroke="rgba(110,246,255,0.18)" strokeWidth="1" fill="none" />
          <circle r={radius * 0.4} stroke="rgba(110,246,255,0.12)" strokeWidth="1" fill="none" />

          {positions.map((planet) => (
            <motion.g
              key={planet.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * positions.indexOf(planet) }}
            >
              <motion.circle
                cx={planet.x}
                cy={planet.y}
                r={8}
                fill={planet.color}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <text x={planet.x + 14} y={planet.y + 4} fill="#EAEFF8" fontSize={11}>
                {planet.glyph} {planet.name}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>
      <p className="text-sm text-center text-slate-300 mt-3">
        Интерактивная схема: позиции планет и сектора сознания
      </p>
    </div>
  );
};
