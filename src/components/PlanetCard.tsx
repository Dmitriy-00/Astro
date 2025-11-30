import { motion } from "framer-motion";

type Props = {
  name: string;
  glyph: string;
  position: number;
  color: string;
};

export const PlanetCard: React.FC<Props> = ({ name, glyph, position, color }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
          style={{ background: `${color}22`, color }}
        >
          {glyph}
        </div>
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-slate-300">Позиция: {position.toFixed(1)}°</p>
        </div>
      </div>
    </motion.div>
  );
};
