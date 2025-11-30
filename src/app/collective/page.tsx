import { CollectiveIndex } from "../../components/CollectiveIndex";
import { ArchetypeGrid } from "../../components/ArchetypeGrid";

export default function CollectivePage() {
  return (
    <main className="page-container space-y-8">
      <h1 className="section-title">Коллективное бессознательное</h1>
      <p className="text-slate-300 max-w-2xl">
        Отслеживайте пульс культуры, фрагментацию смыслов и архетипические сдвиги. Данные обновляются от эфемерид и открытых
        источников.
      </p>

      <CollectiveIndex />

      <div className="space-y-3">
        <h2 className="section-title">Архетипические поля</h2>
        <ArchetypeGrid />
      </div>
    </main>
  );
}
