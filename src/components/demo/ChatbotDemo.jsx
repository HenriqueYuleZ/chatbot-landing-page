import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Bot, User, Send, Calendar, FileSpreadsheet, HardDrive } from 'lucide-react'

const ChatbotDemo = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Olá! Sou o assistente IA da sua empresa. Como posso ajudar você hoje?',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const demoResponses = {
    'agendar': {
      content: 'Perfeito! Vou verificar sua agenda no Google Calendar. Que tipo de reunião você gostaria de agendar?',
      integration: 'calendar'
    },
    'reunião': {
      content: 'Encontrei alguns horários disponíveis na sua agenda. Que tal terça-feira às 14h ou quarta-feira às 10h?',
      integration: 'calendar'
    },
    'dados': {
      content: 'Vou consultar os dados na planilha do Google Sheets. Encontrei as informações que você precisa!',
      integration: 'sheets'
    },
    'planilha': {
      content: 'Acessando sua planilha no Google Sheets... Os dados foram atualizados com sucesso!',
      integration: 'sheets'
    },
    'documento': {
      content: 'Localizei o documento no seu Google Drive. Posso compartilhar o link ou enviar uma cópia?',
      integration: 'drive'
    },
    'arquivo': {
      content: 'Encontrei 3 arquivos relacionados no seu Google Drive. Qual você gostaria de acessar?',
      integration: 'drive'
    },
    'default': {
      content: 'Entendi! Posso ajudar você com agendamentos, consulta de dados em planilhas, acesso a documentos e muito mais. O que você precisa?',
      integration: null
    }
  }

  const quickActions = [
    { text: 'Agendar reunião', icon: Calendar },
    { text: 'Consultar dados', icon: FileSpreadsheet },
    { text: 'Buscar documento', icon: HardDrive }
  ]

  const handleSendMessage = (message = inputValue) => {
    if (!message.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const lowerMessage = message.toLowerCase()
      let response = demoResponses.default

      for (const [key, value] of Object.entries(demoResponses)) {
        if (lowerMessage.includes(key)) {
          response = value
          break
        }
      }

      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: response.content,
        timestamp: new Date(),
        integration: response.integration
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const getIntegrationIcon = (integration) => {
    switch (integration) {
      case 'calendar':
        return <Calendar className="h-4 w-4 text-green-600" />
      case 'sheets':
        return <FileSpreadsheet className="h-4 w-4 text-purple-600" />
      case 'drive':
        return <HardDrive className="h-4 w-4 text-orange-600" />
      default:
        return null
    }
  }

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Experimente o ChatBot IA
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teste nossa demonstração interativa e veja como o chatbot pode transformar o atendimento da sua empresa
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-full">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistente IA</h3>
                  <div className="text-blue-100 text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Online - Demonstração
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
                    message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`p-2 rounded-full ${
                      message.type === 'user' 
                        ? 'bg-blue-600' 
                        : 'bg-gray-200'
                    }`}>
                      {message.type === 'user' ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-gray-600" />
                      )}
                    </div>
                    <div className={`rounded-lg px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                      {message.integration && (
                        <div className="flex items-center space-x-1 mt-2 pt-2 border-t border-gray-200">
                          {getIntegrationIcon(message.integration)}
                          <span className="text-xs text-gray-600">
                            Integração Google ativa
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="bg-gray-200 p-2 rounded-full">
                      <Bot className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="border-t border-gray-100 p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSendMessage(action.text)}
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {action.text}
                    </Button>
                  )
                })}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Demo Notice */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500">
              Esta é uma demonstração. O chatbot real oferece funcionalidades ainda mais avançadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChatbotDemo

