import { AstroBackground } from "../components/AstroBackground";
import { AstroWheel } from "../components/AstroWheel";
import { CollectiveIndex } from "../components/CollectiveIndex";
import { ArchetypeGrid } from "../components/ArchetypeGrid";
import { RecommendationList } from "../components/RecommendationList";
import { Timeline } from "../components/Timeline";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="page-container space-y-10">
      <AstroBackground />
      <section className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">психогеография метасистемы</p>
          <h1 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Астрологический интерфейс взаимодействия с коллективным и личным бессознательным
          </h1>
          <p className="text-lg text-slate-200 max-w-xl">
            Сфера транзитов, архетипов и лиминальных зон, где визуальные карты превращаются в практические рекомендации.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {["астрокарта", "коллективный индекс", "архетипы", "рекомендации"].map((item) => (
              <span key={item} className="px-3 py-1 rounded-full border border-[rgba(110,246,255,0.3)] text-cyan-200">
                {item}
              </span>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <AstroWheel />
        </motion.div>
      </section>

      <CollectiveIndex />

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h2 className="section-title">Сегодня в мире</h2>
          <p className="text-slate-300 text-sm">
            Главный архетип дня, текущая энергия и ключевые аспекты формируют состояние поля. Используйте это как вход в лиминальную
            зону.
          </p>
          <Timeline />
        </div>
        <div className="space-y-4">
          <h2 className="section-title">Архетипический слой</h2>
          <ArchetypeGrid />
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="section-title">Рекомендации</h2>
          <p className="text-sm text-slate-300">Построены из аспектов, коллективного пульса и вашей роли</p>
        </div>
        <RecommendationList />
      </section>
    </main>
  );
}
