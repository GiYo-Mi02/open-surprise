import React from 'react';
import { Heart, Users, Image as ImageIcon, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import { AppRoute } from '../types';
import { NAVIGATION_ITEMS } from '../constants';

interface NavigationProps {
  currentRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentRoute, onNavigate }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-auto">
      <div className="flex items-center gap-2 p-2 bg-white/40 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full">
        {NAVIGATION_ITEMS.map((item) => {
          const isActive = currentRoute === item.id;
          let Icon = Heart;
          
          if (item.id === AppRoute.FRIENDS) Icon = Users;
          else if (item.id === AppRoute.GALLERY) Icon = ImageIcon;
          else if (item.id === AppRoute.SOUNDTRACK) Icon = Music;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative px-6 py-3 rounded-full flex items-center justify-center transition-all duration-300 outline-none group"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white shadow-sm rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${isActive ? 'text-text-main' : 'text-text-muted hover:text-text-main'}`}>
                <Icon size={18} className={isActive ? 'fill-soft-pink text-soft-pink' : ''} />
                <span className={isActive ? 'opacity-100' : 'hidden sm:block'}>{item.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;