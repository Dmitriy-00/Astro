import { motion } from "framer-motion";
import { getArchetypes } from "../lib/archetypes";

export const ArchetypeGrid = () => {
  const archetypes = getArchetypes();
  return (
    <div className="grid-responsive">
      {archetypes.map((item, idx) => (
        <motion.article
          key={item.id}
          className="card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400">архетип</div>
          <h3 className="text-xl font-semibold" style={{ color: item.color }}>
            {item.title}
          </h3>
          <p className="text-sm text-slate-200 mt-2">Свет: {item.light}</p>
          <p className="text-sm text-slate-400">Тень: {item.shadow}</p>
        </motion.article>
      ))}
    </div>
  );
};
