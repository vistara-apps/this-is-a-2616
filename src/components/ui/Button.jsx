import React from 'react'
import { clsx } from 'clsx'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95'
  
  const variants = {
    primary: 'bg-primary/80 text-textPrimary hover:bg-primary hover:text-bg focus:ring-primary/50 shadow-primaryGlow hover:shadow-primaryGlow border border-primary/50',
    secondary: 'bg-secondary/80 text-textPrimary hover:bg-secondary hover:text-bg focus:ring-secondary/50 shadow-secondaryGlow hover:shadow-secondaryGlow border border-secondary/50',
    outline: 'border border-borderGlow/50 text-textPrimary hover:bg-surface/50 hover:border-borderGlow focus:ring-primary/50 bg-surface/30 backdrop-blur-sm',
    destructive: 'bg-error/80 text-textPrimary hover:bg-error hover:text-bg focus:ring-error/50 shadow-neonGlow border border-error/50'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  return (
    <button
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button