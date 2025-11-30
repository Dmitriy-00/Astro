import { useMemo } from "react";
import { forceSimulation, forceManyBody, forceLink, forceCenter } from "d3-force";
import planets from "../data/planets.json";

export const TransitMap = () => {
  const nodes = useMemo(() => planets.map((planet) => ({ id: planet.name })), []);
  const links = useMemo(() => nodes.map((node, idx) => ({ source: node.id, target: nodes[(idx + 2) % nodes.length].id })), [nodes]);

  const positions = useMemo(() => {
    const sim = forceSimulation(nodes)
      .force("charge", forceManyBody().strength(-80))
      .force("link", forceLink(links).distance(90).strength(0.4))
      .force("center", forceCenter(0, 0))
      .stop();
    sim.tick(120);
    return nodes.map((node) => ({ ...node } as { id: string; x: number; y: number }));
  }, [links, nodes]);

  return (
    <div className="card">
      <h3 className="text-xl font-semibold text-white mb-3">Транзитные связи</h3>
      <svg viewBox="-200 -200 400 400" className="w-full h-[320px]">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(110,246,255,0.6)" />
            <stop offset="100%" stopColor="rgba(110,246,255,0)" />
          </radialGradient>
        </defs>
        {links.map((link, idx) => {
          const source = positions.find((p) => p.id === (link.source as string));
          const target = positions.find((p) => p.id === (link.target as string));
          if (!source || !target) return null;
          return (
            <line
              key={idx}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              stroke="rgba(188,124,255,0.35)"
              strokeWidth={1.2}
            />
          );
        })}
        {positions.map((node) => (
          <g key={node.id}>
            <circle cx={node.x} cy={node.y} r={14} fill="url(#nodeGlow)" />
            <circle
              cx={node.x}
              cy={node.y}
              r={8}
              fill="rgba(22,27,46,0.8)"
              stroke="rgba(110,246,255,0.7)"
              strokeWidth={1}
            />
            <text x={node.x + 12} y={node.y + 4} fontSize={11} fill="#EAEFF8">
              {node.id}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};
