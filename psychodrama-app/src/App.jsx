import { useState, useCallback } from 'react';
import { LangContext } from './LangContext';
import ParticleBackground from './components/ParticleBackground';
import LangPicker from './components/LangPicker';
import Landing from './components/Landing';
import Quiz from './components/Quiz';
import Result from './components/Result';

const SCREENS = { LANG: 'lang', LANDING: 'landing', QUIZ: 'quiz', RESULT: 'result' };

export default function App() {
  const [screen, setScreen] = useState(SCREENS.LANG);
  const [lang, setLang] = useState('fr');
  const [resultData, setResultData] = useState(null);

  const handleLang = useCallback((selectedLang) => {
    setLang(selectedLang);
    setScreen(SCREENS.LANDING);
  }, []);

  const handleStart = useCallback(() => setScreen(SCREENS.QUIZ), []);

  const handleComplete = useCallback((data) => {
    setResultData(data);
    setScreen(SCREENS.RESULT);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleRestart = useCallback(() => {
    setResultData(null);
    setScreen(SCREENS.LANG);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <LangContext.Provider value={lang}>
      <div className="min-h-screen bg-abyss text-parchment overflow-x-hidden">
        <ParticleBackground />
        {screen === SCREENS.LANG && <LangPicker onSelect={handleLang} />}
        {screen === SCREENS.LANDING && <Landing onStart={handleStart} />}
        {screen === SCREENS.QUIZ && <Quiz onComplete={handleComplete} />}
        {screen === SCREENS.RESULT && <Result data={resultData} onRestart={handleRestart} />}
      </div>
    </LangContext.Provider>
  );
}
