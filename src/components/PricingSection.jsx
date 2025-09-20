import React, { useState } from 'react'
import { Check, Star, Zap } from 'lucide-react'
import Button from './ui/Button'
import FeatureCard from './ui/FeatureCard'
import Tag from './ui/Tag'

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "Perfect for getting started with niche discovery",
      features: [
        "3 niche searches per month",
        "Basic trend analysis",
        "Community access",
        "Email support"
      ],
      limitations: [
        "Limited validation tools",
        "No MVP scoping",
        "No monetization strategies"
      ],
      cta: "Get Started Free",
      variant: "outline"
    },
    {
      name: "Pro",
      price: { monthly: 19, yearly: 15 },
      description: "Ideal for solo builders serious about validation",
      features: [
        "Unlimited niche searches",
        "Advanced AI trend analysis",
        "All validation tools",
        "Basic MVP scoping",
        "Monetization frameworks",
        "Priority email support",
        "Export reports (PDF)"
      ],
      cta: "Start Pro Trial",
      variant: "primary",
      popular: true,
      savings: "Save $48/year"
    },
    {
      name: "Expert",
      price: { monthly: 49, yearly: 39 },
      description: "For builders who want deep market insights",
      features: [
        "Everything in Pro",
        "Advanced analytics dashboard",
        "Custom trend reports",
        "Competitor intelligence",
        "Market sizing tools",
        "Revenue projections",
        "1-on-1 strategy calls (monthly)",
        "White-label reports"
      ],
      cta: "Start Expert Trial",
      variant: "outline"
    }
  ]

  const faqs = [
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! Pro and Expert plans come with a 14-day free trial. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal for your convenience."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. You can cancel your subscription at any time. You'll retain access until the end of your current billing period."
    }
  ]

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4 text-textPrimary">Choose Your Plan</h2>
          <p className="text-body text-textSecondary max-w-2xl mx-auto mb-8">
            Start with our free plan and upgrade as you grow. All paid plans include a 14-day free trial.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-input rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'bg-surface text-textPrimary shadow-sm'
                  : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                billingCycle === 'yearly'
                  ? 'bg-surface text-textPrimary shadow-sm'
                  : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              Yearly
              <Tag variant="info" className="ml-2">Save 20%</Tag>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {plans.map((plan, index) => (
            <FeatureCard
              key={plan.name}
              variant={plan.popular ? "highlighted" : "default"}
              className="p-6 relative"
            >
              {plan.popular && (
                <Tag variant="info" className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </Tag>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-textPrimary mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-textPrimary">
                    ${plan.price[billingCycle]}
                  </span>
                  <span className="text-textSecondary">
                    /{billingCycle === 'monthly' ? 'mo' : 'mo'}
                  </span>
                </div>
                {billingCycle === 'yearly' && plan.savings && (
                  <Tag variant="warning" className="text-xs">{plan.savings}</Tag>
                )}
                <p className="text-sm text-textSecondary mt-2">{plan.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-textPrimary">{feature}</span>
                  </div>
                ))}
                
                {plan.limitations && plan.limitations.map((limitation, idx) => (
                  <div key={idx} className="flex items-start space-x-3 opacity-50">
                    <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                      <div className="w-3 h-3 border border-textSecondary rounded-full"></div>
                    </div>
                    <span className="text-sm text-textSecondary line-through">{limitation}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.variant}
                size="lg"
                className="w-full"
              >
                {plan.cta}
              </Button>
            </FeatureCard>
          ))}
        </div>

        {/* Enterprise Section */}
        <FeatureCard variant="default" className="p-8 text-center mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-textPrimary mb-3">Need a Custom Solution?</h3>
            <p className="text-textSecondary mb-6">
              Large teams, agencies, or unique requirements? We offer custom enterprise solutions with dedicated support, custom integrations, and volume pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
              <Button variant="primary" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </FeatureCard>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-subheadline text-center mb-8 text-textPrimary">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FeatureCard key={index} variant="default" className="p-6">
                <h4 className="font-semibold text-textPrimary mb-2">{faq.question}</h4>
                <p className="text-textSecondary">{faq.answer}</p>
              </FeatureCard>
            ))}
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12 p-6 bg-surface rounded-lg border-2 border-accent/20">
          <h4 className="font-semibold text-textPrimary mb-2">30-Day Money-Back Guarantee</h4>
          <p className="text-textSecondary">
            Not satisfied? Get a full refund within 30 days, no questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingSection