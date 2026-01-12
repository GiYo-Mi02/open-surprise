import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Disc, BarChart2 } from 'lucide-react';
import { useMusic } from '../contexts/MusicContext';
import { PLAYLIST } from '../constants';
import BentoCard from '../components/BentoCard';

const Soundtrack: React.FC = () => {
  const { currentTrack, isPlaying, currentTrackIndex, togglePlay, playTrack, nextTrack, prevTrack, progress } = useMusic();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto pb-32 pt-24 px-4 sm:px-6">
      
      <div className="mb-10">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-outfit font-semibold text-3xl md:text-4xl text-text-main mb-2"
        >
          Your Soundtrack
        </motion.h2>
        <p className="text-text-muted font-manrope">The songs that remind me of us.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left: Vinyl Player */}
        <div className="flex-1">
          <BentoCard className="h-full p-8 flex flex-col items-center justify-center bg-white/40 border-white/60 min-h-[450px]">
            
            {/* Background Blur Effect */}
            <div className="absolute inset-0 z-0 opacity-30 blur-3xl scale-125 pointer-events-none transition-colors duration-1000" style={{ backgroundColor: isPlaying ? '#FFD6E8' : '#E6E6FA' }}></div>

            {/* Vinyl Disc */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 mb-8 shrink-0">
               <motion.div 
                 className="w-full h-full rounded-full bg-neutral-900 shadow-2xl flex items-center justify-center relative overflow-hidden ring-4 ring-neutral-800"
                 animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                 transition={isPlaying ? { duration: 8, repeat: Infinity, ease: "linear" } : { duration: 0.5 }}
               >
                 {/* Vinyl Texture */}
                 <div className="absolute inset-0 opacity-20 rounded-full" style={{ background: 'repeating-radial-gradient(#333 0, #333 2px, #111 3px, #111 4px)' }}></div>
                 <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent"></div>
                 
                 {/* Album Art Label */}
                 <div className="relative w-1/2 h-1/2 rounded-full overflow-hidden border-4 border-neutral-800 shadow-inner">
                   <img src={currentTrack.coverUrl} alt="Album Art" className="w-full h-full object-cover" />
                 </div>
                 
                 {/* Center Hole */}
                 <div className="absolute w-3 h-3 bg-neutral-200 rounded-full z-20 shadow-inner"></div>
               </motion.div>

               {/* Tone Arm (Purely Decorative) */}
               <motion.div 
                 className="absolute -top-4 -right-4 w-24 h-48 pointer-events-none origin-top-right z-20"
                 animate={{ rotate: isPlaying ? 25 : 0 }}
                 transition={{ duration: 1, ease: "easeInOut" }}
               >
                 <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-lg">
                   <path d="M80,10 L80,150 L20,170" fill="none" stroke="#555" strokeWidth="8" strokeLinecap="round" />
                   <circle cx="80" cy="10" r="10" fill="#777" />
                   <rect x="10" y="160" width="20" height="30" fill="#333" rx="2" transform="rotate(-15 20 170)" />
                 </svg>
               </motion.div>
            </div>

            {/* Player Info */}
            <div className="text-center w-full max-w-md z-10">
              <h3 className="text-2xl font-bold font-outfit text-text-main mb-1 truncate">{currentTrack.title}</h3>
              <p className="text-text-muted font-medium mb-6">{currentTrack.artist}</p>

              {/* Progress Bar */}
              <div className="flex items-center gap-3 text-xs font-medium text-text-muted/70 mb-6">
                <span>{formatTime((progress / 100) * currentTrack.duration)}</span>
                <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full bg-text-main transition-all duration-1000 ease-linear" style={{ width: `${progress}%` }}></div>
                </div>
                <span>{formatTime(currentTrack.duration)}</span>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-8">
                <button onClick={prevTrack} className="p-2 text-text-main/70 hover:text-text-main transition-colors hover:scale-110 active:scale-95 transform">
                  <SkipBack size={32} />
                </button>
                <button 
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-text-main text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                </button>
                <button onClick={nextTrack} className="p-2 text-text-main/70 hover:text-text-main transition-colors hover:scale-110 active:scale-95 transform">
                  <SkipForward size={32} />
                </button>
              </div>
            </div>

          </BentoCard>
        </div>

        {/* Right: Playlist */}
        <div className="w-full lg:w-[400px]">
          <BentoCard className="h-full p-6 bg-white/60">
            <h3 className="text-lg font-bold font-outfit text-text-main mb-4 flex items-center gap-2">
              <Disc size={20} /> Playlist
            </h3>
            
            <div className="space-y-2">
              {PLAYLIST.map((track, idx) => {
                const isActive = idx === currentTrackIndex;
                return (
                  <motion.div 
                    key={track.id}
                    onClick={() => playTrack(idx)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`
                      p-3 rounded-xl flex items-center gap-3 cursor-pointer transition-all duration-200
                      ${isActive ? 'bg-white shadow-sm border border-soft-pink/50' : 'hover:bg-white/50 border border-transparent'}
                    `}
                  >
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                      <img src={track.coverUrl} alt={track.title} className={`w-full h-full object-cover ${isActive && !isPlaying ? 'grayscale' : ''}`} />
                      {isActive && isPlaying && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <BarChart2 size={16} className="text-white animate-pulse" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm font-bold truncate ${isActive ? 'text-text-main' : 'text-text-main/80'}`}>{track.title}</h4>
                      <p className="text-xs text-text-muted truncate">{track.artist}</p>
                    </div>

                    <div className="text-xs font-medium text-text-muted/60">
                      {formatTime(track.duration)}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </BentoCard>
        </div>

      </div>
    </div>
  );
};

export default Soundtrack;