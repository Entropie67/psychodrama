const questions = [
  // === FEU INTÉRIEUR (Q1-Q4) ===
  {
    id: 1,
    text: "Quand une injustice te touche personnellement, tu...",
    axis: 'feu',
    choices: [
      { text: "Ressens une rage froide et planifies en silence", effects: { feu: -10 } },
      { text: "Exploses immédiatement — impossible de contenir ça", effects: { feu: +15 } },
      { text: "Canalises la colère en action réfléchie", effects: { feu: +5, pouvoir: +5 } },
      { text: "Acceptes et passes à autre chose — l'énergie est mieux dépensée ailleurs", effects: { feu: -15 } },
    ],
  },
  {
    id: 2,
    text: "Dans tes relations, on te reproche souvent d'être...",
    axis: 'feu',
    choices: [
      { text: "Trop distant·e, difficile à lire", effects: { feu: -10, vulnerabilite: -10 } },
      { text: "Trop intense, trop passionné·e", effects: { feu: +15, vulnerabilite: +5 } },
      { text: "Trop imprévisible, impossible à suivre", effects: { feu: +10, conflit: +5 } },
      { text: "Trop contrôlant·e, toujours à tout orchestrer", effects: { feu: -5, pouvoir: +10 } },
    ],
  },
  {
    id: 3,
    text: "Un soir d'orage, seul·e dans un temple abandonné, tu trouves un miroir ancien. En t'y regardant, tu vois...",
    axis: 'feu',
    choices: [
      { text: "Ton reflet te sourit alors que toi, non", effects: { feu: -10, vulnerabilite: -5 } },
      { text: "Des flammes dans tes yeux, une version de toi sans chaînes", effects: { feu: +15 } },
      { text: "Rien — le miroir est vide, et ça ne te surprend pas", effects: { feu: -15, vulnerabilite: -10 } },
      { text: "Une version brisée de toi qui tend la main", effects: { feu: +5, vulnerabilite: +15 } },
    ],
  },
  {
    id: 4,
    text: "Qu'est-ce qui te définit le mieux ?",
    axis: 'feu',
    choices: [
      { text: "La patience — je sais attendre le bon moment", effects: { feu: -10, conflit: -5 } },
      { text: "L'instinct — je fais confiance à mes tripes", effects: { feu: +10, conflit: +5 } },
      { text: "La lucidité — je vois les choses telles qu'elles sont", effects: { feu: -5, pouvoir: +5 } },
      { text: "La passion — quand je m'engage, c'est à fond", effects: { feu: +15, vulnerabilite: +5 } },
    ],
  },

  // === SOURCE DE POUVOIR (Q5-Q8) ===
  {
    id: 5,
    text: "On te confie une mission impossible. Ta première pensée...",
    axis: 'pouvoir',
    choices: [
      { text: "Qui puis-je manipuler pour que ça marche ?", effects: { pouvoir: -10, morale: -5 } },
      { text: "Je fonce, on verra bien — l'audace paie toujours", effects: { pouvoir: +15, conflit: +10 } },
      { text: "Je cherche la faille dans le système", effects: { pouvoir: -5, conflit: -5 } },
      { text: "Je rassemble une équipe de confiance", effects: { pouvoir: +5, social: +15 } },
    ],
  },
  {
    id: 6,
    text: "Tu entres dans une salle du trône plongée dans l'ombre. Une voix te demande de choisir une arme. Tu prends...",
    axis: 'pouvoir',
    choices: [
      { text: "Un éventail en soie — élégant et trompeur", effects: { pouvoir: -10, conflit: -10 } },
      { text: "Une épée noire, lourde et implacable", effects: { pouvoir: +15, feu: +5 } },
      { text: "Un livre de stratégie ancien — le savoir est la vraie arme", effects: { pouvoir: -15, morale: +5 } },
      { text: "Rien — tes mains suffisent", effects: { pouvoir: +10, vulnerabilite: -5 } },
    ],
  },
  {
    id: 7,
    text: "Face à un adversaire clairement plus fort que toi, tu...",
    axis: 'pouvoir',
    choices: [
      { text: "Trouves son point faible psychologique et l'exploites", effects: { pouvoir: -10, conflit: -5 } },
      { text: "Te bats quand même — la victoire n'est pas le seul enjeu", effects: { pouvoir: +10, morale: +10 } },
      { text: "Retournes ses alliés contre lui", effects: { pouvoir: -5, social: +10 } },
      { text: "Frappes en premier, fort, et sans prévenir", effects: { pouvoir: +15, conflit: +10 } },
    ],
  },
  {
    id: 8,
    text: "Dans un jeu d'échecs, tu es plutôt...",
    axis: 'pouvoir',
    choices: [
      { text: "La reine — polyvalente, mortelle, toujours en mouvement", effects: { pouvoir: +10, conflit: +5 } },
      { text: "Le fou — angles inattendus, trajectoires surprenantes", effects: { pouvoir: -10, feu: +5 } },
      { text: "Le roi — tout le jeu tourne autour de toi", effects: { pouvoir: +5, social: +10 } },
      { text: "Le joueur — tu ne fais pas partie de l'échiquier, tu le contrôles", effects: { pouvoir: -15, social: +5 } },
    ],
  },

  // === RAPPORT AUX AUTRES (Q9-Q12) ===
  {
    id: 9,
    text: "Dans un groupe, tu es naturellement...",
    axis: 'social',
    choices: [
      { text: "Celui/celle qui observe sans rien dire — et voit tout", effects: { social: -15, vulnerabilite: -5 } },
      { text: "Celui/celle vers qui tout le monde se tourne pour décider", effects: { social: +15, conflit: +5 } },
      { text: "Celui/celle qui crée les liens entre les gens", effects: { social: +10, morale: +5 } },
      { text: "Celui/celle qui part quand il y a trop de monde", effects: { social: -10, feu: -5 } },
    ],
  },
  {
    id: 10,
    text: "Une personne que tu admires te trahit. Ta réaction...",
    axis: 'social',
    choices: [
      { text: "Tu coupes le lien définitivement — pas de seconde chance", effects: { social: -10, vulnerabilite: -10 } },
      { text: "Tu cherches à comprendre pourquoi avant de juger", effects: { social: +5, morale: +10 } },
      { text: "Tu te venges — lentement, méthodiquement", effects: { social: -5, conflit: -10 } },
      { text: "Ça te dévaste, mais tu finis par pardonner", effects: { social: +10, vulnerabilite: +15 } },
    ],
  },
  {
    id: 11,
    text: "Tu reçois un pouvoir : commander à n'importe qui pendant 24h. Tu...",
    axis: 'social',
    choices: [
      { text: "N'utilises pas ce pouvoir — personne ne devrait avoir ce droit", effects: { social: -5, morale: +15 } },
      { text: "Réorganises le monde selon ta vision de la justice", effects: { social: +15, morale: +5 } },
      { text: "L'utilises sur une seule personne, celle qui le mérite", effects: { social: -10, conflit: +5 } },
      { text: "Testes ses limites par curiosité intellectuelle", effects: { social: +5, pouvoir: -10 } },
    ],
  },
  {
    id: 12,
    text: "Les gens qui te connaissent te décriraient comme...",
    axis: 'social',
    choices: [
      { text: "Mystérieux·se et difficile à cerner", effects: { social: -15, vulnerabilite: -10 } },
      { text: "Intense et magnétique", effects: { social: +10, feu: +10 } },
      { text: "Fiable et protecteur·trice", effects: { social: +5, morale: +10 } },
      { text: "Brillant·e et imprévisible", effects: { social: +10, pouvoir: -5 } },
    ],
  },

  // === BOUSSOLE MORALE (Q13-Q16) ===
  {
    id: 13,
    text: "Pour sauver cent innocents, il faut sacrifier une personne que tu aimes. Tu...",
    axis: 'morale',
    choices: [
      { text: "Fais le sacrifice — c'est la seule logique", effects: { morale: -10, vulnerabilite: -10 } },
      { text: "Refuses — il doit y avoir un autre chemin", effects: { morale: +15, feu: +5 } },
      { text: "Cherches un moyen de tricher le système", effects: { morale: -5, pouvoir: -10 } },
      { text: "Fais le sacrifice — et portes cette culpabilité pour toujours", effects: { morale: +5, vulnerabilite: +15 } },
    ],
  },
  {
    id: 14,
    text: "Un allié te propose un plan efficace mais moralement douteux. Tu...",
    axis: 'morale',
    choices: [
      { text: "Acceptes sans hésiter — l'efficacité prime", effects: { morale: -15, conflit: +5 } },
      { text: "Refuses catégoriquement — certaines lignes ne se franchissent pas", effects: { morale: +15 } },
      { text: "Modifies le plan pour le rendre acceptable", effects: { morale: +5, pouvoir: -5 } },
      { text: "Acceptes, mais tu le fais toi-même pour que personne d'autre ne se salisse", effects: { morale: -5, vulnerabilite: +10 } },
    ],
  },
  {
    id: 15,
    text: "Tu découvres qu'un système injuste profite à ceux que tu protèges. Tu...",
    axis: 'morale',
    choices: [
      { text: "Le détruis — la justice n'a pas d'exceptions", effects: { morale: +15, conflit: +10 } },
      { text: "Le maintiens — protéger les tiens passe avant tout", effects: { morale: -10, social: +5 } },
      { text: "Le réformes de l'intérieur, lentement", effects: { morale: +5, conflit: -10 } },
      { text: "Le remplaces par quelque chose de mieux — conçu par toi", effects: { morale: -5, pouvoir: -10 } },
    ],
  },
  {
    id: 16,
    text: "Ta devise dans la vie serait plutôt...",
    axis: 'morale',
    choices: [
      { text: "\"La fin justifie les moyens\"", effects: { morale: -15, pouvoir: +5 } },
      { text: "\"Mieux vaut mourir debout que vivre à genoux\"", effects: { morale: +15, feu: +10 } },
      { text: "\"Le monde appartient à ceux qui osent\"", effects: { morale: -5, conflit: +10 } },
      { text: "\"Protège ce qui compte, quoi qu'il en coûte\"", effects: { morale: +10, vulnerabilite: +5 } },
    ],
  },

  // === FACE AU CONFLIT (Q17-Q20) ===
  {
    id: 17,
    text: "Ton ennemi t'a humilié·e publiquement. Tu...",
    axis: 'conflit',
    choices: [
      { text: "Souris — ta vengeance sera si élaborée qu'il ne la verra pas venir", effects: { conflit: -15, pouvoir: -5 } },
      { text: "Le confrontes sur-le-champ, devant tout le monde", effects: { conflit: +15, feu: +10 } },
      { text: "Retournes l'opinion publique contre lui, patiemment", effects: { conflit: -10, social: +10 } },
      { text: "T'en fiches — son opinion ne vaut rien", effects: { conflit: -5, vulnerabilite: -10 } },
    ],
  },
  {
    id: 18,
    text: "Tu es dans une forêt ancienne. Au loin, une lumière étrange. Tu...",
    axis: 'conflit',
    choices: [
      { text: "Observes depuis les ombres avant d'approcher", effects: { conflit: -10, pouvoir: -5 } },
      { text: "T'avances avec assurance — si c'est un piège, tant pis", effects: { conflit: +15, feu: +5 } },
      { text: "Contournes pour trouver un meilleur angle d'approche", effects: { conflit: -5, pouvoir: -5 } },
      { text: "Appelles pour voir qui répond — autant provoquer", effects: { conflit: +10, social: +5 } },
    ],
  },
  {
    id: 19,
    text: "On te propose de diriger une rébellion. Tu...",
    axis: 'conflit',
    choices: [
      { text: "Prends le commandement — c'est l'heure de l'action", effects: { conflit: +15, social: +10 } },
      { text: "Acceptes, mais tu agis dans l'ombre", effects: { conflit: -10, pouvoir: -5 } },
      { text: "Refuses — les rébellions sont rarement ce qu'elles promettent", effects: { conflit: -5, morale: +5 } },
      { text: "Acceptes, détournes la rébellion à tes propres fins", effects: { conflit: +5, morale: -10 } },
    ],
  },
  {
    id: 20,
    text: "Lors d'un duel verbal, ta stratégie est...",
    axis: 'conflit',
    choices: [
      { text: "Chaque mot est un scalpel — précis, chirurgical, dévastateur", effects: { conflit: -10, pouvoir: -10 } },
      { text: "L'intensité brute — ta conviction écrase l'adversaire", effects: { conflit: +15, feu: +5 } },
      { text: "Le silence stratégique — laisser l'autre se détruire seul", effects: { conflit: -15, vulnerabilite: -5 } },
      { text: "L'humour tranchant — personne ne s'attend au rire", effects: { conflit: +5, social: +5 } },
    ],
  },

  // === VULNÉRABILITÉ (Q21-Q24) ===
  {
    id: 21,
    text: "Quelqu'un que tu respectes te voit pleurer. Tu...",
    axis: 'vulnerabilite',
    choices: [
      { text: "Ça n'arrivera jamais — tu ne pleures devant personne", effects: { vulnerabilite: -15, feu: -5 } },
      { text: "Assumes — les larmes ne sont pas une faiblesse", effects: { vulnerabilite: +15, morale: +5 } },
      { text: "Détournes le regard et changes de sujet", effects: { vulnerabilite: -10 } },
      { text: "Te mets en colère — contre toi-même d'avoir montré ça", effects: { vulnerabilite: +5, feu: +10 } },
    ],
  },
  {
    id: 22,
    text: "Ton plus grand secret est découvert. Tu...",
    axis: 'vulnerabilite',
    choices: [
      { text: "Nies tout avec un aplomb terrifiant", effects: { vulnerabilite: -15, conflit: -5 } },
      { text: "Assumes — tu n'as plus rien à perdre, c'est libérateur", effects: { vulnerabilite: +15, feu: +5 } },
      { text: "Retournes la situation — c'est celui qui a fouillé qui devrait avoir honte", effects: { vulnerabilite: -5, conflit: +10 } },
      { text: "Te replies sur toi-même — le monde extérieur n'a plus accès", effects: { vulnerabilite: -10, social: -10 } },
    ],
  },
  {
    id: 23,
    text: "Tu es au bord de la défaite totale. Il te reste une chance. Tu...",
    axis: 'vulnerabilite',
    choices: [
      { text: "Montres enfin ta vraie nature — plus rien à cacher", effects: { vulnerabilite: +15, feu: +10 } },
      { text: "Gardes ton masque jusqu'au bout — mourir dignement", effects: { vulnerabilite: -15, morale: +5 } },
      { text: "Sacrifies ce qui te reste de fierté pour gagner", effects: { vulnerabilite: +5, morale: -10 } },
      { text: "Acceptes la défaite avec grâce — certaines batailles ne sont pas les tiennes", effects: { vulnerabilite: +10, conflit: -10 } },
    ],
  },
  {
    id: 24,
    text: "Si tu pouvais effacer un souvenir douloureux, tu le ferais ?",
    axis: 'vulnerabilite',
    choices: [
      { text: "Non — la douleur m'a forgé·e, je ne serais pas moi sans elle", effects: { vulnerabilite: +10, morale: +10 } },
      { text: "Oui, sans hésiter — pourquoi souffrir quand on peut l'éviter ?", effects: { vulnerabilite: -10, feu: -5 } },
      { text: "Non, mais je le verrouillerais pour ne plus y penser", effects: { vulnerabilite: -5, pouvoir: -5 } },
      { text: "Seulement si ça pouvait aider quelqu'un d'autre", effects: { vulnerabilite: +5, social: +10 } },
    ],
  },
];

export default questions;
