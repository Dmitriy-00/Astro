import planets from "../data/planets.json";

export type PlanetPosition = {
  name: string;
  degree: number;
  speed: number;
};

export function getEphemerisSnapshot(date: Date): PlanetPosition[] {
  const seed = date.getUTCDate();
  return planets.map((planet, idx) => ({
    name: planet.name,
    degree: (seed * (idx + 1) * 11) % 360,
    speed: planet.speed,
  }));
}
