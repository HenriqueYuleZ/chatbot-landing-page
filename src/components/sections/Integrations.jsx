import { Calendar, FileSpreadsheet, HardDrive, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Integrations = () => {
  const integrations = [
    {
      icon: Calendar,
      name: "Google Calendar",
      description: "Agendamento automático de reuniões e consultas",
      features: [
        "Verificação de disponibilidade em tempo real",
        "Criação automática de eventos",
        "Envio de convites e lembretes",
        "Sincronização com múltiplas agendas"
      ],
      color: "bg-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: FileSpreadsheet,
      name: "Google Sheets",
      description: "Consulta e atualização de dados em planilhas",
      features: [
        "Leitura de dados em tempo real",
        "Atualização automática de registros",
        "Criação de relatórios dinâmicos",
        "Validação de informações"
      ],
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: HardDrive,
      name: "Google Drive",
      description: "Acesso e compartilhamento de documentos",
      features: [
        "Busca inteligente de arquivos",
        "Compartilhamento seguro de documentos",
        "Upload automático de anexos",
        "Controle de permissões"
      ],
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ]

  const benefits = [
    {
      title: "Configuração Simples",
      description: "Conecte suas contas Google em poucos cliques"
    },
    {
      title: "Sincronização Automática",
      description: "Dados sempre atualizados em tempo real"
    },
    {
      title: "Segurança Garantida",
      description: "Protocolo OAuth2 e criptografia avançada"
    },
    {
      title: "Sem Interrupções",
      description: "Funciona perfeitamente com seu fluxo atual"
    }
  ]

  return (
    <section id="integracoes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Integrações Poderosas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conecte seu chatbot com as ferramentas que sua empresa já usa. 
            Máxima eficiência com configuração mínima.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {integrations.map((integration, index) => {
            const IconComponent = integration.icon
            return (
              <div 
                key={index}
                className={`${integration.bgColor} ${integration.borderColor} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div className={`${integration.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {integration.name}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {integration.description}
                </p>

                <ul className="space-y-3">
                  {integration.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Por que escolher nossas integrações?
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Desenvolvidas especificamente para maximizar a produtividade da sua equipe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-blue-100 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Flow */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Como funciona a integração
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Conecte suas contas</h4>
              <p className="text-gray-600 text-sm">
                Autorize o acesso às suas ferramentas Google com segurança total
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Configure as automações</h4>
              <p className="text-gray-600 text-sm">
                Defina como o chatbot deve interagir com cada ferramenta
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Comece a usar</h4>
              <p className="text-gray-600 text-sm">
                Seu chatbot já está pronto para automatizar tarefas complexas
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Configurar Integrações
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime das integrações</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">&lt;2s</div>
            <div className="text-gray-600">Tempo de resposta</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Segurança garantida</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations

