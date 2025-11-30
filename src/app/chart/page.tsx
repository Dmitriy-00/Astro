import { AstroWheel } from "../../components/AstroWheel";
import { AspectDiagram } from "../../components/AspectDiagram";
import { PlanetCard } from "../../components/PlanetCard";
import planets from "../../data/planets.json";
import { getPlanetPosition } from "../../lib/astro-core";

export default function ChartPage() {
  const today = new Date();
  const positions = planets.map((planet) => ({
    ...planet,
    position: getPlanetPosition(today, planet.name),
  }));

  return (
    <main className="page-container space-y-8">
      <h1 className="section-title">Натальная карта</h1>
      <p className="text-slate-300 max-w-2xl">
        Интерактивное колесо и аспектная структура. Используйте карту, чтобы увидеть распределение энергий по знакам и домам,
        обнаружить напряжения и потоки.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 items-start">
        <AstroWheel />
        <AspectDiagram />
      </div>

      <div className="grid-responsive">
        {positions.map((planet) => (
          <PlanetCard
            key={planet.name}
            name={planet.name}
            glyph={planet.glyph}
            color={planet.color}
            position={planet.position.degree}
          />
        ))}
      </div>
    </main>
  );
}
