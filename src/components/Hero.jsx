import React from 'react'
import { TrendingUp, Target, Zap } from 'lucide-react'
import Button from './ui/Button'

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-display mb-6 text-textPrimary">
          Find Your Next{' '}
          <span className="text-primary">Profitable</span>{' '}
          Micro-Niche
        </h1>
        <p className="text-subheadline text-textSecondary mb-8 max-w-2xl mx-auto">
          AI-powered niche discovery, validation, and scoping tools designed for solo builders ready to launch their next big idea.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Start Discovering Niches
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            View Example Report
          </Button>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-textPrimary">AI-Powered Discovery</h3>
            <p className="text-textSecondary">Uncover hidden opportunities through trend analysis and market intelligence.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-textPrimary">Quick Validation</h3>
            <p className="text-textSecondary">Test demand signals before you build with our validation framework.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-textPrimary">Rapid Scoping</h3>
            <p className="text-textSecondary">Get focused MVP blueprints and monetization strategies tailored to your niche.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero