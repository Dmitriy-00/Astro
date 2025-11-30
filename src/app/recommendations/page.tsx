import { RecommendationList } from "../../components/RecommendationList";
import { AspectDiagram } from "../../components/AspectDiagram";

export default function RecommendationsPage() {
  return (
    <main className="page-container space-y-8">
      <h1 className="section-title">Рекомендации</h1>
      <p className="text-slate-300 max-w-2xl">
        Система синтезирует транзиты, архетипический фон и ваш профиль. Получите персональные и коллективные действия на ближайшие
        дни.
      </p>
      <div className="grid lg:grid-cols-2 gap-6">
        <RecommendationList />
        <AspectDiagram />
      </div>
    </main>
  );
}
