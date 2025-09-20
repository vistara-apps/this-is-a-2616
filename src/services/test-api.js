// Simple test script to verify API integration
import { generateNiches, getLLMResponse, searchWeb } from './api.js'

export const testAPIIntegration = async () => {
  console.log('🚀 Testing NicheSparkr API Integration...\n')
  
  try {
    // Test 1: Basic LLM Response
    console.log('1. Testing LLM Response...')
    const llmResponse = await getLLMResponse('What are emerging tech trends in 2024?')
    console.log('✅ LLM Response received:', llmResponse.substring(0, 100) + '...\n')
    
    // Test 2: Web Search
    console.log('2. Testing Web Search...')
    const searchResults = await searchWeb('AI automation trends 2024')
    console.log('✅ Search Results received:', searchResults.length, 'results\n')
    
    // Test 3: Niche Generation
    console.log('3. Testing Niche Generation...')
    const niches = await generateNiches('artificial intelligence')
    console.log('✅ Generated Niches:', niches.length, 'niches')
    
    niches.forEach((niche, index) => {
      console.log(`   ${index + 1}. ${niche.name} (${niche.validationScore}% match)`)
    })
    
    console.log('\n🎉 All API tests completed successfully!')
    return { success: true, niches, searchResults, llmResponse }
    
  } catch (error) {
    console.error('❌ API Test Failed:', error)
    return { success: false, error: error.message }
  }
}

// Test individual functions
export const testLLM = async (prompt = 'Hello, how are you?') => {
  try {
    const response = await getLLMResponse(prompt)
    console.log('LLM Test Result:', response)
    return response
  } catch (error) {
    console.error('LLM Test Error:', error)
    return null
  }
}

export const testSearch = async (query = 'technology trends') => {
  try {
    const results = await searchWeb(query)
    console.log('Search Test Results:', results)
    return results
  } catch (error) {
    console.error('Search Test Error:', error)
    return null
  }
}

// Auto-run test if this file is executed directly
if (typeof window !== 'undefined') {
  // Browser environment - expose to window for manual testing
  window.testNicheSparkrAPI = testAPIIntegration
  window.testLLM = testLLM
  window.testSearch = testSearch
  
  console.log('🔧 NicheSparkr API Test Functions Available:')
  console.log('- window.testNicheSparkrAPI() - Run full integration test')
  console.log('- window.testLLM(prompt) - Test LLM functionality')
  console.log('- window.testSearch(query) - Test search functionality')
}