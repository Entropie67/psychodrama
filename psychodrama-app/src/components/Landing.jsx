import { motion } from 'framer-motion';
import { useLang } from '../LangContext';
import translations from '../data/i18n';

export default function Landing({ onStart }) {
  const lang = useLang();
  const t = translations[lang];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-4 font-cjk text-3xl md:text-5xl text-parchment/15"
      >
        {t.landingChinese}
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-2 text-gold tracking-[0.3em] uppercase text-xs font-body"
      >
        {t.landingTag}
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className={`text-4xl md:text-6xl lg:text-7xl text-parchment leading-tight max-w-4xl ${lang === 'cn' ? 'font-cjk' : 'font-display'}`}
      >
        {t.landingTitle1}
        <br />
        <span className="text-blood">{t.landingTitle2}</span> {t.landingTitleEnd}
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className={`mt-6 text-parchment/60 text-base md:text-lg max-w-2xl leading-relaxed ${lang === 'cn' ? 'font-cjk' : 'font-body'}`}
      >
        {t.landingSubtitle1}
        <br />
        {t.landingSubtitle2}
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className={`mt-4 text-parchment/40 text-sm ${lang === 'cn' ? 'font-cjk' : 'font-body'}`}
      >
        {t.landingInfo}
      </motion.div>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 0, 0, 0.4)' }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className={`mt-10 px-10 py-4 border border-blood/60 text-gold text-lg tracking-widest uppercase
                   bg-blood/10 hover:bg-blood/20 transition-colors duration-300 cursor-pointer
                   focus:outline-none focus:ring-2 focus:ring-gold/50 ${lang === 'cn' ? 'font-cjk' : 'font-display'}`}
      >
        {t.landingCta}
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 text-parchment/20 text-xs tracking-widest"
      >
        &#x2022; {t.landingFooter} &#x2022;
      </motion.div>
    </motion.div>
  );
}
