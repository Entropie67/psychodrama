const archetypes = [
  {
    id: 'zuohufa',
    name: '左护法',
    subtitle: 'Gardienne de Gauche',
    origin: '淮水竹亭 — Liu Shishi',
    archetype: 'La Reine Noire',
    category: 'cdrama',
    axes: { feu: 20, pouvoir: 40, social: 30, morale: 15, conflit: 35, vulnerabilite: 10 },
    description:
      "Tu es l'ombre qui règne. Froide, calculatrice, d'une élégance létale. Tu ne demandes pas le pouvoir — tu le prends, et personne n'ose te le contester. Derrière ton masque de glace, une volonté d'acier que rien ne peut briser.",
  },
  {
    id: 'hesimou',
    name: '贺思慕',
    subtitle: 'He Simu',
    origin: '白日提灯 — Dilireba',
    archetype: 'La Souveraine Éternelle',
    category: 'cdrama',
    axes: { feu: 30, pouvoir: 35, social: 45, morale: 50, conflit: 60, vulnerabilite: 35 },
    description:
      "Tu portes le poids de l'éternité avec grâce. Quatre cents ans de solitude t'ont appris que la vraie force n'est pas de ne rien ressentir, mais de ressentir sans jamais fléchir. Tu es la loi, et ta loi est juste.",
  },
  {
    id: 'renruyi',
    name: '任如意',
    subtitle: 'Ren Ruyi',
    origin: '一念关山 — Liu Shishi',
    archetype: 'La Lame Silencieuse',
    category: 'cdrama',
    axes: { feu: 25, pouvoir: 55, social: 20, morale: 40, conflit: 30, vulnerabilite: 20 },
    description:
      "Tu es l'arme la plus dangereuse de la pièce, et personne ne le sait. Chaque mot est pesé, chaque geste est un calcul. Tu pourrais tuer ou sauver — et dans les deux cas, ton visage ne changerait pas.",
  },
  {
    id: 'luzhaoyao',
    name: '陆昭瑶',
    subtitle: 'Lu Zhaoyao',
    origin: '招摇 — Bai Lu',
    archetype: 'La Flamme Démoniaque',
    category: 'cdrama',
    axes: { feu: 90, pouvoir: 70, social: 65, morale: 25, conflit: 85, vulnerabilite: 55 },
    description:
      "Tu es le chaos magnifique. Là où tu passes, les conventions brûlent. Tu ne connais pas la demi-mesure : tout est passion, fureur, et panache. Le monde te traite de démone ? Tant mieux — au moins il ne t'oublie pas.",
  },
  {
    id: 'xuefangfei',
    name: '薛芳菲',
    subtitle: 'Xue Fangfei',
    origin: '墨雨云间 — Wu Jinyan',
    archetype: 'La Revenante',
    category: 'cdrama',
    axes: { feu: 45, pouvoir: 80, social: 25, morale: 55, conflit: 20, vulnerabilite: 30 },
    description:
      "Tu es revenue d'entre les morts avec un seul but. Ta patience est ton arme absolue. Chaque sourire cache un stratagème, chaque politesse est un piège. Tes ennemis ne te voient pas venir — et c'est exactement ce que tu veux.",
  },
  {
    id: 'shenli',
    name: '沈离',
    subtitle: 'Shen Li',
    origin: '与凤行 — Zhao Liying',
    archetype: 'La Générale Céleste',
    category: 'cdrama',
    axes: { feu: 60, pouvoir: 75, social: 70, morale: 80, conflit: 80, vulnerabilite: 40 },
    description:
      "Tu es née pour commander. Ton autorité n'a pas besoin de mots — elle est dans ta posture, ton regard, ta simple présence. Tu protèges les tiens avec une férocité que seuls les vrais leaders possèdent.",
  },
  {
    id: 'makima',
    name: 'Makima',
    subtitle: '',
    origin: 'Chainsaw Man',
    archetype: 'La Marionnettiste',
    category: 'anime',
    axes: { feu: 15, pouvoir: 90, social: 80, morale: 5, conflit: 10, vulnerabilite: 5 },
    description:
      "Tu es le contrôle absolu déguisé en douceur. Tout le monde croit te connaître, personne ne te connaît vraiment. Tu tires les fils avec une sérénité terrifiante. Le monde est ton échiquier, et chaque pion pense être libre.",
  },
  {
    id: 'itachi',
    name: 'Itachi Uchiha',
    subtitle: '',
    origin: 'Naruto',
    archetype: 'Le Martyr de l\'Ombre',
    category: 'anime',
    axes: { feu: 20, pouvoir: 60, social: 10, morale: 85, conflit: 25, vulnerabilite: 70 },
    description:
      "Tu portes un fardeau que personne ne comprend. Le monde te voit comme un traître, mais tu as sacrifié tout — honneur, amour, réputation — pour protéger ce qui compte. Ta force est silencieuse, ton sacrifice absolu.",
  },
  {
    id: 'esdeath',
    name: 'Esdeath',
    subtitle: '',
    origin: 'Akame ga Kill',
    archetype: "L'Impératrice de Glace",
    category: 'anime',
    axes: { feu: 75, pouvoir: 85, social: 60, morale: 10, conflit: 95, vulnerabilite: 25 },
    description:
      "Tu es la puissance brute élevée au rang d'art. La pitié est un concept étranger, la faiblesse une insulte. Tu domines par la force et le charisme, et quand tu aimes, c'est avec la même intensité dévorante que quand tu détruis.",
  },
  {
    id: 'aizen',
    name: 'Aizen Sōsuke',
    subtitle: '',
    origin: 'Bleach',
    archetype: "L'Architecte Suprême",
    category: 'anime',
    axes: { feu: 10, pouvoir: 95, social: 50, morale: 5, conflit: 15, vulnerabilite: 5 },
    description:
      "Tu as toujours trois coups d'avance. Ton intelligence est ta couronne, et personne n'a jamais vu ton vrai visage. Tu ne combats pas — tu orchestres. Et quand le rideau tombe, le public réalise qu'il faisait partie du spectacle depuis le début.",
  },
  {
    id: 'mikasa',
    name: 'Mikasa Ackerman',
    subtitle: '',
    origin: 'Attack on Titan',
    archetype: 'La Gardienne Inflexible',
    category: 'anime',
    axes: { feu: 50, pouvoir: 70, social: 15, morale: 65, conflit: 75, vulnerabilite: 60 },
    description:
      "Tu es la loyauté faite lame. Quand tu choisis quelqu'un, c'est pour toujours, et malheur à quiconque menace ce lien. Derrière ta force terrifiante se cache un cœur qui refuse de lâcher, même quand le monde s'effondre.",
  },
  {
    id: 'lelouch',
    name: 'Lelouch vi Britannia',
    subtitle: '',
    origin: 'Code Geass',
    archetype: 'Le Prince Rebelle',
    category: 'anime',
    axes: { feu: 70, pouvoir: 85, social: 75, morale: 35, conflit: 40, vulnerabilite: 50 },
    description:
      "Tu veux changer le monde, et tu es prêt à te salir les mains pour y parvenir. Stratège né, leader magnétique, tu inspires et manipules avec la même aisance. Ton plus grand ennemi n'est pas dehors — il est dans le miroir.",
  },
];

export const axisLabels = {
  feu: 'Feu Intérieur',
  pouvoir: 'Source de Pouvoir',
  social: 'Rapport aux Autres',
  morale: 'Boussole Morale',
  conflit: 'Face au Conflit',
  vulnerabilite: 'Vulnérabilité',
};

export const axisDescriptions = {
  feu: ['Froideur maîtrisée', 'Passion explosive'],
  pouvoir: ['Intelligence & stratégie', 'Force brute & action'],
  social: ['Solitaire & indépendant', 'Leader & fédérateur'],
  morale: ['Pragmatisme sans limites', 'Justice idéaliste'],
  conflit: ['Manipulation en coulisses', 'Confrontation directe'],
  vulnerabilite: ['Armure impénétrable', 'Failles assumées'],
};

export default archetypes;
