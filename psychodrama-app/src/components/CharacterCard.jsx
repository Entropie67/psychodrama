import { motion } from 'framer-motion';

export default function CharacterCard({ match, role, delay = 0 }) {
  const { archetype } = match;

  const roleLabels = {
    principal: 'Profil Principal',
    ascendant: 'Ascendant',
    antagoniste: 'Antagoniste Naturel',
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`border ${roleBorderColor[role]} bg-abyss/60 backdrop-blur-sm p-6 md:p-8 max-w-xl w-full`}
    >
      <div className={`text-xs tracking-[0.3em] uppercase font-body mb-4 ${roleAccent[role]}`}>
        {roleLabels[role]}
        {match.similarity !== undefined && (
          <span className="ml-3 text-parchment/30">{match.similarity}% de similarité</span>
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
          <span className="font-display text-3xl md:text-4xl text-parchment/20">
            {archetype.name}
          </span>
          {archetype.subtitle && (
            <span className="font-body text-sm text-parchment/15 mt-1">{archetype.subtitle}</span>
          )}
        </div>
        {/* Ornamental border */}
        <div className={`absolute inset-0 border ${role === 'principal' ? 'border-gold/20' : 'border-parchment/10'}`} />
        <div className="absolute inset-2 border border-parchment/5" />
      </div>

      <div className={`font-display text-lg md:text-xl ${roleAccent[role]} mb-1`}>
        {archetype.archetype}
      </div>

      <div className="font-body text-xs text-parchment/30 mb-1">
        {archetype.name}{archetype.subtitle ? ` / ${archetype.subtitle}` : ''}
      </div>

      <div className="font-body text-xs text-parchment/20 mb-4">
        {archetype.origin}
      </div>

      <p className="font-body text-sm text-parchment/60 leading-relaxed italic">
        "{archetype.description}"
      </p>
    </motion.div>
  );
}
