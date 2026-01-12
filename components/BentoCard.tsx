import React from 'react';
import { motion } from 'framer-motion';
import { BentoItemProps } from '../types';

const BentoCard: React.FC<BentoItemProps> = ({ 
  children, 
  className = "", 
  colSpan = 1, 
  rowSpan = 1,
  onClick,
  delay = 0,
  layoutId
}) => {
  // Map span numbers to Tailwind classes
  const colSpanClass = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4' // Full width on 4-col grid
  }[colSpan];

  const rowSpanClass = {
    1: 'row-span-1',
    2: 'row-span-2',
    3: 'row-span-3'
  }[rowSpan];

  return (
    <motion.div
      layoutId={layoutId}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -5, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        ${colSpanClass} ${rowSpanClass}
        relative bg-white/60 backdrop-blur-md 
        rounded-[32px] border border-white/60 
        shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] 
        hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.1)]
        transition-shadow duration-300
        overflow-hidden cursor-pointer
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default BentoCard;