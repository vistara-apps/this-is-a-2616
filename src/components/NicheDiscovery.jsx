import React, { useState } from 'react'
import { Search, TrendingUp, Users, DollarSign, ArrowRight, Sparkles } from 'lucide-react'
import Button from './ui/Button'
import InputWithSuggestions from './ui/InputWithSuggestions'
import FeatureCard from './ui/FeatureCard'
import Tag from './ui/Tag'
import { useNiche } from '../context/NicheContext'
import { generateNiches } from '../services/api'

const NicheDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const { discoveredNiches, setDiscoveredNiches, saveNiche } = useNiche()

  const handleSearch = async () => {
    if (!searchQuery.trim()) return
    
    setIsSearching(true)
    
    try {
      // Use real API to generate niches with web search data
      const niches = await generateNiches(searchQuery)
      setDiscoveredNiches(niches)
    } catch (error) {
      console.error('Error generating niches:', error)
      // Show user-friendly error message
      setDiscoveredNiches([])
    } finally {
      setIsSearching(false)
    }
  }

  const suggestions = [
    "AI automation",
    "Cybersecurity",
    "Virtual reality",
    "Blockchain technology",
    "Neural interfaces",
    "Quantum computing",
    "Biotech innovation",
    "Space technology",
    "Robotics",
    "Digital twins",
    "Metaverse",
    "Synthetic biology"
  ]

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4 text-textPrimary">Discover Your Next Niche</h2>
          <p className="text-body text-textSecondary">
            Enter your interests or trends you're curious about. Our AI will analyze thousands of data points to uncover profitable micro-niches.
          </p>
        </div>

        {/* Search Interface */}
        <div className="bg-surface rounded-lg shadow-cardGlow border border-borderGlow/30 p-6 mb-8 cyber-grid scan-lines">
          <InputWithSuggestions
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Enter futuristic interests or emerging technologies..."
            suggestions={suggestions}
            icon={Search}
          />
          <div className="flex justify-center mt-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleSearch}
              disabled={isSearching || !searchQuery.trim()}
              className="min-w-48 neon-border animate-glow-pulse"
            >
              {isSearching ? (
                <>
                  <Sparkles className="w-4 h-4 mr-2 animate-spin" />
                  Quantum Analysis...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 mr-2" />
                  Discover Niches
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Results */}
        {discoveredNiches.length > 0 && (
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-subheadline text-textPrimary neon-text">
              <span className="gradient-text">Found {discoveredNiches.length} quantum niches</span>
            </h3>
            
            <div className="grid gap-6">
              {discoveredNiches.map((niche, index) => (
                <FeatureCard
                  key={niche.id}
                  variant="default"
                  className="p-6 bg-surfaceGlow border border-borderGlow/40 shadow-cardGlow hover:shadow-primaryGlow transition-all duration-300 animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-semibold text-textPrimary neon-text">{niche.name}</h4>
                        <div className="flex items-center space-x-2 ml-4">
                          <Tag variant="info" className="whitespace-nowrap bg-primary/20 text-primary border-primary/50 neon-border">
                            {niche.validationScore}% Neural Match
                          </Tag>
                        </div>
                      </div>
                      
                      <p className="text-textSecondary mb-4">{niche.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h5 className="font-medium text-textAccent mb-2">System Errors</h5>
                          <div className="flex flex-wrap gap-2">
                            {niche.painPoints.map((pain, index) => (
                              <Tag key={index} variant="warning" className="bg-error/20 text-error border-error/50">{pain}</Tag>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-textAccent mb-2">Neural Patterns</h5>
                          <div className="flex flex-wrap gap-2">
                            {niche.trends.map((trend, index) => (
                              <Tag key={index} variant="info" className="bg-secondary/20 text-secondary border-secondary/50">{trend}</Tag>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-secondary" />
                          <span className="text-textSecondary">Matrix: {niche.marketSize}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-accent" />
                          <span className="text-textSecondary">Resistance: {niche.competition}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-success" />
                          <span className="text-textSecondary">Credits: {niche.monetizationPotential}</span>
                        </div>
                      </div>

                      {/* Show search data if available */}
                      {niche.searchData && niche.searchData.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-borderGlow/30">
                          <h5 className="font-medium text-textAccent mb-2 text-sm">Real-time Intel</h5>
                          <div className="space-y-1">
                            {niche.searchData.slice(0, 2).map((data, index) => (
                              <div key={index} className="text-xs text-textSecondary/80 truncate">
                                • {data.title}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col space-y-2 lg:min-w-0">
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={() => saveNiche(niche)}
                        className="w-full lg:w-auto neon-border animate-glow-pulse"
                      >
                        Archive Data
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full lg:w-auto border-secondary/50 text-secondary hover:bg-secondary/10"
                      >
                        Deep Scan
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </FeatureCard>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {discoveredNiches.length === 0 && !isSearching && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-surface border-2 border-borderGlow/50 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
              <Search className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-lg font-medium text-textPrimary mb-2 neon-text">Neural Network Ready</h3>
            <p className="text-textSecondary">Initialize quantum search protocols to discover emerging niches...</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default NicheDiscovery