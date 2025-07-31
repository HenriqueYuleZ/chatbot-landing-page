import { ArrowLeft, Scale, Shield, FileText, Users, Lock, AlertCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

const LGPDPage = () => {
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
              <Scale className="h-6 w-6 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Lei Geral de Proteção de Dados (LGPD)</h1>
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
                <FileText className="h-5 w-5 text-green-600" />
                <span>Nossa Conformidade com a LGPD</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                A ChatBot IA está totalmente comprometida com o cumprimento da Lei Geral de Proteção 
                de Dados Pessoais (Lei nº 13.709/2018). Implementamos medidas técnicas e organizacionais 
                rigorosas para garantir a proteção dos dados pessoais de nossos usuários.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">Status: Totalmente Conforme</span>
                </div>
                <p className="text-green-700 text-sm mt-2">
                  Todos os processos de tratamento de dados estão adequados às exigências da LGPD.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>Seus Direitos como Titular de Dados</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 mb-4">
                De acordo com a LGPD, você possui os seguintes direitos fundamentais:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Confirmação e Acesso</h4>
                  <p className="text-blue-700 text-sm">
                    Confirmar a existência de tratamento e acessar seus dados pessoais.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Correção</h4>
                  <p className="text-purple-700 text-sm">
                    Solicitar a correção de dados incompletos, inexatos ou desatualizados.
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Eliminação</h4>
                  <p className="text-red-700 text-sm">
                    Solicitar a eliminação de dados pessoais desnecessários ou excessivos.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Portabilidade</h4>
                  <p className="text-orange-700 text-sm">
                    Solicitar a portabilidade dos dados para outro fornecedor.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Oposição</h4>
                  <p className="text-gray-700 text-sm">
                    Opor-se ao tratamento quando realizado com base no legítimo interesse.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Revogação</h4>
                  <p className="text-green-700 text-sm">
                    Revogar o consentimento a qualquer momento, quando aplicável.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Bases */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="h-5 w-5 text-indigo-600" />
                <span>Bases Legais para Tratamento</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 mb-4">
                Tratamos seus dados pessoais com base nas seguintes hipóteses legais previstas na LGPD:
              </p>
              
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Consentimento</h4>
                  <p className="text-gray-600 text-sm">
                    Para funcionalidades opcionais, marketing personalizado e comunicações promocionais.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Execução de Contrato</h4>
                  <p className="text-gray-600 text-sm">
                    Para fornecer os serviços de chatbot contratados e processar pagamentos.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Legítimo Interesse</h4>
                  <p className="text-gray-600 text-sm">
                    Para melhorar nossos serviços, prevenir fraudes e garantir a segurança.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Cumprimento Legal</h4>
                  <p className="text-gray-600 text-sm">
                    Para atender obrigações legais e regulamentares aplicáveis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-red-600" />
                <span>Medidas de Proteção Implementadas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Medidas Técnicas:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>Criptografia end-to-end</li>
                    <li>Autenticação multifator</li>
                    <li>Controles de acesso baseados em função</li>
                    <li>Monitoramento contínuo de segurança</li>
                    <li>Backup seguro e recuperação de dados</li>
                    <li>Pseudonimização e anonimização</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Medidas Organizacionais:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>Treinamento regular da equipe</li>
                    <li>Políticas internas de proteção de dados</li>
                    <li>Avaliação de impacto (DPIA)</li>
                    <li>Auditoria e revisão periódica</li>
                    <li>Contratos com terceiros adequados</li>
                    <li>Plano de resposta a incidentes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Officer */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-purple-600" />
                <span>Encarregado de Proteção de Dados (DPO)</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  Nosso Encarregado de Proteção de Dados é responsável por garantir o cumprimento 
                  da LGPD e atuar como canal de comunicação entre a empresa, os titulares de dados 
                  e a ANPD (Autoridade Nacional de Proteção de Dados).
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Contato do DPO:</strong> yzhenrique@gmail.com</p>
                  <p><strong>Responsabilidades:</strong></p>
                  <ul className="list-disc list-inside text-sm text-gray-600 ml-4 space-y-1">
                    <li>Orientar funcionários sobre práticas de proteção de dados</li>
                    <li>Atender solicitações dos titulares de dados</li>
                    <li>Interagir com a ANPD quando necessário</li>
                    <li>Monitorar conformidade com a LGPD</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Retenção e Eliminação de Dados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo de Dado</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Período de Retenção</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Base Legal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Dados de cadastro</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Durante a vigência do contrato + 5 anos</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Cumprimento legal</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Conversas do chatbot</td>
                      <td className="px-4 py-3 text-sm text-gray-600">12 meses</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Melhoria do serviço</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Logs de acesso</td>
                      <td className="px-4 py-3 text-sm text-gray-600">6 meses</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Segurança</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-900">Dados de marketing</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Até revogação do consentimento</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Consentimento</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Incident Response */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <span>Resposta a Incidentes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Em caso de incidente de segurança que possa acarretar risco ou dano relevante 
                aos titulares de dados, seguimos o seguinte protocolo:
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 text-xs font-bold min-w-[24px] h-6 flex items-center justify-center">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Contenção Imediata</h4>
                    <p className="text-gray-600 text-sm">Isolamento do incidente e contenção de danos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 text-orange-600 rounded-full p-1 text-xs font-bold min-w-[24px] h-6 flex items-center justify-center">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Avaliação de Impacto</h4>
                    <p className="text-gray-600 text-sm">Análise dos dados afetados e riscos aos titulares</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full p-1 text-xs font-bold min-w-[24px] h-6 flex items-center justify-center">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Comunicação (até 72h)</h4>
                    <p className="text-gray-600 text-sm">Notificação à ANPD e aos titulares afetados, quando aplicável</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 text-green-600 rounded-full p-1 text-xs font-bold min-w-[24px] h-6 flex items-center justify-center">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Remediação</h4>
                    <p className="text-gray-600 text-sm">Implementação de medidas corretivas e preventivas</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact and Requests */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Como Exercer seus Direitos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Canais para Solicitações LGPD:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700"><strong>E-mail:</strong> yzhenrique@gmail.com</p>
                    <p className="text-gray-700"><strong>Assunto:</strong> "Solicitação LGPD - [Tipo de Direito]"</p>
                  </div>
                  <div>
                    <p className="text-gray-700"><strong>Prazo de Resposta:</strong> Até 15 dias</p>
                    <p className="text-gray-700"><strong>Custo:</strong> Gratuito</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white rounded border-l-4 border-blue-500">
                  <p className="text-sm text-gray-600">
                    <strong>Documentação necessária:</strong> Para verificação de identidade, anexe 
                    documento com foto. Todas as solicitações são tratadas com máxima confidencialidade.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default LGPDPage
