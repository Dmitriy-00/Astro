import { TransitMap } from "../../components/TransitMap";
import { Timeline } from "../../components/Timeline";

export default function TransitsPage() {
  return (
    <main className="page-container space-y-8">
      <h1 className="section-title">Текущие транзиты</h1>
      <p className="text-slate-300 max-w-2xl">
        Карта связей между планетами и оперативная линия времени. Наблюдайте за зонами напряжения и поддерживающими тропами.
      </p>
      <div className="grid lg:grid-cols-2 gap-6">
        <TransitMap />
        <Timeline />
      </div>
    </main>
  );
}
