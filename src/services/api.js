import axios from 'axios'

// OpenRouter API configuration
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY || ''

// Web search API configuration (using SerpAPI as example)
const SEARCH_API_URL = 'https://serpapi.com/search'
const SEARCH_API_KEY = import.meta.env.VITE_SEARCH_API_KEY || ''

// Create axios instance for OpenRouter
const openRouterAPI = axios.create({
  baseURL: OPENROUTER_API_URL,
  headers: {
    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
    'HTTP-Referer': window.location.origin,
    'X-Title': 'NicheSparkr',
    'Content-Type': 'application/json',
  },
})

// Create axios instance for web search
const searchAPI = axios.create({
  baseURL: SEARCH_API_URL,
  timeout: 10000,
})

/**
 * Make a request to OpenRouter API for LLM completion
 * @param {string} prompt - The prompt to send to the LLM
 * @param {string} model - The model to use (default: meta-llama/llama-3.1-8b-instruct:free)
 * @returns {Promise<string>} - The LLM response
 */
export const getLLMResponse = async (prompt, model = 'meta-llama/llama-3.1-8b-instruct:free') => {
  try {
    if (!OPENROUTER_API_KEY) {
      // Fallback to mock response if no API key
      return getMockLLMResponse(prompt)
    }

    const response = await openRouterAPI.post('', {
      model: model,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 0.9,
    })

    return response.data.choices[0]?.message?.content || 'No response generated'
  } catch (error) {
    console.error('OpenRouter API Error:', error)
    // Fallback to mock response on error
    return getMockLLMResponse(prompt)
  }
}

/**
 * Search the web for real-time data
 * @param {string} query - Search query
 * @param {number} num - Number of results (default: 5)
 * @returns {Promise<Array>} - Search results
 */
export const searchWeb = async (query, num = 5) => {
  try {
    if (!SEARCH_API_KEY) {
      // Fallback to mock search results if no API key
      return getMockSearchResults(query)
    }

    const response = await searchAPI.get('', {
      params: {
        q: query,
        api_key: SEARCH_API_KEY,
        engine: 'google',
        num: num,
        safe: 'active',
      }
    })

    return response.data.organic_results || []
  } catch (error) {
    console.error('Search API Error:', error)
    // Fallback to mock search results on error
    return getMockSearchResults(query)
  }
}

/**
 * Get trend data for niche analysis
 * @param {string} niche - Niche topic to analyze
 * @returns {Promise<Object>} - Trend analysis data
 */
export const getTrendData = async (niche) => {
  try {
    // Search for trend data
    const searchResults = await searchWeb(`${niche} trends 2024 market analysis`)
    
    // Use LLM to analyze search results
    const analysisPrompt = `
    Analyze the following search results about "${niche}" and provide a comprehensive trend analysis:
    
    Search Results:
    ${searchResults.map(result => `- ${result.title}: ${result.snippet}`).join('\n')}
    
    Please provide:
    1. Current market trends
    2. Growth potential (High/Medium/Low)
    3. Competition level (High/Medium/Low)
    4. Key opportunities
    5. Potential challenges
    6. Target audience insights
    7. Monetization potential
    
    Format as JSON with these fields: trends, growth, competition, opportunities, challenges, audience, monetization
    `

    const llmResponse = await getLLMResponse(analysisPrompt)
    
    try {
      // Try to parse JSON response
      return JSON.parse(llmResponse)
    } catch {
      // If parsing fails, return structured mock data
      return getMockTrendData(niche)
    }
  } catch (error) {
    console.error('Trend Analysis Error:', error)
    return getMockTrendData(niche)
  }
}

/**
 * Generate niche ideas using LLM and real web data
 * @param {string} interests - User interests/keywords
 * @returns {Promise<Array>} - Array of niche suggestions
 */
