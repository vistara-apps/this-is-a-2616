# NicheSparkr - Retro Futuristic Niche Discovery Platform

A cyberpunk-themed AI-powered niche discovery platform that helps entrepreneurs find profitable micro-niches using real-time web data and LLM analysis.

## 🚀 Features

- **Neural Discovery**: AI-powered niche analysis using OpenRouter LLM integration
- **Real-time Intel**: Web search integration for current market data
- **Quantum Validation**: Advanced market validation algorithms
- **Retro Futuristic UI**: Cyberpunk-inspired design with neon effects and animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **AI Integration**: OpenRouter API for LLM completions
- **Web Search**: SerpAPI integration for real-time market data
- **Icons**: Lucide React
- **Styling**: Custom retro futuristic theme with neon effects

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nichesparkr
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your API keys in `.env`:
```env
# OpenRouter API (Required for AI features)
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here

# Search API (Required for real-time data)
VITE_SEARCH_API_KEY=your_search_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

## 🔑 API Setup

### OpenRouter API
1. Visit [OpenRouter.ai](https://openrouter.ai/)
2. Create an account and get your API key
3. Add it to your `.env` file as `VITE_OPENROUTER_API_KEY`

### Search API (SerpAPI)
1. Visit [SerpAPI.com](https://serpapi.com/)
2. Create an account and get your API key
3. Add it to your `.env` file as `VITE_SEARCH_API_KEY`

**Note**: The application will work with mock data if API keys are not configured, but for full functionality, both APIs are recommended.

## 🎨 Design Features

### Retro Futuristic Theme
- **Color Palette**: Deep dark backgrounds with electric purple, hot pink, and cyan accents
- **Typography**: Neon text effects with glowing shadows
- **Animations**: Floating elements, glow pulses, and matrix-inspired effects
- **UI Elements**: Cyberpunk-styled cards, borders, and buttons

### Visual Effects
- Cyber grid backgrounds
- Scan line overlays
- Holographic gradients
- Neon glow animations
- Floating animations with staggered delays

## 📱 Usage

1. **Neural Scan**: Enter futuristic interests or emerging technologies
2. **Quantum Analysis**: AI analyzes web data to find profitable niches
3. **Data Probe**: Review generated niches with validation scores
4. **Archive Data**: Save promising niches for further analysis

## 🚀 Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🔮 Future Enhancements

- Additional LLM providers integration
- Advanced market analysis algorithms
- User authentication and data persistence
- Export functionality for niche reports
- Real-time collaboration features

## 🎯 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

**Built with ⚡ by the future, for the future**