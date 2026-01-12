import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote, Play, Pause } from 'lucide-react';
import { FriendLetter } from '../types';

interface LetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  letter: FriendLetter | null;
}

const ModalVideoPlayer: React.FC<{ src: string; poster: string }> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-lg cursor-pointer group"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        playsInline
        onEnded={() => setIsPlaying(false)}
      />
      <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
        <motion.div 
          className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <Pause size={24} className="text-white fill-white" />
          ) : (
            <Play size={24} className="text-white fill-white ml-1" />
          )}
        </motion.div>
      </div>
    </div>
  );
};

const LetterModal: React.FC<LetterModalProps> = ({ isOpen, onClose, letter }) => {
  if (!letter) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-md flex items-center justify-center p-4"
          />

          {/* Modal Content */}
          <motion.div
            layoutId={`letter-${letter.id}`}
            className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-[#FFFCF8] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl pointer-events-auto relative custom-scrollbar"
            >
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors z-10"
              >
                <X size={20} className="text-text-muted" />
              </button>

              <div className="p-8 md:p-12">
                {/* Header */}
                <div className="flex flex-col items-center mb-8 text-center">
                  <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4">
                    <img src={letter.avatarUrl} alt={letter.name} className="w-full h-full object-cover" />
                  </div>
                  <h2 className="font-outfit font-bold text-3xl text-text-main mb-1">{letter.name}</h2>
                  <span className="inline-block px-3 py-1 bg-soft-lavender/50 text-text-muted text-xs font-semibold uppercase tracking-wider rounded-full">
                    {letter.relationship}
                  </span>
                </div>

                {/* Video Player (if exists) */}
                {letter.videoUrl && (
                  <ModalVideoPlayer src={letter.videoUrl} poster={letter.avatarUrl} />
                )}

                {/* Decorative Quote Icon */}
                <div className="flex justify-center mb-6">
                  <Quote size={32} className="text-soft-pink/60 fill-soft-pink/30" />
                </div>

                {/* Letter Body */}
                <div className="prose prose-lg mx-auto text-text-main font-manrope leading-relaxed whitespace-pre-line">
                  {letter.fullLetter}
                </div>

                {/* Footer / Signature */}
                <div className="mt-12 pt-8 border-t border-black/5 flex justify-center">
                   <p className="font-handwriting text-3xl text-text-muted transform -rotate-2">
                     With love, {letter.name.split(' ')[0]}
                   </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LetterModal;