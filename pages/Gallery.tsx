import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import BentoCard from '../components/BentoCard';

// All memory images from public/memories folder
const MEMORY_FILES = [
  '/memories/IMG_20251026_235104_536.jpg',
  '/memories/IMG_20251026_235108_327.jpg',
  '/memories/IMG_20251206_164348_631.jpg',
  '/memories/IMG_20250803_141803_787.jpg',
  '/memories/IMG_20250803_141801_991.jpg',
  '/memories/IMG_20250730_210505_470.jpg',
  '/memories/IMG_20250703_144228_636.jpg',
  '/memories/IMG_20250616_181015_347.jpg',
  '/memories/IMG_20250608_175118_350.jpg',
  '/memories/IMG_20250531_191455_512.jpg',
  '/memories/IMG_20250531_191424_114.jpg',
  '/memories/IMG_20250531_191128_130.jpg',
  '/memories/IMG_20250531_191128_130(1).jpg',
  '/memories/IMG_20250526_202204_513.jpg',
  '/memories/IMG_20250515_081002_652.jpg',
  '/memories/IMG_20241214_185242_329.jpg',
  '/memories/IMG_20241214_185145_671.jpg',
  '/memories/IMG_20241214_185106_532.jpg',
  '/memories/IMG_20241214_185057_748.jpg',
  '/memories/IMG_20241214_185051_003.jpg',
  '/memories/IMG_20241214_185049_349.jpg',
  '/memories/IMG_20241214_185039_793.jpg',
  '/memories/IMG_20241214_185031_645.jpg',
  '/memories/IMG_20241207_210718_258.jpg',
  '/memories/IMG_20241029_131656_281.jpg',
  '/memories/IMG_20240926_081507_022.jpg',
  '/memories/IMG_20240926_081501_403.jpg',
  '/memories/IMG_20240926_081454_334.jpg',
  '/memories/IMG_20240926_081445_295.jpg',
  '/memories/IMG_20240807_215829_859.jpg',
  '/memories/IMG_20240807_215636_678.jpg',
  '/memories/IMG_20240728_112258_945.jpg',
  '/memories/IMG_20240629_135538_656.jpg',
  '/memories/IMG_20240620_203426_508.jpg',
  '/memories/IMG20250329113903.jpg',
  '/memories/IMG20250223155713.jpg',
  '/memories/IMG20241008072631.jpg',
  '/memories/IMG20240925165249.jpg',
  '/memories/IMG20240925165243.jpg',
  '/memories/IMG20240913184720.jpg',
  '/memories/IMG20240824101522.jpg',
  '/memories/IMG20240824101519.jpg',
  '/memories/IMG20240821120847.jpg',
  '/memories/IMG20240821120840.jpg',
  '/memories/IMG20240727170121.jpg',
  '/memories/IMG20240727162646.jpg',
  '/memories/IMG20240727161416.jpg',
  '/memories/IMG20240712143800.jpg',
  '/memories/IMG20240530161705.jpg',
  '/memories/IMG20240520172310.jpg',
  '/memories/IMG20240511174534.jpg',
  '/memories/IMG20240511174521.jpg',
  '/memories/e29f3258-8939-4f10-8f9a-91146ae55d8bphoto.jpeg',
  '/memories/received_393484273174001.jpeg',
  '/memories/received_1032024098586894.jpeg',
  '/memories/Messenger_creation_f7334363-fee1-4549-8013-85835f9e0488.jpeg',
  '/memories/Messenger_creation_E5C09957-7503-442D-8EFB-EB2FA4498EF1.jpeg',
  '/memories/Messenger_creation_E43F0540-0E97-4FCE-ACF1-FB9A6A2775EB.jpeg',
  '/memories/Messenger_creation_DC9647ED-BE76-48FE-9CF4-83A91C9892A0.jpeg',
  '/memories/Messenger_creation_D8B21D6B-F102-4CEF-A093-55E921299DB2.jpeg',
  '/memories/Messenger_creation_D31F7386-9E33-4C89-AE5D-532ACD45921A.jpeg',
  '/memories/Messenger_creation_D244241C-6F31-4D30-B05C-88B1806F3B09.jpeg',
  '/memories/Messenger_creation_CFD6FFE7-153D-43AE-9E5E-739D3D67C50E.jpeg',
  '/memories/Messenger_creation_C3B0BAC4-8253-4D39-AD74-C4C34CF5B1C6.jpeg',
  '/memories/Messenger_creation_BF7D6C3E-E5F7-45FA-AAE2-16DDD9E6642E.jpeg',
  '/memories/Messenger_creation_A984C2B8-7F11-4C66-A2B3-E2A073726B08.jpeg',
  '/memories/Messenger_creation_92EEBABD-4721-4FF2-B01E-8DACED2759F5.jpeg',
  '/memories/Messenger_creation_6027F692-195F-4593-A52D-D00E85485EBC.jpeg',
  '/memories/Messenger_creation_50a8c7e9-16c0-46b6-a40a-039c4cb60755.jpeg',
  '/memories/Messenger_creation_49C3A82E-A821-460B-B47E-E38F4D958EB5.jpeg',
  '/memories/Messenger_creation_39B18ECD-58ED-42DD-9778-37A70B2AA94D.jpeg',
  '/memories/Messenger_creation_2C262E10-1539-43AB-808D-597B3195B0BF.jpeg',
  '/memories/Messenger_creation_1E4FC7CF-AA18-4BE2-A18E-0D7085B827A5.jpeg',
  '/memories/Messenger_creation_14A0B94E-10D8-4967-B5B0-827A6D4E356B.jpeg',
  '/memories/Messenger_creation_072668EF-4E97-4CC5-B756-A3A0A807FBEC.jpeg',
];

