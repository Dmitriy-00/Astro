import { getAspects } from "../lib/astro-core";

export const AspectDiagram = () => {
  const aspects = getAspects();

  return (
    <div className="card">
      <h3 className="text-xl font-semibold text-white mb-3">Аспекты дня</h3>
      <div className="space-y-2 text-sm text-slate-200">
        {aspects.map((aspect) => (
          <div
            key={`${aspect.planetA}-${aspect.planetB}`}
            className="flex justify-between items-center p-2 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(110,246,255,0.08)]"
          >
            <div>
              <div className="font-semibold">
                {aspect.planetA} ↔ {aspect.planetB}
              </div>
              <div className="text-xs text-slate-400">{aspect.aspect}</div>
            </div>
            <div className="text-cyan-300 text-sm">{aspect.angle}°</div>
          </div>
        ))}
      </div>
    </div>
  );
};
