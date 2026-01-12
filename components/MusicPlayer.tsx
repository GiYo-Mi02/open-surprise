import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMusic } from '../contexts/MusicContext';

const MusicPlayer: React.FC = () => {
  const { currentTrack, isPlaying, progress, togglePlay, nextTrack, prevTrack } = useMusic();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    togglePlay();
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    nextTrack();
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    prevTrack();
  };

  return (
    <motion.div 
      className="fixed bottom-24 right-4 z-40 sm:bottom-6 sm:right-6"
      initial={false}
      animate={isExpanded ? "expanded" : "collapsed"}
    >
      <motion.div 
        className="bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-[2rem] overflow-hidden"
        variants={{
          expanded: { width: 300, height: 'auto', borderRadius: 24 },
          collapsed: { width: 56, height: 56, borderRadius: 28 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div 
              key="collapsed"
              className="w-full h-full flex items-center justify-center cursor-pointer relative"
              exit={{ opacity: 0 }}
            >
              <div className={`absolute inset-0 rounded-full ${isPlaying ? 'animate-spin-slow' : ''}`} style={{ animationDuration: '4s' }}>
                 <img src={currentTrack.coverUrl} alt="cover" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="absolute inset-0 bg-black/10 rounded-full" />
              <Music2 size={24} className="text-white relative z-10" />
            </motion.div>
          ) : (
            <motion.div 
              key="expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-5 flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-text-muted tracking-wider uppercase">Now Playing</span>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                  className="p-1 hover:bg-black/5 rounded-full"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L11 11M11 1L1 11" stroke="#6B6568" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Album Art & Info */}
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-16 h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0"
                  animate={{ 
                    scale: isPlaying ? [1, 1.05, 1] : 1, 
                  }}
                  transition={{ 
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
                  }}
                >
                  <img src={currentTrack.coverUrl} alt={currentTrack.title} className="w-full h-full object-cover" />
                </motion.div>
                <div className="flex flex-col overflow-hidden">
                  <h4 className="font-outfit font-semibold text-text-main text-lg truncate">{currentTrack.title}</h4>
                  <p className="text-sm text-text-muted truncate">{currentTrack.artist}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-soft-pink transition-all duration-1000 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6">
                <button onClick={handlePrev} className="text-text-muted hover:text-text-main transition-colors">
                  <SkipBack size={20} fill="currentColor" />
                </button>
                <motion.button 
                  onClick={handleTogglePlay} 
                  className="w-12 h-12 bg-text-main text-white rounded-full flex items-center justify-center shadow-lg transition-transform"
                  animate={{
                    scale: isPlaying ? [1, 1.1, 1] : 1,
                    boxShadow: isPlaying ? "0 4px 15px rgba(0,0,0,0.2)" : "0 4px 6px rgba(0,0,0,0.1)"
                  }}
                  transition={{
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                </motion.button>
                <button onClick={handleNext} className="text-text-muted hover:text-text-main transition-colors">
                  <SkipForward size={20} fill="currentColor" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default MusicPlayer;