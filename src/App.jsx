import './App.css'
import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import Features from './components/sections/Features'
import Integrations from './components/sections/Integrations'
import ChatbotDemo from './components/demo/ChatbotDemo'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Integrations />
        <ChatbotDemo />
      </main>
      <Footer />
    </div>
  )
}

export default App

