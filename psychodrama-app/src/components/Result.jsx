import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../LangContext';
import translations from '../data/i18n';
import archetypesCn from '../data/archetypes_cn';
import CharacterCard from './CharacterCard';
import RadarChart from './RadarChart';

export default function Result({ data, onRestart }) {
  const lang = useLang();
  const t = translations[lang];
  const { scores, result } = data;
  const [copied, setCopied] = useState(false);

  const getArchetypeName = (match) => {
    if (lang === 'cn') {
      const cn = archetypesCn[match.archetype.id];
      return cn ? cn.archetype : match.archetype.archetype;
    }
    return match.archetype.archetype;
  };

  const handleShare = async () => {
    const text = t.resultShareText(
      `${getArchetypeName(result.principal)} (${result.principal.archetype.name})`,
      getArchetypeName(result.ascendant),
      getArchetypeName(result.antagoniste)
    );
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const fontClass = lang === 'cn' ? 'font-cjk' : 'font-body';
  const displayFont = lang === 'cn' ? 'font-cjk' : 'font-display';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative z-10 min-h-screen py-16 px-4"
    >
      {/* Dramatic reveal title */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className={`text-parchment/30 text-xs tracking-[0.4em] uppercase mb-4 ${fontClass}`}
        >
          {t.resultReveal}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className={`${displayFont} text-3xl md:text-5xl text-parchment`}
        >
          {t.resultYouAre}{' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="text-gold"
          >
            {getArchetypeName(result.principal)}
          </motion.span>
        </motion.h1>
      </div>

      {/* Main character card */}
      <div className="flex flex-col items-center gap-10 max-w-4xl mx-auto">
        <CharacterCard match={result.principal} role="principal" delay={2.2} />

        {/* Radar Chart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="w-full max-w-md"
        >
          <div className={`text-center text-parchment/30 text-xs tracking-[0.2em] uppercase mb-4 ${fontClass}`}>
            {t.resultRadarTitle}
          </div>
          <RadarChart scores={scores} />
        </motion.div>

        {/* Ascendant and Antagonist */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="w-full grid md:grid-cols-2 gap-6"
        >
          <CharacterCard match={result.ascendant} role="ascendant" delay={3.4} />
          <CharacterCard match={result.antagoniste} role="antagoniste" delay={3.6} />
        </motion.div>

        {/* Explanation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8, duration: 0.8 }}
          className="text-center max-w-lg"
        >
          <p className={`text-sm text-parchment/40 leading-relaxed ${fontClass}`}>
            {lang === 'cn' ? '你的' : 'Ton '}<span className="text-parchment/60">{lang === 'cn' ? '上升性格' : 'ascendant'}</span> {t.resultAscExplain}
            <br />
            {lang === 'cn' ? '你的' : 'Ton '}<span className="text-blood/80">{lang === 'cn' ? '对立面' : 'antagoniste'}</span> {t.resultAntExplain}
          </p>
        </motion.div>

        {/* All similarities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="w-full max-w-xl"
        >
          <div className={`text-center text-parchment/30 text-xs tracking-[0.2em] uppercase mb-4 ${fontClass}`}>
            {t.resultAffinityTitle}
          </div>
          <div className="space-y-2">
            {result.all.map((match, i) => (
              <div key={match.archetype.id} className={`flex items-center gap-3 text-xs ${fontClass}`}>
                <span className="text-parchment/40 w-36 text-right truncate">
                  {getArchetypeName(match)}
                </span>
                <div className="flex-1 h-[3px] bg-parchment/5 relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${match.similarity}%` }}
                    transition={{ delay: 4.2 + i * 0.08, duration: 0.6 }}
                    className={`absolute inset-y-0 left-0 ${
                      i === 0
                        ? 'bg-gold/60'
                        : i === result.all.length - 1
                          ? 'bg-blood/50'
                          : 'bg-parchment/20'
                    }`}
                  />
                </div>
                <span className="text-parchment/30 w-10">{match.similarity}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-6 mb-8"
        >
          <button
            onClick={handleShare}
            className={`px-8 py-3 border border-gold/40 text-gold text-sm tracking-widest uppercase
                       bg-gold/5 hover:bg-gold/10 transition-colors cursor-pointer
                       focus:outline-none focus:ring-1 focus:ring-gold/40 ${displayFont}`}
          >
            {copied ? t.resultCopied : t.resultShare}
          </button>
          <button
            onClick={onRestart}
            className={`px-8 py-3 border border-parchment/20 text-parchment/50 text-sm tracking-widest uppercase
                       hover:text-parchment/70 hover:border-parchment/40 transition-colors cursor-pointer
                       focus:outline-none focus:ring-1 focus:ring-parchment/30 ${displayFont}`}
          >
            {t.resultRestart}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
