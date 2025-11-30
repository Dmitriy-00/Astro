import aspects from "../data/aspects.json";
import planets from "../data/planets.json";
import zodiac from "../data/zodiac.json";
import houses from "../data/houses.json";
import { CollectiveIndex } from "./collective";
import { ArchetypeVector } from "./archetypes";

export type Aspect = {
  planetA: string;
  planetB: string;
  aspect: string;
  angle: number;
};

export function getAspects(): Aspect[] {
  const pairs: Aspect[] = [];
  planets.forEach((planet, index) => {
    const next = planets[(index + 2) % planets.length];
    const aspectDef = aspects[(index + 1) % aspects.length];
    pairs.push({
      planetA: planet.name,
      planetB: next.name,
      aspect: aspectDef.name,
      angle: aspectDef.angle,
    });
  });
  return pairs;
}

export function getPlanetPosition(date: Date, planet: string) {
  const seed = date.getDate() + date.getMonth();
  const degree = (seed * 13 + planet.length * 7) % 360;
  const signIndex = Math.floor(degree / 30);
  const houseIndex = (signIndex + 1) % 12;
  return {
    degree,
    house: houses[houseIndex],
    sign: zodiac[signIndex],
  };
}

export type Forecast = {
  date: string;
  headline: string;
  tone: string;
};

export function getTransitForecast(dateRange: string[]): Forecast[] {
  return dateRange.map((day, idx) => ({
    date: day,
    headline: idx % 2 === 0 ? "Расширение горизонтов" : "Сбор фокуса",
    tone: idx % 2 === 0 ? "Оптимистичный" : "Сдержанный",
  }));
}

export function calculateArchetypeActivation(): ArchetypeVector {
  return {
    visionary: 0.76,
    guardian: 0.58,
    trickster: 0.42,
    seer: 0.64,
  };
}

export function calculateCollectiveIndex(): CollectiveIndex {
  const now = new Date();
  return {
    anxiety: 0.67,
    fragmentation: 0.54,
    energy: 0.71,
    archetypalShift: now.getDay() / 10,
  };
}