export const generateNiches = async (interests) => {
  try {
    // First, search for current trends related to interests
    const trendResults = await searchWeb(`${interests} trends 2024 opportunities market`)
    
    // Create a comprehensive prompt for niche generation
    const prompt = `
    Based on the user's interests: "${interests}" and the following current market data:
    
    Market Research Data:
    ${trendResults.slice(0, 5).map(result => `- ${result.title}: ${result.snippet}`).join('\n')}
    
    Generate 3-4 specific, profitable micro-niche ideas. For each niche, provide:
    1. Name: A clear, specific niche name
    2. Description: One sentence describing the opportunity
    3. Pain Points: 3 specific problems this niche solves
    4. Target Audience: Specific demographic details
    5. Trends: 3 relevant current trends
    6. Validation Score: Number from 1-100 based on market potential
    7. Market Size: Large/Medium/Small
    8. Competition: High/Medium/Low
    9. Monetization Potential: High/Medium/Low
    
    Focus on underserved markets with clear monetization paths. Be specific and actionable.
    Format as JSON array with objects containing these exact fields: name, description, painPoints, targetAudience, trends, validationScore, marketSize, competition, monetizationPotential
    `

    const llmResponse = await getLLMResponse(prompt)
    
    try {
      const niches = JSON.parse(llmResponse)
      // Add unique IDs to each niche
      return niches.map((niche, index) => ({
        ...niche,
        id: Date.now() + index,
        searchData: trendResults.slice(0, 3) // Include some search data for context
      }))
    } catch {
      // If parsing fails, return enhanced mock data
      return getMockNiches(interests, trendResults)
    }
  } catch (error) {
    console.error('Niche Generation Error:', error)
    return getMockNiches(interests)
  }
}

// Mock functions for fallback when APIs are unavailable
const getMockLLMResponse = (prompt) => {
  const responses = {
    'trends': 'Current trends show strong growth in AI automation, sustainability, and remote work solutions. The market is expanding rapidly with new opportunities emerging.',
    'analysis': 'Based on market analysis, this niche shows high potential with growing demand and moderate competition. Key opportunities include digital solutions and personalized services.',
    'default': 'This is a promising area with significant market potential. Consider focusing on specific pain points and underserved segments for best results.'
  }
  
  const key = Object.keys(responses).find(k => prompt.toLowerCase().includes(k)) || 'default'
  return responses[key]
}

const getMockSearchResults = (query) => [
  {
    title: `${query} - Market Trends 2024`,
    snippet: `Latest trends and opportunities in ${query}. Growing market with emerging technologies and consumer demand.`,
    link: 'https://example.com/trends'
  },
  {
    title: `${query} Industry Analysis`,
    snippet: `Comprehensive analysis of the ${query} market, including growth projections and competitive landscape.`,
    link: 'https://example.com/analysis'
  },
  {
    title: `${query} Opportunities Report`,
    snippet: `New opportunities and emerging niches in ${query}. Key insights for entrepreneurs and businesses.`,
    link: 'https://example.com/report'
  }
]

const getMockTrendData = (niche) => ({
  trends: ['Digital transformation', 'Sustainability focus', 'Personalization'],
  growth: 'High',
  competition: 'Medium',
  opportunities: ['AI integration', 'Mobile solutions', 'Subscription models'],
  challenges: ['Market saturation', 'Technical complexity', 'User acquisition'],
  audience: 'Tech-savvy professionals aged 25-45',
  monetization: 'High'
})

const getMockNiches = (interests, searchData = []) => [
  {
    id: Date.now() + 1,
    name: `AI-Powered ${interests} Assistant`,
    description: `Intelligent automation tool for ${interests} professionals to streamline workflows and boost productivity.`,
    painPoints: ['Time-consuming manual tasks', 'Information overload', 'Workflow inefficiencies'],
    targetAudience: `${interests} professionals and enthusiasts aged 25-45`,
    trends: ['AI automation', 'Productivity tools', 'Remote work'],
    validationScore: 87,
    marketSize: 'Large',
    competition: 'Medium',
    monetizationPotential: 'High',
    searchData: searchData.slice(0, 3)
  },
  {
    id: Date.now() + 2,
    name: `Sustainable ${interests} Solutions`,
    description: `Eco-friendly alternatives and sustainable practices for the ${interests} industry.`,
    painPoints: ['Environmental concerns', 'Cost of traditional methods', 'Lack of green alternatives'],
    targetAudience: `Environmentally conscious ${interests} practitioners`,
    trends: ['Sustainability', 'Green technology', 'ESG compliance'],
    validationScore: 79,
    marketSize: 'Medium',
    competition: 'Low',
    monetizationPotential: 'Medium',
    searchData: searchData.slice(0, 3)
  },
  {
    id: Date.now() + 3,
    name: `${interests} Learning Platform`,
    description: `Personalized learning and skill development platform for ${interests} enthusiasts.`,
    painPoints: ['Skill gaps', 'Outdated training methods', 'Lack of personalization'],
    targetAudience: `Beginners and intermediate learners in ${interests}`,
    trends: ['Online learning', 'Skill development', 'Personalization'],
    validationScore: 83,
    marketSize: 'Large',
    competition: 'High',
    monetizationPotential: 'High',
    searchData: searchData.slice(0, 3)
  }
]

export default {
  getLLMResponse,
  searchWeb,
  getTrendData,
  generateNiches
}