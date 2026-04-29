import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { createWhatsAppLink, storeArea, storeCity } from '../data/storeInfo';

export default function WhatsAppButton() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="bg-[#111] border border-emerald-500/20 rounded-lg p-4 shadow-2xl max-w-[240px]"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-emerald-400 text-sm font-medium">Chat with Us</span>
              <button onClick={() => setExpanded(false)} className="text-[#8a8a8a] hover:text-white">
                <X size={14} />
              </button>
            </div>
            <p className="text-[#8a8a8a] text-xs mb-3">
              Need help choosing the perfect attar in {storeArea}, {storeCity}? We&apos;re here to assist.
            </p>
            <a
              href={createWhatsAppLink(`Hi, I'm from ${storeArea}, ${storeCity} and I'm interested in your attar collection`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium rounded-md transition-colors"
            >
              <MessageCircle size={14} />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:shadow-emerald-500/40 hover:scale-110"
      >
        <MessageCircle size={24} className="text-white" />
      </motion.button>
    </div>
  );
}
