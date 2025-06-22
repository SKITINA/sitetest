import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  size = 'md',
  icon,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonVariants: Variants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      transition: { type: 'spring', stiffness: 300 },
    },
    tap: {
      scale: 0.95,
      transition: { type: 'spring', stiffness: 400, damping: 20 },
    },
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center font-semibold rounded-lg
        text-white bg-blue-600 hover:bg-blue-700
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        transition-all duration-300
        ${sizeClasses[size]}
        ${(disabled || loading) ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {loading ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="mr-2"
          >
            <Loader2 size={size === 'lg' ? 24 : 20} />
          </motion.div>
          <span>En cours...</span>
        </>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </motion.button>
  );
};

export default AnimatedButton; 