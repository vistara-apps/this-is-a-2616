import React, { useState } from 'react'
import { DollarSign, CreditCard, Users, Target, TrendingUp, ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import FeatureCard from './ui/FeatureCard'
import Tag from './ui/Tag'
import { useNiche } from '../context/NicheContext'

const MonetizationStrategy = () => {
  const { savedNiches } = useNiche()
  const [selectedNiche, setSelectedNiche] = useState(null)
  const [monetizationPlan, setMonetizationPlan] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateStrategy = async () => {
    if (!selectedNiche) return
    
    setIsGenerating(true)
    
    // Simulate strategy generation
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Mock monetization strategy based on selected niche
    const mockStrategy = {
      primaryModel: {
        type: "Subscription (SaaS)",
        description: "Recurring monthly/yearly subscriptions with tiered features",
        reasoning: "Best for ongoing value delivery and predictable revenue",
        estimatedARR: "$50k - $200k"
      },
      pricingTiers: [
        {
          name: "Starter",
          price: "$19/month",
          features: ["Core functionality", "Email support", "Basic analytics"],
          targetSegment: "Individual users, small freelancers"
        },
        {
          name: "Professional",
          price: "$49/month",
          features: ["All Starter features", "Advanced analytics", "Priority support", "Integrations"],
          targetSegment: "Growing businesses, teams"
        },
        {
          name: "Enterprise",
          price: "$149/month",
          features: ["All Pro features", "Custom integrations", "Dedicated support", "White-labeling"],
          targetSegment: "Large teams, enterprises"
        }
      ],
      alternativeModels: [
        {
          type: "Freemium",
          description: "Free tier with limited features, paid upgrades",
          pros: ["Low barrier to entry", "Viral growth potential"],
          cons: ["High conversion optimization needed", "Support costs"]
        },
        {
          type: "One-time Purchase",
          description: "Single payment for lifetime access",
          pros: ["Simple pricing", "No churn risk"],
          cons: ["Limited recurring revenue", "Update monetization challenges"]
        },
        {
          type: "Usage-based",
          description: "Pay per use or consumption",
          pros: ["Scales with value", "Fair pricing perception"],
          cons: ["Unpredictable revenue", "Complex billing"]
        }
      ],
      revenueProjection: {
        month6: { users: 100, revenue: "$4,900" },
        year1: { users: 500, revenue: "$24,500" },
        year2: { users: 1200, revenue: "$58,800" }
      },
      monetizationTips: [
        "Start with a single pricing tier to reduce decision fatigue",
        "Offer annual discounts (15-20%) to improve cash flow",
        "Use usage data to optimize pricing over time",
        "Consider freemium after establishing product-market fit"
      ]
    }
    
    setMonetizationPlan(mockStrategy)
    setIsGenerating(false)
  }

  const getModelIcon = (type) => {
    if (type.includes('Subscription')) return CreditCard
    if (type.includes('Freemium')) return Users
    if (type.includes('One-time')) return DollarSign
    return Target
  }

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4 text-textPrimary">Monetization Strategy</h2>
          <p className="text-body text-textSecondary max-w-2xl mx-auto">
            Get tailored revenue models and pricing strategies based on your niche characteristics and target market.
          </p>
        </div>

        {/* Niche Selection */}
        {savedNiches.length > 0 ? (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-textPrimary">Select a Niche for Monetization</h3>
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
                      <Tag variant="info">Revenue: {niche.monetizationPotential}</Tag>
                      {selectedNiche?.id === niche.id && (
                        <Tag variant="default">Selected</Tag>
                      )}
                    </div>
                  </div>
                </FeatureCard>
              ))}
            </div>
            
            {selectedNiche && !monetizationPlan && (
              <div className="text-center mt-6">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleGenerateStrategy}
                  disabled={isGenerating}
                >
                  {isGenerating ? 'Generating Strategy...' : 'Create Monetization Plan'}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 mb-8">
            <div className="w-16 h-16 bg-input rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-textSecondary" />
            </div>
            <h3 className="text-lg font-medium text-textPrimary mb-2">No saved niches yet</h3>
            <p className="text-textSecondary mb-4">Discover and save some niches first to generate monetization strategies.</p>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go to Discovery
            </Button>
          </div>
        )}

        {/* Monetization Strategy Results */}
        {monetizationPlan && (
          <div className="space-y-8 animate-slide-up">
            <div className="text-center">
              <h3 className="text-subheadline text-textPrimary mb-2">
                Monetization Plan for "{selectedNiche.name}"
              </h3>
              <p className="text-textSecondary">
                Estimated ARR potential: {monetizationPlan.primaryModel.estimatedARR}
              </p>
            </div>

            {/* Primary Monetization Model */}
            <FeatureCard variant="highlighted" className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 text-textPrimary">
                    Recommended: {monetizationPlan.primaryModel.type}
                  </h4>
                  <p className="text-textSecondary mb-3">{monetizationPlan.primaryModel.description}</p>
                  <div className="bg-surface p-3 rounded-lg">
                    <p className="text-sm text-textPrimary font-medium">Why this works for your niche:</p>
                    <p className="text-sm text-textSecondary mt-1">{monetizationPlan.primaryModel.reasoning}</p>
                  </div>
                </div>
              </div>
            </FeatureCard>

            {/* Pricing Tiers */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-textPrimary">Recommended Pricing Tiers</h4>
              <div className="grid gap-6 md:grid-cols-3">
                {monetizationPlan.pricingTiers.map((tier, index) => (
                  <FeatureCard
                    key={index}
                    variant={index === 1 ? "highlighted" : "default"}
                    className="p-6 relative"
                  >
                    {index === 1 && (
                      <Tag variant="info" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        Most Popular
                      </Tag>
                    )}
                    <div className="text-center mb-4">
                      <h5 className="font-semibold text-textPrimary">{tier.name}</h5>
                      <div className="text-2xl font-bold text-primary mt-2">{tier.price}</div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-textSecondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-xs text-textSecondary bg-bg p-2 rounded">
                      <strong>Target:</strong> {tier.targetSegment}
                    </div>
                  </FeatureCard>
                ))}
              </div>
            </div>

            {/* Alternative Models */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-textPrimary">Alternative Monetization Models</h4>
              <div className="grid gap-4 md:grid-cols-3">
                {monetizationPlan.alternativeModels.map((model, index) => {
                  const Icon = getModelIcon(model.type)
                  return (
                    <FeatureCard key={index} variant="default" className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon className="w-5 h-5 text-primary" />
                        <h5 className="font-medium text-textPrimary">{model.type}</h5>
                      </div>
                      <p className="text-sm text-textSecondary mb-3">{model.description}</p>
                      
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-medium text-green-600">Pros: </span>
                          <span className="text-textSecondary">{model.pros.join(', ')}</span>
                        </div>
                        <div>
                          <span className="font-medium text-red-600">Cons: </span>
                          <span className="text-textSecondary">{model.cons.join(', ')}</span>
                        </div>
                      </div>
                    </FeatureCard>
                  )
                })}
              </div>
            </div>

            {/* Revenue Projection */}
            <FeatureCard variant="default" className="p-6">
              <h4 className="text-lg font-semibold mb-4 text-textPrimary">Revenue Projection</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 bg-bg rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {monetizationPlan.revenueProjection.month6.revenue}
                  </div>
                  <div className="text-sm text-textSecondary">Month 6 MRR</div>
                  <div className="text-xs text-textSecondary mt-1">
                    {monetizationPlan.revenueProjection.month6.users} users
                  </div>
                </div>
                
                <div className="text-center p-4 bg-bg rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {monetizationPlan.revenueProjection.year1.revenue}
                  </div>
                  <div className="text-sm text-textSecondary">Year 1 MRR</div>
                  <div className="text-xs text-textSecondary mt-1">
                    {monetizationPlan.revenueProjection.year1.users} users
                  </div>
                </div>
                
                <div className="text-center p-4 bg-bg rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {monetizationPlan.revenueProjection.year2.revenue}
                  </div>
                  <div className="text-sm text-textSecondary">Year 2 MRR</div>
                  <div className="text-xs text-textSecondary mt-1">
                    {monetizationPlan.revenueProjection.year2.users} users
                  </div>
                </div>
              </div>
            </FeatureCard>

            {/* Monetization Tips */}
            <FeatureCard variant="default" className="p-6">
              <h4 className="text-lg font-semibold mb-4 text-textPrimary">Pro Tips for Your Niche</h4>
              <div className="space-y-3">
                {monetizationPlan.monetizationTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-accent mt-0.5" />
                    <p className="text-sm text-textSecondary">{tip}</p>
                  </div>
                ))}
              </div>
            </FeatureCard>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Export Strategy Report
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Generate Another Strategy
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MonetizationStrategy