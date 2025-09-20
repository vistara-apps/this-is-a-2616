import React, { useState } from 'react'
import { Search, TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import InputWithSuggestions from './ui/InputWithSuggestions'
import FeatureCard from './ui/FeatureCard'
import Tag from './ui/Tag'
import { useNiche } from '../context/NicheContext'

const NicheDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const { discoveredNiches, setDiscoveredNiches, saveNiche } = useNiche()

  const handleSearch = async () => {
    if (!searchQuery.trim()) return
    
    setIsSearching(true)
    
    // Simulate AI-powered search with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock AI-generated niche ideas
    const mockNiches = [
      {
        id: 1,
        name: "AI-Powered Personal Finance for Freelancers",
        description: "Help freelancers manage irregular income with AI-driven budgeting and tax planning tools.",
        painPoints: ["Irregular income", "Tax complexity", "No financial planning"],
        targetAudience: "Freelancers earning $30k-$100k annually",
        trends: ["AI automation", "Gig economy growth", "Financial wellness"],
        validationScore: 85,
        marketSize: "Medium",
        competition: "Low",
        monetizationPotential: "High"
      },
      {
        id: 2,
        name: "Sustainable Cooking for Busy Parents",
        description: "Zero-waste meal planning and eco-friendly cooking solutions for time-strapped families.",
        painPoints: ["Food waste", "Meal planning", "Sustainability guilt"],
        targetAudience: "Parents aged 25-40 with environmental concerns",
        trends: ["Sustainability", "Health consciousness", "Time efficiency"],
        validationScore: 78,
        marketSize: "Large",
        competition: "Medium",
        monetizationPotential: "Medium"
      },
      {
        id: 3,
        name: "Remote Team Wellness Platform",
        description: "Mental health and wellness tools specifically designed for distributed teams.",
        painPoints: ["Remote isolation", "Team bonding", "Wellness tracking"],
        targetAudience: "Remote teams at SMBs (10-100 employees)",
        trends: ["Remote work", "Mental health awareness", "Team productivity"],
        validationScore: 92,
        marketSize: "Large",
        competition: "Medium",
        monetizationPotential: "High"
      }
    ]
    
    setDiscoveredNiches(mockNiches)
    setIsSearching(false)
  }

  const suggestions = [
    "AI automation",
    "Sustainability",
    "Remote work",
    "Health & wellness",
    "Productivity tools",
    "Financial planning"
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
        <div className="bg-surface rounded-lg shadow-card p-6 mb-8">
          <InputWithSuggestions
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Enter interests, trends, or industries (e.g., AI, sustainability, remote work)"
            suggestions={suggestions}
            icon={Search}
          />
          <div className="flex justify-center mt-4">
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleSearch}
              disabled={isSearching || !searchQuery.trim()}
              className="min-w-48"
            >
              {isSearching ? 'Analyzing Trends...' : 'Discover Niches'}
            </Button>
          </div>
        </div>

        {/* Results */}
        {discoveredNiches.length > 0 && (
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-subheadline text-textPrimary">
              Found {discoveredNiches.length} promising niches
            </h3>
            
            <div className="grid gap-6">
              {discoveredNiches.map((niche) => (
                <FeatureCard
                  key={niche.id}
                  variant="default"
                  className="p-6"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-semibold text-textPrimary">{niche.name}</h4>
                        <div className="flex items-center space-x-2 ml-4">
                          <Tag variant="info" className="whitespace-nowrap">
                            {niche.validationScore}% Match
                          </Tag>
                        </div>
                      </div>
                      
                      <p className="text-textSecondary mb-4">{niche.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h5 className="font-medium text-textPrimary mb-2">Pain Points</h5>
                          <div className="flex flex-wrap gap-2">
                            {niche.painPoints.map((pain, index) => (
                              <Tag key={index} variant="warning">{pain}</Tag>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-textPrimary mb-2">Trending Topics</h5>
                          <div className="flex flex-wrap gap-2">
                            {niche.trends.map((trend, index) => (
                              <Tag key={index} variant="info">{trend}</Tag>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-textSecondary" />
                          <span className="text-textSecondary">Market: {niche.marketSize}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-textSecondary" />
                          <span className="text-textSecondary">Competition: {niche.competition}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4 text-textSecondary" />
                          <span className="text-textSecondary">Revenue: {niche.monetizationPotential}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 lg:min-w-0">
                      <Button 
                        variant="primary" 
                        size="sm"
                        onClick={() => saveNiche(niche)}
                        className="w-full lg:w-auto"
                      >
                        Save Niche
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full lg:w-auto"
                      >
                        View Details
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
            <div className="w-16 h-16 bg-input rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-textSecondary" />
            </div>
            <h3 className="text-lg font-medium text-textPrimary mb-2">Ready to discover niches?</h3>
            <p className="text-textSecondary">Enter your interests above to get started with AI-powered niche discovery.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default NicheDiscovery