import React, { useState } from 'react'
import { CheckCircle, Clock, Star, ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import FeatureCard from './ui/FeatureCard'
import Tag from './ui/Tag'
import { useNiche } from '../context/NicheContext'

const MVPScoping = () => {
  const { savedNiches } = useNiche()
  const [selectedNiche, setSelectedNiche] = useState(null)
  const [mvpScope, setMvpScope] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateMVP = async () => {
    if (!selectedNiche) return
    
    setIsGenerating(true)
    
    // Simulate MVP generation
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Mock MVP scope based on selected niche
    const mockMVP = {
      coreFeatures: [
        {
          id: 1,
          name: "User Authentication & Onboarding",
          description: "Simple signup/login with guided onboarding flow",
          priority: "High",
          effort: "2-3 days",
          mustHave: true
        },
        {
          id: 2,
          name: "Core Problem Solver",
          description: selectedNiche.name.includes('Finance') 
            ? "Basic income tracking and budgeting dashboard"
            : selectedNiche.name.includes('Wellness')
            ? "Team wellness check-ins and mood tracking"
            : "Main value proposition feature",
          priority: "High",
          effort: "5-7 days",
          mustHave: true
        },
        {
          id: 3,
          name: "Basic Analytics Dashboard",
          description: "Simple metrics and progress tracking for users",
          priority: "Medium",
          effort: "3-4 days",
          mustHave: false
        },
        {
          id: 4,
          name: "Export/Share Functionality",
          description: "Allow users to export data or share results",
          priority: "Low",
          effort: "2-3 days",
          mustHave: false
        }
      ],
      technicalStack: {
        frontend: "React + Tailwind CSS",
        backend: "Node.js + Express",
        database: "PostgreSQL",
        hosting: "Vercel + Railway"
      },
      timeline: {
        totalTime: "2-3 weeks",
        phases: [
          { name: "Setup & Authentication", duration: "3-4 days" },
          { name: "Core Feature Development", duration: "7-10 days" },
          { name: "Testing & Deployment", duration: "2-3 days" }
        ]
      },
      successMetrics: [
        "User signup rate > 15%",
        "Feature engagement > 60%",
        "User retention (day 7) > 25%"
      ]
    }
    
    setMvpScope(mockMVP)
    setIsGenerating(false)
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'variant-warning'
      case 'Medium': return 'variant-info'
      case 'Low': return 'variant-default'
      default: return 'variant-default'
    }
  }

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4 text-textPrimary">Scope Your Lean MVP</h2>
          <p className="text-body text-textSecondary max-w-2xl mx-auto">
            Get a focused MVP blueprint that helps you build the minimum viable product for maximum learning.
          </p>
        </div>

        {/* Niche Selection */}
        {savedNiches.length > 0 ? (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-textPrimary">Select a Niche to Scope</h3>
            <div className="grid gap-4">
              {savedNiches.map((niche) => (
                <FeatureCard
                  key={niche.id}
                  variant={selectedNiche?.id === niche.id ? "highlighted" : "default"}
                  className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedNiche(niche)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-textPrimary">{niche.name}</h4>
                      <p className="text-sm text-textSecondary mt-1">{niche.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Tag variant="info">{niche.validationScore}% Match</Tag>
                      {selectedNiche?.id === niche.id && (
                        <Tag variant="default">Selected</Tag>
                      )}
                    </div>
                  </div>
                </FeatureCard>
              ))}
            </div>
            
            {selectedNiche && !mvpScope && (
              <div className="text-center mt-6">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleGenerateMVP}
                  disabled={isGenerating}
                >
                  {isGenerating ? 'Generating MVP Scope...' : 'Generate MVP Blueprint'}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 mb-8">
            <div className="w-16 h-16 bg-input rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-textSecondary" />
            </div>
            <h3 className="text-lg font-medium text-textPrimary mb-2">No saved niches yet</h3>
            <p className="text-textSecondary mb-4">Discover and save some niches first to generate MVP scopes.</p>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go to Discovery
            </Button>
          </div>
        )}

        {/* MVP Scope Results */}
        {mvpScope && (
          <div className="space-y-8 animate-slide-up">
            <div className="text-center">
              <h3 className="text-subheadline text-textPrimary mb-2">
                MVP Blueprint for "{selectedNiche.name}"
              </h3>
              <p className="text-textSecondary">
                Estimated timeline: {mvpScope.timeline.totalTime}
              </p>
            </div>

            {/* Core Features */}
            <FeatureCard variant="default" className="p-6">
              <h4 className="text-lg font-semibold mb-4 text-textPrimary">Core Features</h4>
              <div className="space-y-4">
                {mvpScope.coreFeatures.map((feature) => (
                  <div key={feature.id} className="flex items-start space-x-4 p-4 bg-bg rounded-lg">
                    <div className="mt-1">
                      {feature.mustHave ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <Clock className="w-5 h-5 text-textSecondary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h5 className="font-medium text-textPrimary">{feature.name}</h5>
                        <Tag variant={getPriorityColor(feature.priority)}>{feature.priority}</Tag>
                        <Tag variant="default">{feature.effort}</Tag>
                      </div>
                      <p className="text-sm text-textSecondary">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FeatureCard>

            {/* Technical Stack & Timeline */}
            <div className="grid gap-6 md:grid-cols-2">
              <FeatureCard variant="default" className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-textPrimary">Recommended Tech Stack</h4>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-textPrimary">Frontend: </span>
                    <span className="text-textSecondary">{mvpScope.technicalStack.frontend}</span>
                  </div>
                  <div>
                    <span className="font-medium text-textPrimary">Backend: </span>
                    <span className="text-textSecondary">{mvpScope.technicalStack.backend}</span>
                  </div>
                  <div>
                    <span className="font-medium text-textPrimary">Database: </span>
                    <span className="text-textSecondary">{mvpScope.technicalStack.database}</span>
                  </div>
                  <div>
                    <span className="font-medium text-textPrimary">Hosting: </span>
                    <span className="text-textSecondary">{mvpScope.technicalStack.hosting}</span>
                  </div>
                </div>
              </FeatureCard>

              <FeatureCard variant="default" className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-textPrimary">Development Timeline</h4>
                <div className="space-y-3">
                  {mvpScope.timeline.phases.map((phase, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-textPrimary">{phase.name}</span>
                      <span className="text-textSecondary">{phase.duration}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-textPrimary">Total Time</span>
                    <span className="text-primary">{mvpScope.timeline.totalTime}</span>
                  </div>
                </div>
              </FeatureCard>
            </div>

            {/* Success Metrics */}
            <FeatureCard variant="default" className="p-6">
              <h4 className="text-lg font-semibold mb-4 text-textPrimary">Success Metrics to Track</h4>
              <div className="grid gap-3 md:grid-cols-3">
                {mvpScope.successMetrics.map((metric, index) => (
                  <div key={index} className="p-3 bg-bg rounded-lg text-center">
                    <span className="text-sm text-textPrimary">{metric}</span>
                  </div>
                ))}
              </div>
            </FeatureCard>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Export MVP Blueprint
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Generate Another Scope
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MVPScoping