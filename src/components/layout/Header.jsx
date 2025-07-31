import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Bot, Calendar, FileSpreadsheet, HardDrive } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ChatBot IA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
              Início
            </a>
            <a href="#funcionalidades" className="text-gray-700 hover:text-blue-600 transition-colors">
              Funcionalidades
            </a>
            <a href="#integracoes" className="text-gray-700 hover:text-blue-600 transition-colors">
              Integrações
            </a>
            <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">
              Demo
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Começar Agora
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#funcionalidades" 
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Funcionalidades
              </a>
              <a 
                href="#integracoes" 
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Integrações
              </a>
              <a 
                href="#demo" 
                className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-2">
                Começar Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

