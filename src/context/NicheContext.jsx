import React, { createContext, useContext, useState } from 'react'

const NicheContext = createContext()

export const useNiche = () => {
  const context = useContext(NicheContext)
  if (!context) {
    throw new Error('useNiche must be used within a NicheProvider')
  }
  return context
}

export const NicheProvider = ({ children }) => {
  const [discoveredNiches, setDiscoveredNiches] = useState([])
  const [savedNiches, setSavedNiches] = useState([])
  
  const saveNiche = (niche) => {
    setSavedNiches(prev => {
      // Avoid duplicates
      if (prev.find(n => n.id === niche.id)) {
        return prev
      }
      return [...prev, niche]
    })
  }
  
  const removeNiche = (nicheId) => {
    setSavedNiches(prev => prev.filter(n => n.id !== nicheId))
  }
  
  const value = {
    discoveredNiches,
    setDiscoveredNiches,
    savedNiches,
    setSavedNiches,
    saveNiche,
    removeNiche
  }
  
  return (
    <NicheContext.Provider value={value}>
      {children}
    </NicheContext.Provider>
  )
}