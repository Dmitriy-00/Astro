import { motion } from "framer-motion";
import { calculateCollectiveIndex } from "../lib/astro-core";
import { getCollectivePulse } from "../lib/collective";

export const CollectiveIndex = () => {
  const pulse = calculateCollectiveIndex();
  const states = getCollectivePulse();

  return (
    <div className="card glow-border">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Collective index</p>
          <h3 className="text-2xl font-semibold text-cyan-200">Пульс коллективного бессознательного</h3>
        </div>
        <motion.div
          className="w-12 h-12 rounded-full border border-[rgba(110,246,255,0.2)] flex items-center justify-center text-xl text-cyan-300"
          animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(110,246,255,0.25)", "0 0 45px rgba(110,246,255,0.45)", "0 0 0 rgba(110,246,255,0.25)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {Math.round(pulse.energy * 100)}%
        </motion.div>
      </div>

      <div className="grid-responsive">
        {["anxiety", "fragmentation", "energy", "archetypalShift"].map((key) => (
          <div key={key} className="p-3 rounded-lg bg-[rgba(255,255,255,0.02)]">
            <div className="text-sm text-slate-300">{key}</div>
            <div className="h-2 bg-[rgba(110,246,255,0.15)] rounded-full overflow-hidden mt-2">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-300 to-violet-300"
                style={{ width: `${(pulse as any)[key] * 100}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${(pulse as any)[key] * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm text-slate-300">
        {states.map((state) => (
          <div key={state.title} className="p-3 rounded-xl border border-[rgba(188,124,255,0.18)] bg-[rgba(22,27,46,0.6)]">
            <div className="font-semibold text-white">{state.title}</div>
            <div className="text-xs opacity-70 mt-1">{Math.round(state.value * 100)}%</div>
            <p className="mt-2 opacity-80 leading-relaxed">{state.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
