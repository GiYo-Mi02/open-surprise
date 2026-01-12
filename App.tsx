import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Background from './components/Background';
import Navigation from './components/Navigation';
import MusicPlayer from './components/MusicPlayer';
import Home from './pages/Home';
import Friends from './pages/Friends';
import Gallery from './pages/Gallery';
import Soundtrack from './pages/Soundtrack';
import { AppRoute } from './types';
import { MusicProvider } from './contexts/MusicContext';

function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(AppRoute.HOME);

  // Simple page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 10, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -10, filter: 'blur(8px)' },
  };

  const renderPage = () => {
    switch (currentRoute) {
      case AppRoute.HOME:
        return <Home onNavigate={setCurrentRoute} />;
      case AppRoute.FRIENDS:
        return <Friends />;
      case AppRoute.GALLERY:
        return <Gallery />;
      case AppRoute.SOUNDTRACK:
        return <Soundtrack />;
      default:
        return <Home onNavigate={setCurrentRoute} />;
    }
  };

  return (
    <MusicProvider>
      <div className="relative min-h-screen text-text-main font-manrope selection:bg-soft-pink selection:text-text-main">
        <Background />

        <main className="relative z-10 w-full min-h-screen">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoute}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="w-full"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Floating Elements */}
        <Navigation currentRoute={currentRoute} onNavigate={setCurrentRoute} />
        <MusicPlayer />
      </div>
    </MusicProvider>
  );
}

export default App;