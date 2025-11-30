import { calculateArchetypeActivation, getAspects } from "./astro-core";
import { getCollectivePulse } from "./collective";

export type Recommendation = {
  title: string;
  description: string;
  type: "personal" | "collective" | "ritual";
};

export function buildRecommendations(): Recommendation[] {
  const archetypes = calculateArchetypeActivation();
  const dominant = Object.entries(archetypes).sort((a, b) => b[1] - a[1])[0][0];
  const aspects = getAspects().slice(0, 2);
  const pulse = getCollectivePulse();

  return [
    {
      title: "Сфокусироваться на роли",
      description: `Архетип ${dominant} требует осознанного проявления. Подчеркните сильные стороны через дневник или публикацию.`,
      type: "personal",
    },
    {
      title: "Поддержать коллектив",
      description: `Показатели: ${pulse.map((p) => p.title).join(", ")}. Добавьте мягкую структурность в коммуникации.`,
      type: "collective",
    },
    {
      title: "Создать мост аспектов",
      description: `Проследите за аспектами ${aspects
        .map((a) => `${a.planetA} ↔ ${a.planetB}`)
        .join(" и ")}, разверните их в короткое действие`,
      type: "ritual",
    },
  ];
}
