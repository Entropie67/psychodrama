import { motion } from 'framer-motion';

export default function ProgressBar({ current, total }) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <div className="flex justify-between text-parchment/40 text-xs font-body mb-2 tracking-wider">
        <span>Question {current + 1} / {total}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-full h-[2px] bg-parchment/10 relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blood/80 to-gold/60"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute inset-y-0 left-0 h-full"
          style={{ width: `${progress}%` }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold/60 blur-sm" />
        </motion.div>
      </div>
    </div>
  );
}
