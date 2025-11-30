import { motion } from "framer-motion";
import { buildRecommendations } from "../lib/recommendations";

export const RecommendationList = () => {
  const recommendations = buildRecommendations();

  return (
    <div className="grid-responsive">
      {recommendations.map((rec, idx) => (
        <motion.div
          key={rec.title}
          className="card"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-white">{rec.title}</h3>
            <span className="text-xs px-2 py-1 rounded-full border border-[rgba(110,246,255,0.2)] text-slate-200 uppercase tracking-[0.2em]">
              {rec.type}
            </span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">{rec.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
