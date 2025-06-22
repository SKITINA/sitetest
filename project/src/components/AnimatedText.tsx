import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  type?: 'typing' | 'fade' | 'slide' | 'bounce';
  speed?: number;
  delay?: number;
  className?: string;
  repeat?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  type = 'fade',
  speed = 50,
  delay = 0,
  className = '',
  repeat = false
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (type === 'typing') {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else if (repeat) {
          setTimeout(() => {
            setDisplayText('');
            setCurrentIndex(0);
          }, 2000);
        }
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, type, repeat]);

  useEffect(() => {
    if (type !== 'typing') {
      setDisplayText(text);
    }
  }, [text, type]);

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.8,
          delay,
          ease: "easeOut" as const
        }
      }
    },
    slide: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay,
          ease: "easeOut" as const
        }
      }
    },
    bounce: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay,
          ease: "easeOut" as const
        }
      }
    }
  };

  if (type === 'typing') {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      </motion.span>
    );
  }

  return (
    <motion.span
      className={className}
      variants={variants[type]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {displayText}
    </motion.span>
  );
};

export default AnimatedText; 