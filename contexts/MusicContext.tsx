import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PLAYLIST } from '../constants';
import { Track } from '../types';

interface MusicContextType {
  currentTrackIndex: number;
  currentTrack: Track;
  isPlaying: boolean;
  progress: number;
  togglePlay: () => void;
  playTrack: (index: number) => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setProgress: (progress: number) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentTrack = PLAYLIST[currentTrackIndex];

  // Logic to simulate track progress
  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // Auto play next track
            setCurrentTrackIndex((idx) => (idx + 1) % PLAYLIST.length);
            return 0;
          }
          return prev + (100 / currentTrack.duration);
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrack.duration]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setProgress(0);
    setIsPlaying(true);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    setProgress(0);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    setProgress(0);
  };

  return (
    <MusicContext.Provider
      value={{
        currentTrackIndex,
        currentTrack,
        isPlaying,
        progress,
        togglePlay,
        playTrack,
        nextTrack,
        prevTrack,
        setProgress
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};