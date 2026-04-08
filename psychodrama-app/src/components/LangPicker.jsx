import { motion } from 'framer-motion';

export default function LangPicker({ onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="font-cjk text-4xl md:text-6xl text-parchment/20 mb-6"
      >
        你到底是谁？
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-parchment/40 font-body text-sm tracking-[0.2em] uppercase mb-12"
      >
        Choisis ta langue · 选择语言
      </motion.div>

      <div className="flex gap-6">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 0, 0, 0.3)' }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect('fr')}
          className="px-10 py-5 border border-gold/40 bg-blood/5 hover:bg-blood/15
                     text-parchment font-display text-lg tracking-widest transition-colors cursor-pointer
                     focus:outline-none focus:ring-2 focus:ring-gold/50 min-w-[180px]"
        >
          <div className="text-gold text-xl mb-1">Français</div>
          <div className="text-parchment/30 text-xs font-body">法语</div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 0, 0, 0.3)' }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onSelect('cn')}
          className="px-10 py-5 border border-gold/40 bg-blood/5 hover:bg-blood/15
                     text-parchment font-display text-lg tracking-widest transition-colors cursor-pointer
                     focus:outline-none focus:ring-2 focus:ring-gold/50 min-w-[180px]"
        >
          <div className="text-gold text-xl mb-1 font-cjk">中文</div>
          <div className="text-parchment/30 text-xs font-body">Chinois</div>
        </motion.button>
      </div>
    </motion.div>
  );
}
