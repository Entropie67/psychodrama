import archetypes from '../data/archetypes';

const AXES = ['feu', 'pouvoir', 'social', 'morale', 'conflit', 'vulnerabilite'];

export function computeScores(answers) {
  const scores = {};
  AXES.forEach((axis) => (scores[axis] = 50));

  answers.forEach((answer) => {
    if (!answer) return;
    Object.entries(answer.effects).forEach(([axis, delta]) => {
      scores[axis] = Math.max(0, Math.min(100, scores[axis] + delta));
    });
  });

  return scores;
}

function euclideanDistance(profileA, profileB) {
  return Math.sqrt(
    AXES.reduce((sum, axis) => {
      const diff = (profileA[axis] || 0) - (profileB[axis] || 0);
      return sum + diff * diff;
    }, 0)
  );
}

export function matchArchetypes(userScores) {
  const distances = archetypes.map((archetype) => ({
    archetype,
    distance: euclideanDistance(userScores, archetype.axes),
  }));

  distances.sort((a, b) => a.distance - b.distance);

  const maxDistance = Math.max(...distances.map((d) => d.distance));
  const similarities = distances.map((d) => ({
    ...d,
    similarity: maxDistance > 0 ? Math.round(((maxDistance - d.distance) / maxDistance) * 100) : 100,
  }));

  return {
    principal: similarities[0],
    ascendant: similarities[1],
    antagoniste: similarities[similarities.length - 1],
    all: similarities,
  };
}
