import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-soft-cream">
      {/* Soft Gradients */}
      <div className="absolute top-0 left-0 w-full h-full opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-soft-pink rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-soft-lavender rounded-full blur-[120px] mix-blend-multiply animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-soft-blue rounded-full blur-[120px] mix-blend-multiply animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating Geometric Shapes */}
      {/* Increased opacity from 0.4 to 0.7 and added mix-blend-multiply to help shapes stand out */}
      <div className="absolute inset-0 opacity-70 mix-blend-multiply">
        {/* Circle */}
        <motion.div 
          className="absolute top-[15%] left-[10%] w-24 h-24 border-2 border-soft-pink rounded-full bg-soft-pink/10"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Squircle (Rounded Rect) */}
        <motion.div 
          className="absolute bottom-[25%] right-[15%] w-32 h-32 bg-soft-mint/20 rounded-[2rem] backdrop-blur-3xl"
          animate={{ 
            y: [0, 40, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small Ring */}
        <motion.div 
          className="absolute top-[40%] right-[30%] w-16 h-16 border-4 border-soft-blue/30 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Pill Shape */}
        <motion.div 
          className="absolute bottom-[10%] left-[30%] w-24 h-12 bg-soft-lavender/30 rounded-full"
          animate={{ 
             x: [0, -30, 0],
             opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Triangle (New) */}
        <motion.div 
          className="absolute top-[20%] right-[20%] w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-soft-pink/30 border-r-[20px] border-r-transparent"
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 360, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Diamond (New) */}
        <motion.div 
          className="absolute top-[60%] left-[5%] w-12 h-12 bg-soft-blue/20 rotate-45"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Dots (New) */}
        <motion.div 
          className="absolute bottom-[30%] left-[40%] w-4 h-4 bg-soft-lavender/50 rounded-full"
          animate={{ y: [0, -60, 0], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
         <motion.div 
          className="absolute top-[10%] right-[40%] w-6 h-6 border-2 border-text-muted/20 rounded-full"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Added Shapes */}
        
        {/* Soft Pink Circle */}
        <motion.div 
          className="absolute top-[80%] left-[20%] w-8 h-8 bg-soft-pink/40 rounded-full"
          animate={{ 
            y: [0, -40, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Tiny Mint Circle */}
        <motion.div 
          className="absolute top-[35%] right-[10%] w-5 h-5 bg-soft-mint/40 rounded-full"
          animate={{ 
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 19, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Hollow Rounded Square */}
        <motion.div 
          className="absolute bottom-[40%] right-[40%] w-14 h-14 border-2 border-soft-lavender/40 rounded-2xl"
          animate={{ 
            rotate: [0, 90, 0],
            scale: [1, 0.95, 1]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear", delay: 2 }}
        />

        {/* Wide Pill */}
        <motion.div 
          className="absolute top-[5%] left-[50%] w-28 h-6 bg-soft-cream/50 border border-white/40 rounded-full backdrop-blur-sm"
          animate={{ 
            x: [0, 40, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Large Faint Circle Corner */}
         <motion.div 
          className="absolute -bottom-16 -left-16 w-56 h-56 border-2 border-soft-pink/20 rounded-full"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small Blue Circle */}
        <motion.div 
          className="absolute top-[50%] left-[5%] w-6 h-6 bg-soft-blue/40 rounded-full"
          animate={{ 
             y: [0, 30, 0],
             opacity: [0.5, 0.2, 0.5]
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        
        {/* Vertical Pill */}
        <motion.div 
          className="absolute bottom-[20%] right-[5%] w-8 h-20 border-2 border-soft-mint/30 rounded-full"
          animate={{ 
             y: [0, -30, 0],
             rotate: [0, 10, 0]
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

      </div>
      
      {/* Noise Texture */}
      <div className="bg-noise" />
    </div>
  );
};

export default Background;