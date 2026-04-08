import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import questions from '../data/questions';
import { computeScores, matchArchetypes } from '../utils/scoring';
import Question from './Question';
import ProgressBar from './ProgressBar';

export default function Quiz({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = useCallback((choiceIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = { ...questions[currentIndex].choices[choiceIndex], _selectedIndex: choiceIndex };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 300);
  }, [answers, currentIndex]);

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleFinish = () => {
    const scores = computeScores(answers);
    const result = matchArchetypes(scores);
    onComplete({ scores, result });
  };

  const isLastQuestion = currentIndex === questions.length - 1;
  const allAnswered = answers.every((a) => a !== null);
  const currentAnswered = answers[currentIndex] !== null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12"
    >
      <ProgressBar current={currentIndex} total={questions.length} />

      <Question
        question={questions[currentIndex]}
        onAnswer={handleAnswer}
        selectedAnswer={answers[currentIndex]?._selectedIndex ?? null}
      />

      <div className="flex items-center gap-6 mt-10">
        {currentIndex > 0 && (
          <button
            onClick={handlePrevious}
            className="px-6 py-2 text-parchment/40 hover:text-parchment/70 font-body text-sm
                       border border-parchment/10 hover:border-parchment/30 transition-colors cursor-pointer
                       focus:outline-none focus:ring-1 focus:ring-gold/30"
          >
            ← Précédent
          </button>
        )}

        {isLastQuestion && allAnswered && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(139, 0, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleFinish}
            className="px-10 py-3 border border-gold/50 bg-blood/15 text-gold font-display
                       tracking-widest uppercase text-sm hover:bg-blood/25 transition-colors cursor-pointer
                       focus:outline-none focus:ring-2 focus:ring-gold/50"
          >
            Révéler mon Archétype
          </motion.button>
        )}

        {!isLastQuestion && currentAnswered && (
          <button
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className="px-6 py-2 text-parchment/50 hover:text-gold font-body text-sm
                       border border-parchment/15 hover:border-gold/40 transition-colors cursor-pointer
                       focus:outline-none focus:ring-1 focus:ring-gold/30"
          >
            Suivant →
          </button>
        )}
      </div>
    </motion.div>
  );
}
