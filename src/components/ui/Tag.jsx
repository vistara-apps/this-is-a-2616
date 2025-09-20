import React from 'react'
import { clsx } from 'clsx'

const Tag = ({ 
  children, 
  variant = 'default', 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center px-2 py-1 rounded-md text-xs font-medium'
  
  const variants = {
    default: 'bg-input text-textPrimary',
    info: 'bg-primary/10 text-primary',
    warning: 'bg-accent/10 text-accent',
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800'
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