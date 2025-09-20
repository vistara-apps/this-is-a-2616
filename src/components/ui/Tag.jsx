import React from 'react'
import { clsx } from 'clsx'

const Tag = ({ 
  children, 
  variant = 'default', 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border transition-all duration-300 hover:scale-105'
  
  const variants = {
    default: 'bg-surface/50 text-textPrimary border-borderGlow/30 hover:border-borderGlow/50',
    info: 'bg-primary/10 text-primary border-primary/30 hover:border-primary/50 hover:shadow-primaryGlow',
    warning: 'bg-accent/10 text-accent border-accent/30 hover:border-accent/50 hover:shadow-accentGlow',
    success: 'bg-success/10 text-success border-success/30 hover:border-success/50 hover:shadow-neonGlow',
    error: 'bg-error/10 text-error border-error/30 hover:border-error/50 hover:shadow-neonGlow'
  }
  
  return (
    <span
      className={clsx(
        baseClasses,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Tag