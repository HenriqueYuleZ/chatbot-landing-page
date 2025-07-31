import { 
  Bot, 
  Calendar, 
  FileSpreadsheet, 
  HardDrive, 
  BarChart3, 
  Clock, 
  Users, 
  Zap,
  MessageSquare,
  Shield,
  Smartphone,
  Globe
} from 'lucide-react'

const Features = () => {
  const mainFeatures = [
    {
      icon: Bot,
      title: "IA Conversacional Avançada",
      description: "Processamento de linguagem natural para conversas fluidas e contextuais com seus clientes.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Calendar,
      title: "Integração Google Calendar",
      description: "Agendamento automático de reuniões e consultas diretamente na conversa.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: FileSpreadsheet,
      title: "Google Sheets Conectado",
      description: "Consulta e atualização de dados em planilhas em tempo real durante o atendimento.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: HardDrive,
      title: "Google Drive Integrado",
      description: "Acesso e compartilhamento de documentos diretamente no chat.",
      color: "bg-orange-100 text-orange-600"
    }
  ]

  const additionalFeatures = [
    {
      icon: BarChart3,
      title: "Analytics Detalhado",
      description: "Relatórios completos sobre interações e performance"
    },
    {
      icon: Clock,
      title: "Disponibilidade 24/7",
      description: "Atendimento ininterrupto para seus clientes"
    },
    {
      icon: Users,
      title: "Múltiplos Operadores",
      description: "Suporte para equipes de atendimento"
    },
    {
      icon: Zap,
      title: "Respostas Instantâneas",
      description: "Tempo de resposta inferior a 1 segundo"
    },
    {
      icon: MessageSquare,
      title: "Multi-canal",
      description: "WhatsApp, Telegram, site e mais"
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Criptografia e proteção de dados"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Otimizado para dispositivos móveis"
    },
    {
      icon: Globe,
      title: "Multi-idioma",
      description: "Suporte a diversos idiomas"
    }
  ]

  return (
    <section id="funcionalidades" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Funcionalidades Poderosas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para automatizar e otimizar o atendimento da sua empresa
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            E muito mais...
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <IconComponent className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Integration Showcase */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Integração Completa com Google Workspace
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Conecte seu chatbot com todas as ferramentas que sua empresa já usa. 
              Configuração simples e sincronização automática.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span className="font-semibold">Calendar</span>
              </div>
              <div className="text-blue-200">+</div>
              <div className="flex items-center space-x-2">
                <FileSpreadsheet className="h-6 w-6" />
                <span className="font-semibold">Sheets</span>
              </div>
              <div className="text-blue-200">+</div>
              <div className="flex items-center space-x-2">
                <HardDrive className="h-6 w-6" />
                <span className="font-semibold">Drive</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

