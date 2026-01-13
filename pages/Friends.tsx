import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen, Play, Volume2, VolumeX } from 'lucide-react';
import BentoCard from '../components/BentoCard';

// Video file paths - UPDATE THESE WITH YOUR CLOUD STORAGE URLS
// For local development, use: '/VID_20260112_222809.mp4'
// For production, use your cloud storage URLs like: 'https://your-bucket.r2.dev/VID_20260112_222809.mp4'
const VIDEO_FILES = [
  '/VID_20260112_222809.mp4',
  '/VID_20260112_062328_024.mp4',
  '/VID_20260112_062319_992.mp4',
  '/VID_20260112_062314_586.mp4',
  '/VID_20260111_184346.mp4',
  '/VID_20260110_225242.mp4',
  '/video_20260111_213051.mp4',
  '/VID20260111212505.mp4',
  '/VID20260110214617.mp4',
  '/Messenger_creation_33C00315-1962-4CA7-93CC-6ADCFE3E3996.mp4',
];

// Letter images from public folder
const LETTER_IMAGES = [
  '/Letter/a.png',
  '/Letter/b.png',
  '/Letter/c.png',
  '/Letter/d.png',
  '/Letter/e.png',
  '/Letter/f.png',
  '/Letter/g.jpg',
];

interface VideoData {
  id: string;
  src: string;
  isPortrait: boolean | null;
}

const Friends: React.FC = () => {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set());
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Detect video orientation
  useEffect(() => {
    const loadVideoMetadata = async () => {
      const videoPromises = VIDEO_FILES.map((src, index) => {
        return new Promise<VideoData>((resolve) => {
          const video = document.createElement('video');
          video.src = src;
          video.onloadedmetadata = () => {
            const isPortrait = video.videoHeight > video.videoWidth;
            resolve({
              id: `video-${index}`,
              src,
              isPortrait,
            });
          };
          video.onerror = () => {
            resolve({
              id: `video-${index}`,
              src,
              isPortrait: null,
            });
          };
        });
      });

      const loadedVideos = await Promise.all(videoPromises);
      setVideos(loadedVideos);
    };

    loadVideoMetadata();
  }, []);

  const handleVideoPlay = (id: string) => {
    const videoElement = videoRefs.current[id];
    if (!videoElement) return;

    if (playingVideoId === id) {
      // Pause current video
      videoElement.pause();
      setPlayingVideoId(null);
    } else {
      // Pause any currently playing video
      if (playingVideoId && videoRefs.current[playingVideoId]) {
        videoRefs.current[playingVideoId]?.pause();
      }
      // Unmute and play new video
      videoElement.muted = false;
      videoElement.play();
      setPlayingVideoId(id);
      // Remove from muted set if it was there
      setMutedVideos(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  const toggleMute = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const videoElement = videoRefs.current[id];
    if (!videoElement) return;

    setMutedVideos(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
        videoElement.muted = false;
      } else {
        newSet.add(id);
        videoElement.muted = true;
      }
      return newSet;
    });
  };

  const handleLetterNavigation = (direction: 'prev' | 'next') => {
    if (direction === 'next' && currentLetterIndex < LETTER_IMAGES.length - 1) {
      setCurrentLetterIndex(prev => prev + 1);
    } else if (direction === 'prev' && currentLetterIndex > 0) {
      setCurrentLetterIndex(prev => prev - 1);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto pb-32 pt-24 px-4 sm:px-6">
      
      {/* Video Gallery Section */}
      <div className="mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="font-outfit font-semibold text-3xl md:text-4xl text-text-main mb-2">
            Video Messages
          </h2>
          <p className="text-text-muted font-manrope">Watch heartfelt wishes from friends and family.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {videos.map((video, index) => {
            const isPlaying = playingVideoId === video.id;
            const isMuted = mutedVideos.has(video.id);

            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`
                  relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer
                  hover:shadow-lg transition-all duration-300 group
                  ${video.isPortrait ? 'row-span-2' : 'aspect-video'}
                `}
                onClick={() => handleVideoPlay(video.id)}
              >
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  src={video.src}
                  className={`w-full h-full ${video.isPortrait ? 'object-contain' : 'object-cover'} bg-black`}
                  loop
                  playsInline
                  muted
                />
                
                {/* Play/Pause Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-text-main fill-text-main ml-1" />
                    </div>
                  </div>
                )}

                {/* Mute/Unmute Button */}
                {isPlaying && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={(e) => toggleMute(video.id, e)}
                    className="absolute top-3 right-3 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                  >
                    {isMuted ? (
                      <VolumeX size={18} className="text-white" />
                    ) : (
                      <Volume2 size={18} className="text-white" />
                    )}
                  </motion.button>
                )}

                {/* Video Index */}
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-md text-white text-xs font-medium">
                  {index + 1}/{videos.length}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Letter Section - Anonymous Reveal */}
      <div className="mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="font-outfit font-semibold text-3xl md:text-4xl text-text-main mb-2">
            A Special Letter
          </h2>
          <p className="text-text-muted font-manrope">Someone wrote you something beautiful.</p>
        </motion.div>

        <div className="flex justify-center">
          <BentoCard 
            delay={0.4}
            className="relative w-full max-w-2xl min-h-[500px] p-0 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isLetterOpen ? (
                // Closed Envelope State
                <motion.div
                  key="closed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsLetterOpen(true)}
                  className="w-full h-full min-h-[500px] flex flex-col items-center justify-center p-12 cursor-pointer bg-gradient-to-br from-soft-pink/20 via-soft-cream/40 to-soft-lavender/20 hover:from-soft-pink/30 hover:via-soft-cream/50 hover:to-soft-lavender/30 transition-all"
                >
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 3, -3, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="mb-8"
                  >
                    <div className="relative">
                      {/* Envelope */}
                      <div className="w-40 h-28 bg-white border-2 border-soft-pink/30 rounded-lg shadow-2xl flex items-center justify-center">
                        <MailOpen size={56} className="text-soft-pink/60" strokeWidth={1.5} />
                      </div>
                      {/* Wax Seal */}
                      <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-soft-pink/80 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                        <span className="text-white text-2xl">💌</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <h3 className="font-handwriting text-4xl text-text-main mb-4">
                    For You
                  </h3>
                  <p className="text-text-muted text-center font-manrope mb-8 max-w-md">
                    A heartfelt message awaits you. Click to open and reveal what's inside.
                  </p>
                  
                  <div className="px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full border-2 border-soft-pink/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    <span className="text-base font-semibold text-text-main flex items-center gap-3">
                      <MailOpen size={20} />
                      Open Letter
                    </span>
                  </div>
                </motion.div>
              ) : (
                // Opened Letter State - Image Gallery
                <motion.div
                  key="open"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full min-h-[500px] flex flex-col bg-white/80 backdrop-blur-sm"
                >
                  {/* Letter Image Display */}
                  <div className="relative flex-grow flex items-center justify-center p-8 bg-soft-cream/30">
                    <img 
                      src={LETTER_IMAGES[currentLetterIndex]} 
                      alt={`Letter page ${currentLetterIndex + 1}`}
                      className="max-w-full max-h-[600px] object-contain shadow-2xl rounded-lg"
                    />
                  </div>

                  {/* Navigation Controls */}
                  <div className="p-6 bg-white/60 backdrop-blur-sm border-t border-white/40 flex items-center justify-between">
                    <button
                      onClick={() => handleLetterNavigation('prev')}
                      disabled={currentLetterIndex === 0}
                      className="px-4 py-2 rounded-full bg-white/80 border border-soft-pink/30 text-text-main font-medium hover:bg-soft-pink/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      ← Previous
                    </button>

                    <span className="text-sm font-medium text-text-muted">
                      {currentLetterIndex + 1} / {LETTER_IMAGES.length}
                    </span>

                    <button
                      onClick={() => handleLetterNavigation('next')}
                      disabled={currentLetterIndex === LETTER_IMAGES.length - 1}
                      className="px-4 py-2 rounded-full bg-white/80 border border-soft-pink/30 text-text-main font-medium hover:bg-soft-pink/20 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                    >
                      Next →
                    </button>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => {
                      setIsLetterOpen(false);
                      setCurrentLetterIndex(0);
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full border border-white/60 flex items-center justify-center hover:bg-white transition-all shadow-lg z-10"
                  >
                    <span className="text-text-main text-xl">×</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </BentoCard>
        </div>
      </div>
    </div>
  );
};

export default Friends;