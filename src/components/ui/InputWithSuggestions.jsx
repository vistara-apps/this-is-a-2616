import React, { useState } from 'react'
import { clsx } from 'clsx'

const InputWithSuggestions = ({ 
  value, 
  onChange, 
  placeholder, 
  suggestions = [], 
  icon: Icon,
  className = '' 
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false)
  
  const handleSuggestionClick = (suggestion) => {
    onChange(suggestion)
    setShowSuggestions(false)
  }
  
  return (
    <div className={clsx('relative', className)}>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textSecondary" />
        )}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={clsx(
            'w-full bg-input/80 backdrop-blur-sm border border-borderGlow/50 rounded-lg py-3 text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:shadow-primaryGlow transition-all duration-300 neon-border',
            Icon ? 'pl-10 pr-4' : 'px-4'
          )}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
      </div>
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-surface/90 backdrop-blur-sm border border-borderGlow/50 rounded-lg shadow-cardGlow max-h-60 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs font-medium text-textAccent mb-2 px-2 neon-text">Neural Suggestions</div>
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left px-3 py-2 text-sm text-textPrimary hover:bg-surface/50 hover:border-borderGlow/30 border border-transparent rounded-md transition-all duration-300 hover:shadow-primaryGlow hover:text-primary"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default InputWithSuggestions