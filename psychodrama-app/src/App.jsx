import { useState, useCallback } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Result from './components/Result';

const SCREENS = { LANDING: 'landing', QUIZ: 'quiz', RESULT: 'result' };

export default function App() {
  const [screen, setScreen] = useState(SCREENS.LANDING);
  const [resultData, setResultData] = useState(null);

  const handleStart = useCallback(() => setScreen(SCREENS.QUIZ), []);

  const handleComplete = useCallback((data) => {
    setResultData(data);
    setScreen(SCREENS.RESULT);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleRestart = useCallback(() => {
    setResultData(null);
    setScreen(SCREENS.LANDING);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-abyss text-parchment overflow-x-hidden">
      <ParticleBackground />
      {screen === SCREENS.LANDING && <Landing onStart={handleStart} />}
      {screen === SCREENS.QUIZ && <Quiz onComplete={handleComplete} />}
      {screen === SCREENS.RESULT && <Result data={resultData} onRestart={handleRestart} />}
    </div>
  );
}
