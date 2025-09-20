import React from 'react'
import { clsx } from 'clsx'

const FeatureCard = ({ 
  children, 
  variant = 'default', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = 'bg-surface rounded-lg transition-all duration-200'
  
  const variants = {
    default: 'border border-border shadow-card hover:shadow-lg',
    highlighted: 'border-2 border-primary shadow-card hover:shadow-lg'
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