import { motion } from 'framer-motion';
import { useLang } from '../LangContext';
import translations from '../data/i18n';
import archetypesCn from '../data/archetypes_cn';

export default function CharacterCard({ match, role, delay = 0 }) {
  const lang = useLang();
  const t = translations[lang];
  const { archetype } = match;

  const cnData = lang === 'cn' ? archetypesCn[archetype.id] : null;
  const displayArchetype = cnData ? cnData.archetype : archetype.archetype;
  const displayDescription = cnData ? cnData.description : archetype.description;

  const roleLabels = {
    principal: t.resultProfile,
    ascendant: t.resultAscendant,
    antagoniste: t.resultAntagonist,
  };

  const roleBorderColor = {
    principal: 'border-gold/50',
    ascendant: 'border-parchment/30',
    antagoniste: 'border-blood/50',
  };

  const roleAccent = {
    principal: 'text-gold',
    ascendant: 'text-parchment/70',
    antagoniste: 'text-blood',
  };

  const fontClass = lang === 'cn' ? 'font-cjk' : 'font-body';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`border ${roleBorderColor[role]} bg-abyss/60 backdrop-blur-sm p-6 md:p-8 max-w-xl w-full`}
    >
      <div className={`text-xs tracking-[0.3em] uppercase mb-4 ${roleAccent[role]} ${fontClass}`}>
        {roleLabels[role]}
        {match.similarity !== undefined && (
          <span className="ml-3 text-parchment/30">{match.similarity}{t.resultSimilarity}</span>
        )}
      </div>

      {/* Placeholder image */}
      <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            role === 'antagoniste'
              ? 'bg-gradient-to-b from-blood/20 via-abyss to-abyss'
              : 'bg-gradient-to-b from-gold/10 via-abyss to-abyss'
          }`}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-cjk text-3xl md:text-4xl text-parchment/20">
            {archetype.name}
          </span>
          {archetype.subtitle && (
            <span className="font-body text-sm text-parchment/15 mt-1">{archetype.subtitle}</span>
          )}
        </div>
        <div className={`absolute inset-0 border ${role === 'principal' ? 'border-gold/20' : 'border-parchment/10'}`} />
        <div className="absolute inset-2 border border-parchment/5" />
      </div>

      <div className={`text-lg md:text-xl ${roleAccent[role]} ${lang === 'cn' ? 'font-cjk' : 'font-display'} mb-1`}>
        {displayArchetype}
      </div>

      <div className="font-body text-xs text-parchment/30 mb-1">
        {archetype.name}{archetype.subtitle ? ` / ${archetype.subtitle}` : ''}
      </div>

      <div className="font-body text-xs text-parchment/20 mb-4">
        {archetype.origin}
      </div>

      <p className={`text-sm text-parchment/60 leading-relaxed italic ${fontClass}`}>
        "{displayDescription}"
      </p>
    </motion.div>
  );
}
