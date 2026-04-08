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
    name: '路招摇',
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
    name: '沈璃',
    subtitle: 'Shen Li',
    origin: '与凤行 — Zhao Liying',
    archetype: 'La Générale Céleste',
    category: 'cdrama',
    axes: { feu: 60, pouvoir: 75, social: 70, morale: 80, conflit: 80, vulnerabilite: 40 },
    description:
      "Tu es née pour commander. Ton autorité n'a pas besoin de mots — elle est dans ta posture, ton regard, ta simple présence. Tu protèges les tiens avec une férocité que seuls les vrais leaders possèdent.",
  },
  {
    id: 'yepingan',
    name: '叶平安',
    subtitle: 'Ye Ping\'an',
    origin: '花间令 — Ju Jingyi',
    archetype: 'La Marionnettiste',
    category: 'cdrama',
    axes: { feu: 15, pouvoir: 90, social: 80, morale: 5, conflit: 10, vulnerabilite: 5 },
    description:
      "Tu es le contrôle absolu déguisé en douceur. Derrière ton sourire se cache un esprit qui tisse des toiles invisibles. Personne ne soupçonne la lame sous la soie. Tu ne manipules pas — tu guides, et le monde obéit sans même s'en rendre compte.",
  },
  {
    id: 'yunweishan',
    name: '云为衫',
    subtitle: 'Yun Weishan',
    origin: '云之羽 — Esther Yu',
    archetype: 'La Lame Sacrificielle',
    category: 'cdrama',
    axes: { feu: 20, pouvoir: 60, social: 10, morale: 85, conflit: 25, vulnerabilite: 70 },
    description:
      "Tu portes un fardeau que personne ne comprend. Le monde te voit comme une ombre, mais chaque pas dans le silence est un sacrifice. Tu as appris à souffrir sans bruit, à protéger sans qu'on te le demande. Ta douleur est ton armure — et ta plus grande force.",
  },
  {
    id: 'baiqian',
    name: '白浅',
    subtitle: 'Bai Qian',
    origin: '三生三世十里桃花 — Yang Mi',
    archetype: 'La Souveraine Glacée',
    category: 'cdrama',
    axes: { feu: 75, pouvoir: 85, social: 60, morale: 10, conflit: 95, vulnerabilite: 25 },
    description:
      "Tu es la majesté incarnée, une divinité que le commun des mortels ne peut qu'admirer de loin. Ta froideur n'est pas de la cruauté — c'est la distance naturelle entre le ciel et la terre. Quand tu aimes, c'est avec la même intensité que quand tu foudroies.",
  },
  {
    id: 'fengzhiwei',
    name: '凤知微',
    subtitle: 'Feng Zhiwei',
    origin: '天盛长歌 — Ni Ni',
    archetype: "L'Architecte Impériale",
    category: 'cdrama',
    axes: { feu: 10, pouvoir: 95, social: 50, morale: 5, conflit: 15, vulnerabilite: 5 },
    description:
      "Tu as toujours trois coups d'avance. Ton intelligence est ta couronne, et personne n'a jamais vu ton vrai visage. Dans l'échiquier de la cour, tu ne joues pas — tu redessines les règles. Quand le rideau tombe, tes adversaires réalisent qu'ils faisaient partie de ton plan depuis le début.",
  },
  {
    id: 'meilin',
    name: '眉林',
    subtitle: 'Mei Lin',
    origin: '琅琊榜 — Liu Tao',
    archetype: 'La Gardienne Implacable',
    category: 'cdrama',
    axes: { feu: 50, pouvoir: 70, social: 15, morale: 65, conflit: 75, vulnerabilite: 60 },
    description:
      "Tu es la loyauté faite lame. Quand tu choisis quelqu'un, c'est pour toujours, et malheur à quiconque menace ce lien. Derrière ta force terrifiante se cache un cœur qui refuse de lâcher, même quand le monde s'effondre autour de toi.",
  },
  {
    id: 'jiangxuening',
    name: '姜雪宁',
    subtitle: 'Jiang Xuening',
    origin: '宁安如梦 — Bai Lu',
    archetype: 'La Rebelle Couronnée',
    category: 'cdrama',
    axes: { feu: 70, pouvoir: 85, social: 75, morale: 35, conflit: 40, vulnerabilite: 50 },
    description:
      "Tu veux reprendre la main sur ton destin, et tu es prête à brûler l'ancien monde pour y parvenir. Ambitieuse, lucide, magnétique — tu inspires et manipules avec la même aisance. Ton plus grand ennemi n'est pas le système — c'est celle que tu étais avant.",
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
