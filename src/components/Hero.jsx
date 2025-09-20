import React from 'react'
import { TrendingUp, Target, Zap, Brain, Cpu, Sparkles, TestTube } from 'lucide-react'
import Button from './ui/Button'
import { testAPIIntegration } from '../services/test-api'

const Hero = () => {
  const handleTestAPI = async () => {
    console.log('🧪 Running API Integration Test...')
    const result = await testAPIIntegration()
    if (result.success) {
      alert('✅ API Integration Test Passed! Check console for details.')
    } else {
      alert('❌ API Integration Test Failed. Check console for details.')
    }
  }

  return (
    <section className="py-16 md:py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute inset-0 scan-lines opacity-30"></div>
      
      <div className="text-center max-w-4xl mx-auto relative">
        <div className="mb-6">
          <h1 className="text-display mb-4 text-textPrimary neon-text animate-neon-flicker">
            Decode Your Next{' '}
            <span className="gradient-text">Quantum</span>{' '}
            Micro-Niche
          </h1>
          <div className="flex justify-center items-center space-x-4 text-textAccent">
            <Brain className="w-6 h-6 animate-glow-pulse" />
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            <Cpu className="w-6 h-6 animate-glow-pulse" />
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            <Sparkles className="w-6 h-6 animate-glow-pulse" />
          </div>
        </div>
        <p className="text-subheadline text-textSecondary mb-8 max-w-2xl mx-auto">
          Neural-powered niche discovery protocols with real-time web intelligence for cyberpunk entrepreneurs ready to hack the matrix of opportunity.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="primary" size="lg" className="w-full sm:w-auto neon-border animate-glow-pulse">
            <Brain className="w-4 h-4 mr-2" />
            Initialize Neural Scan
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto border-secondary/50 text-secondary hover:bg-secondary/10">
            <Cpu className="w-4 h-4 mr-2" />
            Access Data Archives
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={handleTestAPI}
            className="w-full sm:w-auto border-accent/50 text-accent hover:bg-accent/10"
          >
            <TestTube className="w-4 h-4 mr-2" />
            Test Systems
          </Button>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 bg-surface/50 rounded-lg border border-borderGlow/30 shadow-cardGlow hover:shadow-primaryGlow transition-all duration-300 animate-float" style={{ animationDelay: '0s' }}>
            <div className="w-12 h-12 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-textPrimary neon-text">Neural Discovery</h3>
            <p className="text-textSecondary">Decrypt hidden market patterns through quantum trend analysis and real-time web intelligence.</p>
          </div>
          
          <div className="text-center p-6 bg-surface/50 rounded-lg border border-borderGlow/30 shadow-cardGlow hover:shadow-accentGlow transition-all duration-300 animate-float" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-accent/20 border border-accent/50 rounded-lg flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
              <Target className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-textPrimary neon-text">Quantum Validation</h3>
            <p className="text-textSecondary">Probe market demand through advanced signal processing before initializing your build sequence.</p>
          </div>
          
          <div className="text-center p-6 bg-surface/50 rounded-lg border border-borderGlow/30 shadow-cardGlow hover:shadow-secondaryGlow transition-all duration-300 animate-float" style={{ animationDelay: '0.4s' }}>
            <div className="w-12 h-12 bg-secondary/20 border border-secondary/50 rounded-lg flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
              <Zap className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-textPrimary neon-text">Hyper-Speed Scoping</h3>
            <p className="text-textSecondary">Generate optimized MVP architectures and monetization algorithms tailored to your quantum niche.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero