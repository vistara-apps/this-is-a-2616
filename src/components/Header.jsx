import React, { useState } from 'react'
import { Search, Menu, X, Sparkles, Brain, Shield, Cpu, DollarSign, Zap } from 'lucide-react'
import Button from './ui/Button'

const Header = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { id: 'discovery', label: 'Neural Scan', icon: Brain },
    { id: 'validation', label: 'Data Probe', icon: Shield },
    { id: 'mvp', label: 'Code Matrix', icon: Cpu },
    { id: 'monetization', label: 'Credit Flow', icon: DollarSign },
    { id: 'pricing', label: 'Access Tiers', icon: Zap },
  ]

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-borderGlow/50 shadow-cardGlow">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center animate-glow-pulse">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <span className="text-headline font-bold text-textPrimary neon-text">
              <span className="gradient-text">NicheSparkr</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const IconComponent = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 flex items-center space-x-2 ${
                    activeSection === item.id
                      ? 'bg-primary/20 text-primary border border-primary/50 shadow-primaryGlow neon-text'
                      : 'text-textSecondary hover:text-textPrimary hover:bg-surface/50 border border-transparent hover:border-borderGlow/30'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-secondary/50 text-secondary hover:bg-secondary/10">
              Access Terminal
            </Button>
            <Button variant="primary" size="sm" className="neon-border animate-glow-pulse">
              Initialize Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-textSecondary hover:text-textPrimary hover:bg-input"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-borderGlow/50 bg-surface/50 backdrop-blur-sm">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className={`px-4 py-3 text-left text-sm font-medium rounded-md transition-all duration-300 flex items-center space-x-3 ${
                      activeSection === item.id
                        ? 'bg-primary/20 text-primary border border-primary/50 shadow-primaryGlow neon-text'
                        : 'text-textSecondary hover:text-textPrimary hover:bg-surface/50 border border-transparent hover:border-borderGlow/30'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>
            <div className="flex flex-col space-y-2 mt-4">
              <Button variant="outline" size="sm" className="w-full border-secondary/50 text-secondary hover:bg-secondary/10">
                Access Terminal
              </Button>
              <Button variant="primary" size="sm" className="w-full neon-border animate-glow-pulse">
                Initialize Trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header