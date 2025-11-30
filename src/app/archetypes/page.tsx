import { ArchetypeGrid } from "../../components/ArchetypeGrid";
import { calculateArchetypeActivation } from "../../lib/astro-core";

export default function ArchetypesPage() {
  const activation = calculateArchetypeActivation();
  return (
    <main className="page-container space-y-8">
      <h1 className="section-title">Архетипы и психогеография</h1>
      <p className="text-slate-300 max-w-2xl">
        Прогноз активности архетипов показывает, куда направляется внимание метасистемы. Используйте баланс, чтобы планировать
        переходы и ритуалы.
      </p>

      <div className="grid-responsive">
        {Object.entries(activation).map(([id, value]) => (
          <div key={id} className="card">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">{id}</div>
            <div className="text-2xl font-semibold text-white">{Math.round(value * 100)}%</div>
            <p className="text-sm text-slate-300 mt-1">Уровень активации</p>
          </div>
        ))}
      </div>

      <ArchetypeGrid />
    </main>
  );
}
