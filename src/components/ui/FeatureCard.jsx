import React from 'react'
import { clsx } from 'clsx'

const FeatureCard = ({ 
  children, 
  variant = 'default', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = 'bg-surface/80 backdrop-blur-sm rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02]'
  
  const variants = {
    default: 'border border-borderGlow/30 shadow-card hover:shadow-cardGlow hover:border-borderGlow/50',
    highlighted: 'border-2 border-primary/50 shadow-primaryGlow hover:shadow-primaryGlow hover:border-primary'
  }
  
  return (
    <div
      className={clsx(
        baseClasses,
        variants[variant],
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

export default FeatureCard