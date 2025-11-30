import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/chart", label: "Натальная карта" },
  { href: "/transits", label: "Транзиты" },
  { href: "/collective", label: "Коллектив" },
  { href: "/archetypes", label: "Архетипы" },
  { href: "/recommendations", label: "Рекомендации" },
  { href: "/profile", label: "Профиль" },
];

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-xl bg-[rgba(10,11,17,0.8)] border-b border-[rgba(110,246,255,0.12)]">
      <div className="page-container flex items-center gap-6 py-4">
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}>
          <Link href="/" className="text-lg font-semibold tracking-wide text-cyan-300">
            Психогеография
          </Link>
          <p className="text-xs text-slate-300">астрологический интерфейс метасистемы</p>
        </motion.div>
        <nav className="flex flex-wrap items-center gap-3 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1 rounded-full bg-[rgba(22,27,46,0.8)] border border-[rgba(188,124,255,0.2)] text-slate-200 hover:text-white hover:border-cyan-300 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
