import { getTransitForecast } from "../lib/astro-core";

const days = ["Сегодня", "Завтра", "Через 2 дня", "Через 3 дня"];

export const Timeline = () => {
  const forecast = getTransitForecast(days);
  return (
    <div className="card">
      <h3 className="text-xl font-semibold text-white mb-3">Транзитный прогноз</h3>
      <div className="space-y-3">
        {forecast.map((item) => (
          <div key={item.date} className="flex items-center justify-between p-3 rounded-lg bg-[rgba(255,255,255,0.02)]">
            <div>
              <div className="text-sm text-slate-400 uppercase tracking-[0.2em]">{item.date}</div>
              <div className="text-lg text-white">{item.headline}</div>
            </div>
            <span className="text-cyan-300 text-sm">{item.tone}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
