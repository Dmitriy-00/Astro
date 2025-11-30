import { AstroWheel } from "../../components/AstroWheel";
import { RecommendationList } from "../../components/RecommendationList";
import { calculateArchetypeActivation, getAspects } from "../../lib/astro-core";

export default function ProfilePage() {
  const activation = calculateArchetypeActivation();
  const aspects = getAspects();

  return (
    <main className="page-container space-y-8">
      <h1 className="section-title">Профиль пользователя</h1>
      <p className="text-slate-300 max-w-2xl">
        Личная карта, активные архетипы, индекс лиминальности и быстрые рекомендации. Данные хранятся локально — это прототип.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <AstroWheel />
        <div className="space-y-3">
          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-2">Активация архетипов</h3>
            <div className="space-y-2 text-sm text-slate-200">
              {Object.entries(activation).map(([id, value]) => (
                <div key={id} className="flex items-center gap-2">
                  <div className="w-24 uppercase tracking-[0.2em] text-xs text-slate-400">{id}</div>
                  <div className="flex-1 h-2 bg-[rgba(110,246,255,0.12)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-400 to-cyan-300"
                      style={{ width: `${value * 100}%` }}
                    />
                  </div>
                  <span className="text-slate-200 text-xs w-10 text-right">{Math.round(value * 100)}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-2">Текущие аспекты</h3>
            <ul className="text-sm text-slate-300 space-y-1">
              {aspects.slice(0, 4).map((aspect) => (
                <li key={aspect.planetA}>
                  {aspect.planetA} ↔ {aspect.planetB} · {aspect.aspect}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="section-title">Ваша траектория</h2>
        <RecommendationList />
      </section>
    </main>
  );
}
