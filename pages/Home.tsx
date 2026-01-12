import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Heart, X, Quote } from 'lucide-react';
import BentoCard from '../components/BentoCard';
import { HERO_MESSAGE, MAIN_LETTER, PLACEHOLDER_VIDEO } from '../constants';

import { AppRoute } from '../types';

interface HomeProps {
  onNavigate: (route: AppRoute) => void;
}

// Internal Modal Component for Main Letter
const MainLetterModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-md flex items-center justify-center p-4"
          />
          <motion.div
            layoutId="main-letter-card"
            className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-[#FFFCF8] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl pointer-events-auto relative custom-scrollbar flex flex-col"
            >
               <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-black/5 hover:bg-black/10 rounded-full transition-colors z-10"
              >
                <X size={20} className="text-text-muted" />
              </button>

              <div className="p-10 md:p-14">
                <div className="flex flex-col items-center mb-10 text-center">
                  <div className="p-4 bg-soft-pink/20 rounded-full mb-4">
                     <Heart size={32} className="text-pink-500 fill-pink-500" />
                  </div>
                  <h2 className="font-outfit font-bold text-3xl text-text-main mb-1">A Letter from Me</h2>
                  <span className="text-text-muted text-sm tracking-widest uppercase">To my favorite person</span>
                </div>

                <div className="flex justify-center mb-8">
                  <Quote size={32} className="text-soft-pink/60 fill-soft-pink/30" />
                </div>

                <div className="prose prose-lg mx-auto text-text-main font-manrope leading-loose whitespace-pre-line text-lg">
                  {MAIN_LETTER}
                </div>

                <div className="mt-16 pt-8 border-t border-black/5 flex justify-center">
                   <p className="font-handwriting text-4xl text-text-muted transform -rotate-2">
                     Love always, Cristof Siringan
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

// Internal Modal Component for Video
const HomeVideoModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
              >
                <X size={24} />
            </button>
          </motion.div>

          <div className="fixed inset-0 z-[70] flex items-center justify-center pointer-events-none p-4">
             <motion.div
                layoutId="home-video-card"
                className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl pointer-events-auto relative"
             >
                <video 
                  src="./VID_20260112_222809.mp4" 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  controls 
                />
             </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [activeModal, setActiveModal] = useState<'letter' | 'video' | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto pb-32 pt-24 px-4 sm:px-6">
      
      {/* Hero Section */}
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-outfit font-light text-5xl md:text-7xl text-text-main mb-6 tracking-tight"
        >
          {HERO_MESSAGE.greeting}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-manrope text-lg md:text-xl text-text-muted leading-relaxed"
        >
          {HERO_MESSAGE.intro}
        </motion.p>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* Main Letter Card - Large */}
        <BentoCard 
          colSpan={2} 
          rowSpan={2} 
          delay={0.2}
          layoutId="main-letter-card"
          onClick={() => setActiveModal('letter')}
          className="group p-8 md:p-10 flex flex-col justify-between min-h-[400px] cursor-pointer hover:bg-white/70 transition-colors"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-soft-pink/20 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
           
           <div>
             <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-soft-pink/30 rounded-full">
                 <Heart size={20} className="text-pink-500 fill-pink-500" />
               </div>
               <span className="font-outfit font-semibold text-text-muted tracking-wider text-sm uppercase">A Letter from Me</span>
             </div>
             <p className="font-manrope text-lg text-text-main leading-relaxed line-clamp-[8] whitespace-pre-line">
               {MAIN_LETTER}
             </p>
           </div>
           
           <div className="mt-6 flex items-center text-text-main font-medium group-hover:gap-2 transition-all">
             <span>Read full letter</span>
             <ArrowRight size={18} className="ml-2" />
           </div>
        </BentoCard>

        {/* Video Player Card */}
        <BentoCard 
          colSpan={2} 
          rowSpan={1} 
          delay={0.3}
          layoutId="home-video-card"
          onClick={() => setActiveModal('video')}
          className="group overflow-hidden relative min-h-[220px] cursor-pointer"
        >
          <img 
            src="https://picsum.photos/seed/couple/800/400" 
            alt="Us" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform cursor-pointer">
              <Play size={24} className="text-white fill-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-white">
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">Watch Video</span>
            <h3 className="font-outfit text-xl font-semibold mt-1">My Video Message for you</h3>
          </div>
        </BentoCard>

        {/* Playlist Teaser */}
        <BentoCard 
          colSpan={1} 
          rowSpan={1} 
          delay={0.4}
          onClick={() => onNavigate(AppRoute.SOUNDTRACK)}
          className="p-6 bg-gradient-to-br from-soft-lavender to-white cursor-pointer hover:shadow-md transition-all"
        >
          <div className="h-full flex flex-col justify-between">
             <div className="flex justify-between items-start">
               <h3 className="font-outfit font-bold text-2xl text-text-main">Your<br/>Mixtape</h3>
               <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
             </div>
             <p className="text-sm text-text-muted mt-2">Curated vibes just for you.</p>
          </div>
        </BentoCard>

        {/* Friends Link */}
        <BentoCard 
          colSpan={1} 
          rowSpan={1} 
          delay={0.5}
          onClick={() => onNavigate(AppRoute.FRIENDS)}
          className="p-6 bg-[#E0F7FA] group cursor-pointer"
        >
           <div className="h-full flex flex-col justify-between items-center text-center">
             <div className="flex -space-x-4 mt-2">
               {[1,2,3].map(i => (
                 <img key={i} src={`https://picsum.photos/seed/friend${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-white" alt="friend" />
               ))}
             </div>
             <div>
               <h3 className="font-outfit font-semibold text-lg text-text-main">Friend Letters</h3>
               <p className="text-xs text-text-muted mt-1 group-hover:text-text-main transition-colors">Tap to view →</p>
             </div>
           </div>
        </BentoCard>

      </div>

      {/* Modals */}
      <MainLetterModal isOpen={activeModal === 'letter'} onClose={() => setActiveModal(null)} />
      <HomeVideoModal isOpen={activeModal === 'video'} onClose={() => setActiveModal(null)} />
    </div>
  );
};

export default Home;