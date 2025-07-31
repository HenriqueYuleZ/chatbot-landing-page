import { Bot, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerLinks = {
    produto: [
      { name: "Funcionalidades", href: "#funcionalidades" },
      { name: "Integrações", href: "#integracoes" },
      { name: "Demonstração", href: "#demo" },
      { name: "Preços", href: "#precos" }
    ],
    empresa: [
      { name: "Sobre nós", href: "#sobre" },
      { name: "Blog", href: "#blog" },
      { name: "Carreiras", href: "#carreiras" },
      { name: "Contato", href: "#contato" }
    ],
    suporte: [
      { name: "Central de Ajuda", href: "#ajuda" },
      { name: "Documentação", href: "#docs" },
      { name: "Status", href: "#status" },
      { name: "API", href: "#api" }
    ],
    legal: [
      { name: "Privacidade", href: "/privacidade", isRoute: true },
      { name: "Termos de Uso", href: "#termos" },
      { name: "Cookies", href: "#cookies" },
      { name: "LGPD", href: "/lgpd", isRoute: true }
    ]
  }

  const socialLinks = [
    // { icon: Facebook, href: "#", name: "Facebook" },
    // { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/henrique-yule-zaffanelli/", name: "LinkedIn" },
    { icon: Github, href: "https://github.com/HenriqueYuleZ", name: "Github" }
    // { icon: Instagram, href: "#", name: "Instagram" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ChatBot IA</span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Transforme o atendimento da sua empresa com inteligência artificial. 
              Automação completa com integrações Google para máxima eficiência.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">yzhenrique@gmail.com</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+55 (11) 9999-9999</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Campo Grande, MS - Brasil</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-white mb-4">Produto</h3>
            <ul className="space-y-3">
              {footerLinks.produto.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Suporte</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.suporte.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Fique por dentro das novidades
              </h3>
              <p className="text-gray-300">
                Receba atualizações sobre novas funcionalidades e dicas de automação
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ChatBot IA. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                Feito com ❤️ no Brasil
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm">Todos os sistemas operacionais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

