import React, { useState } from 'react'
import { Search, Menu, X, Sparkles } from 'lucide-react'
import Button from './ui/Button'

const Header = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { id: 'discovery', label: 'Discover', icon: Search },
    { id: 'validation', label: 'Validate', icon: Sparkles },
    { id: 'mvp', label: 'MVP Scope', icon: Sparkles },
    { id: 'monetization', label: 'Monetize', icon: Sparkles },
    { id: 'pricing', label: 'Pricing', icon: Sparkles },
  ]

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-headline font-bold text-textPrimary">NicheSparkr</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : 'text-textSecondary hover:text-textPrimary hover:bg-input'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Start Free Trial
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
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`px-4 py-3 text-left text-sm font-medium rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary text-white'
                      : 'text-textSecondary hover:text-textPrimary hover:bg-input'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex flex-col space-y-2 mt-4">
              <Button variant="outline" size="sm" className="w-full">
                Sign In
              </Button>
              <Button variant="primary" size="sm" className="w-full">
                Start Free Trial
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header