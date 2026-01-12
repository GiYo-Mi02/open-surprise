import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen, Play } from 'lucide-react';
import BentoCard from '../components/BentoCard';
import LetterModal from '../components/LetterModal';
import { FRIENDS_LETTERS } from '../constants';
import { FriendLetter } from '../types';

const Friends: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<FriendLetter | null>(null);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handleVideoPlay = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (playingVideoId !== id) {
       setPlayingVideoId(id);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto pb-32 pt-24 px-4 sm:px-6">
      
      <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-outfit font-semibold text-3xl md:text-4xl text-text-main mb-2"
        >
          From the Heart
        </motion.h2>
        <p className="text-text-muted font-manrope">Messages from your favorite people.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FRIENDS_LETTERS.map((friend, index) => {
          const isPlaying = playingVideoId === friend.id;

          return (
            <BentoCard 
              key={friend.id}
              layoutId={`letter-${friend.id}`}
              delay={index * 0.1}
              className="group p-0 min-h-[380px] flex flex-col cursor-default"
            >
              {/* Top Half: Media (Image or Video) */}
              <div 
                className="relative h-48 w-full overflow-hidden bg-gray-100 border-b border-white/20 cursor-pointer"
                onClick={(e) => handleVideoPlay(friend.id, e)}
              >
                 <AnimatePresence mode="wait">
                   {isPlaying && friend.videoUrl ? (
                     <motion.div
                        key="video"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-10 bg-black"
                     >
                        <video
                          src={friend.videoUrl}
                          className="w-full h-full object-cover"
                          autoPlay
                          controls
                          playsInline
                        />
                     </motion.div>
                   ) : (
                     <motion.div
                       key="image"
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       exit={{ opacity: 0 }}
                       className="relative w-full h-full"
                     >
                         <img 
                           src={friend.avatarUrl} 
                           alt={friend.name}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                         />
                         <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                         
                         {/* Video Indicator */}
                         {friend.videoUrl && (
                           <div className="absolute inset-0 flex items-center justify-center">
                             <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg transform transition-transform group-hover:scale-110">
                                <Play size={20} className="text-white fill-white ml-1" />
                             </div>
                           </div>
                         )}
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>

              {/* Bottom Half: Content */}
              <div 
                className="pt-6 px-6 pb-6 flex-grow flex flex-col justify-between bg-white/50 group-hover:bg-white/60 transition-colors"
              >
                 <div onClick={() => setSelectedLetter(friend)} className="cursor-pointer">
                   <div className="flex items-center gap-3 mb-2">
                     <div className="w-8 h-8 rounded-full overflow-hidden border border-white shadow-sm">
                        <img src={friend.avatarUrl} alt={friend.name} className="w-full h-full object-cover" />
                     </div>
                     <div>
                       <h3 className="font-outfit font-bold text-lg text-text-main leading-none">{friend.name}</h3>
                       <span className="text-[10px] font-bold uppercase tracking-wider text-soft-pink/90">{friend.relationship}</span>
                     </div>
                   </div>
                   
                   <p className="text-text-muted text-sm line-clamp-3 italic mt-3 mb-4">"{friend.preview}"</p>
                 </div>
                 
                 <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedLetter(friend);
                  }}
                  className="flex items-center justify-end text-sm font-medium text-text-main opacity-60 hover:opacity-100 transition-opacity cursor-pointer w-full"
                 >
                   <MailOpen size={16} className="mr-2" />
                   Open Letter
                 </button>
              </div>
            </BentoCard>
          );
        })}
      </div>

      <LetterModal 
        isOpen={!!selectedLetter} 
        onClose={() => setSelectedLetter(null)} 
        letter={selectedLetter}
      />
    </div>
  );
};

export default Friends;