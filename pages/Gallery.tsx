import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { MEMORIES } from '../constants';
import BentoCard from '../components/BentoCard';
import { Memory } from '../types';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Memory | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto pb-32 pt-24 px-4 sm:px-6">
       <div className="mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-outfit font-semibold text-3xl md:text-4xl text-text-main mb-2"
        >
          Moments in Time
        </motion.h2>
        <p className="text-text-muted font-manrope">Snapshots of our favorite days.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {MEMORIES.map((mem, index) => {
          // Calculate spans based on size property
          let colSpan: 1 | 2 = 1;
          let rowSpan: 1 | 2 = 1;
          
          if (mem.size === 'wide') colSpan = 2;
          if (mem.size === 'tall') rowSpan = 2;
          if (mem.size === 'medium') { colSpan = 2; rowSpan = 2; }

          return (
            <BentoCard
              key={mem.id}
              colSpan={colSpan}
              rowSpan={rowSpan}
              delay={index * 0.05}
              onClick={() => setSelectedImage(mem)}
              className="p-0 group overflow-hidden"
            >
              <img 
                src={mem.imageUrl} 
                alt={mem.caption} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                 <p className="text-white font-outfit font-medium">{mem.caption}</p>
                 <p className="text-white/70 text-xs">{mem.date}</p>
              </div>
            </BentoCard>
          )
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={32} />
            </button>
            <motion.img
              layoutId={`img-${selectedImage.id}`} // Simple layout transition
              src={selectedImage.imageUrl}
              alt={selectedImage.caption}
              className="max-w-full max-h-full rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-0 w-full text-center text-white pointer-events-none">
              <h3 className="font-outfit text-xl font-semibold">{selectedImage.caption}</h3>
              <p className="text-white/60 font-manrope">{selectedImage.date}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;