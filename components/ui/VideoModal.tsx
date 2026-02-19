import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = React.useState(false);

  // Ensure component is mounted (for SSR)
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape, true);
    return () => {
      document.removeEventListener('keydown', handleEscape, true);
    };
  }, [isOpen, onClose]);

  // Pause video when modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 z-[9999] h-screen w-screen flex items-center justify-center bg-black backdrop-blur-md animate-in fade-in duration-300"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        zIndex: 9999
      }}
      onClick={onClose}
    >
      <div 
        className="w-full max-w-5xl mx-4 relative z-[10000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
          aria-label="Close video"
        >
          <X size={20} />
        </button>

        {/* Video Container */}
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
          {title && (
            <div className="px-6 py-4 bg-white/5 border-b border-white/10">
              <h3 className="text-white text-lg font-bold">{title}</h3>
            </div>
          )}
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-auto max-h-[80vh]"
            onError={(e) => {
              console.error('Video loading error:', e);
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Instructions */}
        <div className="mt-4 text-center">
          <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
            Press ESC to close
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default VideoModal;