interface ImageData {
  id: string;
  src: string;
  isPortrait: boolean | null;
  width: number;
  height: number;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [images, setImages] = useState<ImageData[]>([]);

  // Load image dimensions to determine layout
  useEffect(() => {
    const loadImageMetadata = async () => {
      const imagePromises = MEMORY_FILES.map((src, index) => {
        return new Promise<ImageData>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            const isPortrait = img.height > img.width;
            resolve({
              id: `memory-${index}`,
              src,
              isPortrait,
              width: img.width,
              height: img.height,
            });
          };
          img.onerror = () => {
            resolve({
              id: `memory-${index}`,
              src,
              isPortrait: null,
              width: 0,
              height: 0,
            });
          };
        });
      });

      const loadedImages = await Promise.all(imagePromises);
      setImages(loadedImages);
    };

    loadImageMetadata();
  }, []);

  // Create varied bento box layout
  const getBentoSize = (index: number, isPortrait: boolean | null) => {
    // Create an interesting pattern that varies sizes
    const pattern = index % 12;
    
    if (pattern === 0 || pattern === 6) {
      // Large squares
      return { colSpan: 2 as const, rowSpan: 2 as const };
    } else if (pattern === 2 || pattern === 8) {
      // Wide rectangles
      return { colSpan: 2 as const, rowSpan: 1 as const };
    } else if ((pattern === 3 || pattern === 9) && isPortrait) {
      // Tall rectangles for portrait images
      return { colSpan: 1 as const, rowSpan: 2 as const };
    } else {
      // Regular squares
      return { colSpan: 1 as const, rowSpan: 1 as const };
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
          Moments in Time
        </motion.h2>
        <p className="text-text-muted font-manrope">
          {images.length} snapshots of our favorite memories together.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((img, index) => {
          const { colSpan, rowSpan } = getBentoSize(index, img.isPortrait);

          return (
            <BentoCard
              key={img.id}
              colSpan={colSpan}
              rowSpan={rowSpan}
              delay={index * 0.02}
              onClick={() => setSelectedImage(img)}
              className="p-0 group overflow-hidden"
            >
              <img 
                src={img.src} 
                alt={`Memory ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                 <p className="text-white font-outfit font-medium text-sm">Memory #{index + 1}</p>
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
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              layoutId={`img-${selectedImage.id}`}
              src={selectedImage.src}
              alt="Selected memory"
              className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;