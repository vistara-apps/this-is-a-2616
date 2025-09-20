import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import NicheDiscovery from './components/NicheDiscovery'
import ValidationTools from './components/ValidationTools'
import MVPScoping from './components/MVPScoping'
import MonetizationStrategy from './components/MonetizationStrategy'
import PricingSection from './components/PricingSection'
import { NicheProvider } from './context/NicheContext'

function App() {
  const [activeSection, setActiveSection] = useState('discovery')

  return (
    <NicheProvider>
      <div className="min-h-screen bg-bg">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="container max-w-7xl mx-auto px-6">
          {activeSection === 'discovery' && (
            <>
              <Hero />
              <NicheDiscovery />
            </>
          )}
          {activeSection === 'validation' && <ValidationTools />}
          {activeSection === 'mvp' && <MVPScoping />}
          {activeSection === 'monetization' && <MonetizationStrategy />}
          {activeSection === 'pricing' && <PricingSection />}
        </main>
      </div>
    </NicheProvider>
  )
}

export default App