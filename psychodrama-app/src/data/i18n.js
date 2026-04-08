const translations = {
  fr: {
    // Landing
    langLabel: 'Français',
    landingTag: 'Test de Personnalité',
    landingTitle1: 'Quel Archétype',
    landingTitle2: 'Sommeille en Toi',
    landingTitleEnd: '?',
    landingChinese: '你到底是谁？',
    landingSubtitle1: 'Un voyage psychologique à travers les royaumes des C-Dramas et des Animés.',
    landingSubtitle2: 'Découvre ton profil, ton ascendant et ton antagoniste naturel.',
    landingInfo: '24 questions — 5 minutes — 12 archétypes',
    landingCta: 'Commencer le Test',
    landingFooter: 'ENCRE & BRAISE',

    // Quiz
    questionLabel: 'Question',
    progressOf: '/',
    previous: '← Précédent',
    next: 'Suivant →',
    reveal: 'Révéler mon Archétype',

    // Result
    resultReveal: 'Le voile se lève...',
    resultYouAre: 'Tu es',
    resultProfile: 'Profil Principal',
    resultAscendant: 'Ascendant',
    resultAntagonist: 'Antagoniste Naturel',
    resultSimilarity: '% de similarité',
    resultRadarTitle: 'Ton Profil Psychologique',
    resultAscExplain: 'révèle une facette secondaire de ta personnalité — la nuance qui te rend unique.',
    resultAntExplain: 'est ton opposé naturel : la force qui te défie et te pousse à évoluer.',
    resultAffinityTitle: 'Affinité avec chaque archétype',
    resultShare: 'Partager mon résultat',
    resultCopied: 'Copié !',
    resultRestart: 'Refaire le test',
    resultShareText: (main, asc, ant) =>
      `🔥 Mon Archétype : ${main}\n⚔️ Ascendant : ${asc}\n🩸 Antagoniste : ${ant}\n\nDécouvre le tien → Quel Archétype Sommeille en Toi ?`,

    // Axes
    axes: {
      feu: 'Feu Intérieur',
      pouvoir: 'Source de Pouvoir',
      social: 'Rapport aux Autres',
      morale: 'Boussole Morale',
      conflit: 'Face au Conflit',
      vulnerabilite: 'Vulnérabilité',
    },
  },

  cn: {
    // Landing
    langLabel: '中文',
    landingTag: '性格测试',
    landingTitle1: '你内心沉睡的',
    landingTitle2: '是哪个原型',
    landingTitleEnd: '？',
    landingChinese: '你到底是谁？',
    landingSubtitle1: '一场穿越中国古装剧与动漫世界的心理之旅。',
    landingSubtitle2: '发现你的主性格、上升性格和天生的对立面。',
    landingInfo: '24道题 — 5分钟 — 12种原型',
    landingCta: '开始测试',
    landingFooter: '墨 与 烬',

    // Quiz
    questionLabel: '第',
    progressOf: '/',
    previous: '← 上一题',
    next: '下一题 →',
    reveal: '揭示我的原型',

    // Result
    resultReveal: '面纱揭开了……',
    resultYouAre: '你是',
    resultProfile: '主要性格',
    resultAscendant: '上升性格',
    resultAntagonist: '天生对立面',
    resultSimilarity: '% 相似度',
    resultRadarTitle: '你的心理档案',
    resultAscExplain: '揭示了你性格的另一面——让你独一无二的微妙之处。',
    resultAntExplain: '是你天生的对立面：挑战你、推动你成长的力量。',
    resultAffinityTitle: '与各原型的契合度',
    resultShare: '分享我的结果',
    resultCopied: '已复制！',
    resultRestart: '重新测试',
    resultShareText: (main, asc, ant) =>
      `🔥 我的原型：${main}\n⚔️ 上升：${asc}\n🩸 对立面：${ant}\n\n来发现你的 → 你到底是谁？`,

    // Axes
    axes: {
      feu: '内心之火',
      pouvoir: '力量来源',
      social: '人际关系',
      morale: '道德罗盘',
      conflit: '面对冲突',
      vulnerabilite: '脆弱面',
    },
  },
};

export default translations;
