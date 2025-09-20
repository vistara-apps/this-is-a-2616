import React, { useState } from 'react'
import { CheckCircle, AlertCircle, TrendingUp, Users, MessageSquare } from 'lucide-react'
import Button from './ui/Button'
import FeatureCard from './ui/FeatureCard'
import Tag from './ui/Tag'
import Modal from './ui/Modal'
import { useNiche } from '../context/NicheContext'

const ValidationTools = () => {
  const { savedNiches } = useNiche()
  const [selectedNiche, setSelectedNiche] = useState(null)
  const [validationResults, setValidationResults] = useState({})
  const [isValidating, setIsValidating] = useState(false)
  const [showSurveyModal, setShowSurveyModal] = useState(false)

  const validationMethods = [
    {
      id: 'search-volume',
      name: 'Search Volume Analysis',
      description: 'Analyze keyword search volumes and trends',
      icon: TrendingUp,
      difficulty: 'Easy',
      timeRequired: '5 minutes'
    },
    {
      id: 'competitor-analysis',
      name: 'Competitor Research',
      description: 'Identify and analyze existing solutions',
      icon: Users,
      difficulty: 'Medium',
      timeRequired: '15 minutes'
    },
    {
      id: 'survey-creation',
      name: 'Target Audience Survey',
      description: 'Create and distribute validation surveys',
      icon: MessageSquare,
      difficulty: 'Medium',
      timeRequired: '30 minutes'
    }
  ]

  const handleValidation = async (nicheId, methodId) => {
    setIsValidating(true)
    
    // Simulate validation process
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Mock validation results
    const mockResults = {
      'search-volume': {
        score: 75,
        insights: [
          'Monthly search volume: 12,000-15,000',
          'Growing trend: +25% over 6 months',
          'Low competition keywords available'
        ],
        status: 'positive'
      },
      'competitor-analysis': {
        score: 68,
        insights: [
          'Found 3 direct competitors',
          'Market gap in mobile experience',
          'Average solution price: $29/month'
        ],
        status: 'warning'
      },
      'survey-creation': {
        score: 89,
        insights: [
          '127 responses collected',
          '73% confirmed pain point exists',
          '45% willing to pay for solution'
        ],
        status: 'positive'
      }
    }
    
    setValidationResults(prev => ({
      ...prev,
      [`${nicheId}-${methodId}`]: mockResults[methodId]
    }))
    
    setIsValidating(false)
  }

  const getStatusIcon = (status) => {
    if (status === 'positive') return <CheckCircle className="w-5 h-5 text-green-600" />
    if (status === 'warning') return <AlertCircle className="w-5 h-5 text-yellow-600" />
    return <AlertCircle className="w-5 h-5 text-red-600" />
  }

  const surveyQuestions = [
    "How often do you experience [pain point]?",
    "What solutions have you tried to address this problem?",
    "How much would you be willing to pay for an effective solution?",
    "What's the biggest challenge with current solutions?",
    "How do you currently solve this problem?"
  ]

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4 text-textPrimary">Validate Your Niche Ideas</h2>
          <p className="text-body text-textSecondary max-w-2xl mx-auto">
            Test market demand and validate your assumptions before building. Choose a saved niche to begin validation.
          </p>
        </div>

        {/* Saved Niches Selection */}
        {savedNiches.length > 0 ? (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-textPrimary">Your Saved Niches</h3>
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
          </div>
        ) : (
          <div className="text-center py-12 mb-8">
            <div className="w-16 h-16 bg-input rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-textSecondary" />
            </div>
            <h3 className="text-lg font-medium text-textPrimary mb-2">No saved niches yet</h3>
            <p className="text-textSecondary mb-4">Discover and save some niches first to start validation.</p>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go to Discovery
            </Button>
          </div>
        )}

        {/* Validation Methods */}
        {selectedNiche && (
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-subheadline text-textPrimary">
              Validation Tools for "{selectedNiche.name}"
            </h3>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {validationMethods.map((method) => {
                const resultKey = `${selectedNiche.id}-${method.id}`
                const result = validationResults[resultKey]
                const Icon = method.icon
                
                return (
                  <FeatureCard key={method.id} variant="default" className="p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-textPrimary">{method.name}</h4>
                        <p className="text-sm text-textSecondary mt-1">{method.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-textSecondary mb-4">
                      <span>{method.difficulty}</span>
                      <span>{method.timeRequired}</span>
                    </div>
                    
                    {result ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-textPrimary">Validation Score</span>
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold">{result.score}%</span>
                            {getStatusIcon(result.status)}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {result.insights.map((insight, index) => (
                            <div key={index} className="text-sm text-textSecondary bg-bg rounded-md p-2">
                              {insight}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => {
                          if (method.id === 'survey-creation') {
                            setShowSurveyModal(true)
                          } else {
                            handleValidation(selectedNiche.id, method.id)
                          }
                        }}
                        disabled={isValidating}
                      >
                        {isValidating ? 'Validating...' : 'Start Validation'}
                      </Button>
                    )}
                  </FeatureCard>
                )
              })}
            </div>
          </div>
        )}

        {/* Survey Creation Modal */}
        <Modal
          isOpen={showSurveyModal}
          onClose={() => setShowSurveyModal(false)}
          title="Create Validation Survey"
        >
          <div className="space-y-4">
            <p className="text-textSecondary">
              We've prepared targeted questions for your niche. Customize them or use as-is to validate market demand.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-medium text-textPrimary">Suggested Questions:</h4>
              {surveyQuestions.map((question, index) => (
                <div key={index} className="p-3 bg-bg rounded-md">
                  <p className="text-sm">{question.replace('[pain point]', selectedNiche?.painPoints[0] || 'this problem')}</p>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-3 pt-4">
              <Button
                variant="primary"
                className="flex-1"
                onClick={() => {
                  handleValidation(selectedNiche.id, 'survey-creation')
                  setShowSurveyModal(false)
                }}
              >
                Create & Launch Survey
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowSurveyModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  )
}

export default ValidationTools