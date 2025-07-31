import { ArrowLeft, Shield, Eye, Lock, UserCheck, Database, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar</span>
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Política de Privacidade</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5 text-blue-600" />
                <span>Introdução</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                A ChatBot IA está comprometida em proteger a privacidade e segurança dos dados pessoais 
                de nossos usuários. Esta Política de Privacidade descreve como coletamos, usamos, 
                armazenamos e protegemos suas informações pessoais quando você utiliza nossos serviços 
                de chatbot com inteligência artificial.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                <strong>Última atualização:</strong> 30 de julho de 2025
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-green-600" />
                <span>Informações que Coletamos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Informações Fornecidas por Você:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Nome e informações de contato (e-mail, telefone)</li>
                  <li>Informações da empresa (nome, setor, tamanho)</li>
                  <li>Mensagens e interações com o chatbot</li>
                  <li>Preferências e configurações de conta</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Informações Coletadas Automaticamente:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Horário de interação</li>
                  <li>Status de entrega de mensagens</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="h-5 w-5 text-purple-600" />
                <span>Como Usamos suas Informações</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-gray-600">Utilizamos suas informações pessoais para:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Fornecer e melhorar nossos serviços de chatbot com IA</li>
                  <li>Personalizar sua experiência e respostas do chatbot</li>
                  <li>Comunicar atualizações, ofertas e informações relevantes</li>
                  <li>Envio de lembretes automatizados</li>
                  <li>Respostas a mensagens via chatbot</li>
                  <li>Analisar tendências de uso para melhorar nossos produtos</li>
                  <li>Garantir a segurança e prevenir fraudes</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-red-600" />
                <span>Proteção de Dados</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Medidas de Segurança:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Controles de acesso rigorosos e autenticação</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Monitoramento contra acessos não autorizados</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Retenção de Dados:</h4>
                <p className="text-gray-600">
                  Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir 
                  os propósitos descritos nesta política, salvo quando exigido por lei.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Cookies e Tecnologias Similares</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
                analisar o uso do site e personalizar conteúdo. Você pode gerenciar suas 
                preferências de cookies através das configurações do seu navegador.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Tipos de cookies que usamos:</strong> Essenciais, de desempenho, 
                  funcionais e de marketing (apenas com seu consentimento).
                </p>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded border-l-4 border-green-500">
                <p className="text-green-800 text-sm">
                  <strong>LGPD:</strong> Para informações detalhadas sobre nosso cumprimento da 
                  Lei Geral de Proteção de Dados, <Link to="/lgpd" className="underline hover:text-green-600">
                  visite nossa página dedicada à LGPD</Link>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Third Parties */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Compartilhamento com Terceiros</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Não vendemos suas informações pessoais. Podemos compartilhar dados limitados com:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Prestadores de serviços essenciais (hospedagem, analytics)</li>
                <li>Parceiros de integração (Google Workspace, quando autorizado)</li>
                <li>Autoridades legais (quando exigido por lei)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Atualizações desta Política</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Podemos atualizar esta Política de Privacidade ocasionalmente. Notificaremos 
                sobre mudanças significativas através do e-mail ou aviso em nosso site. 
                Recomendamos revisar periodicamente esta página.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Entre em Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer 
                  seus direitos de dados, entre em contato conosco:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>E-mail:</strong> yzhenrique@gmail.com</p>
                  <p><strong>Responsável pela Proteção de Dados:</strong> Equipe ChatBot IA</p>
                  <p><strong>Endereço:</strong> Campo Grande, MS - Brasil</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
