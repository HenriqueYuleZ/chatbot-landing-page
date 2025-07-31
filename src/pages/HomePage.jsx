import HeroSection from '../components/sections/HeroSection'
import Features from '../components/sections/Features'
import Integrations from '../components/sections/Integrations'
import ChatbotDemo from '../components/demo/ChatbotDemo'

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Features />
      <Integrations />
      <ChatbotDemo />
    </main>
  )
}

export default HomePage
