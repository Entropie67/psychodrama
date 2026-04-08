import { motion } from 'framer-motion';
import { useLang } from '../LangContext';

export default function Question({ question, onAnswer, selectedAnswer }) {
  const lang = useLang();
  const fontClass = lang === 'cn' ? 'font-cjk' : '';

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-2xl mx-auto"
    >
      <h2 className={`text-xl md:text-2xl text-parchment leading-relaxed mb-8 text-center ${lang === 'cn' ? 'font-cjk' : 'font-display'}`}>
        {question.text}
      </h2>

      <div className="space-y-3">
        {question.choices.map((choice, index) => {
          const isSelected = selectedAnswer === index;
          return (
            <motion.button
              key={`${question.id}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.25 }}
              whileHover={{ x: 4, backgroundColor: 'rgba(139, 0, 0, 0.15)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAnswer(index)}
              className={`w-full text-left px-6 py-4 border transition-all duration-200 cursor-pointer
                         text-sm md:text-base leading-relaxed ${fontClass}
                         focus:outline-none focus:ring-1 focus:ring-gold/40
                         ${isSelected
                           ? 'border-gold/60 bg-blood/20 text-gold'
                           : 'border-parchment/10 bg-parchment/[0.02] text-parchment/70 hover:text-parchment'
                         }`}
            >
              <span className="text-blood/60 mr-3 font-display text-xs">
                {String.fromCharCode(65 + index)}
              </span>
              {choice.text}
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
