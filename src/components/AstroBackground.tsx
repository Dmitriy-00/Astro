import { motion } from "framer-motion";

export const AstroBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle,_rgba(188,124,255,0.08),_transparent_60%)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        style={{ top: "-20%", left: "-10%" }}
      />
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,_rgba(110,246,255,0.08),_transparent_65%)]"
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{ bottom: "-30%", right: "-5%" }}
      />
    </div>
  );
};
