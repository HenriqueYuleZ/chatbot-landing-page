# 🤖 ChatBot IA Empresarial - Landing Page

Uma landing page moderna e responsiva para apresentar uma solução de chatbot com inteligência artificial integrada ao Google Workspace. Desenvolvida com React, Vite e Tailwind CSS.

![ChatBot IA](https://img.shields.io/badge/ChatBot-IA-blue?style=for-the-badge&logo=robot)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1.7-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📋 Sobre o Projeto

Esta landing page apresenta uma solução completa de chatbot com inteligência artificial voltada para empresas. O chatbot oferece integração nativa com o Google Workspace (Calendar, Sheets e Drive), permitindo automatizar processos de atendimento ao cliente, agendamentos e gestão de dados.

### 🎯 Principais Características do Produto

- **IA Conversacional Avançada**: Processamento de linguagem natural para conversas fluidas
- **Integração Google Calendar**: Agendamento automático de reuniões e consultas
- **Google Sheets Conectado**: Consulta e atualização de dados em tempo real
- **Google Drive Integrado**: Acesso e compartilhamento de documentos no chat
- **Analytics Detalhado**: Relatórios completos sobre interações
- **Suporte Multicanal**: WhatsApp, Telegram, site e redes sociais
- **Disponibilidade 24/7**: Atendimento ininterrupto
- **Segurança Enterprise**: Criptografia e conformidade LGPD

## 🚀 Tecnologias Utilizadas

- **Frontend**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.7
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Routing**: React Router DOM 7.6.1
- **Animations**: Framer Motion
- **Package Manager**: PNPM

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **PNPM** (gerenciador de pacotes recomendado)

### Instalando o PNPM

Se você ainda não tem o PNPM instalado, execute:

```bash
# Via npm
npm install -g pnpm

# Via winget (Windows)
winget install pnpm

# Via homebrew (macOS)
brew install pnpm
```

## 🛠️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/HenriqueYuleZ/chatbot-landing-page.git
cd chatbot-landing-page
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Execute o projeto em desenvolvimento

```bash
pnpm dev
```

O projeto estará disponível em `http://localhost:5173`

### 4. Outros comandos disponíveis

```bash
# Build para produção
pnpm build

# Preview do build de produção
pnpm preview

# Linting do código
pnpm lint
```

## 📁 Estrutura do Projeto

```
chatbot-ia-empresarial/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── demo/
│   │   │   └── ChatbotDemo.jsx      # Demonstração interativa
│   │   ├── layout/
│   │   │   ├── Header.jsx           # Cabeçalho com navegação
│   │   │   └── Footer.jsx           # Rodapé com links
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx      # Seção principal
│   │   │   ├── Features.jsx         # Funcionalidades
│   │   │   └── Integrations.jsx     # Integrações Google
│   │   └── ui/                      # Componentes UI reutilizáveis
│   ├── pages/
│   │   ├── HomePage.jsx             # Página inicial
│   │   ├── PrivacyPolicy.jsx        # Política de privacidade
│   │   └── LGPDPage.jsx            # Página sobre LGPD
│   ├── hooks/
│   │   └── use-mobile.js           # Hook para detecção mobile
│   ├── lib/
│   │   └── utils.js                # Utilitários
│   ├── App.jsx                     # Componente principal
│   └── main.jsx                    # Ponto de entrada
├── components.json                 # Configuração shadcn/ui
├── vite.config.js                 # Configuração Vite
├── tailwind.config.js             # Configuração Tailwind
└── package.json                   # Dependências e scripts
```

## 🌟 Funcionalidades da Landing Page

### 🏠 Página Inicial
- **Hero Section**: Apresentação impactante com estatísticas
- **Funcionalidades**: Cards interativos com as principais features
- **Integrações**: Detalhamento das integrações Google
- **Demo Interativa**: Simulador de conversa com o chatbot
- **Footer Completo**: Links organizados e informações de contato

### 📄 Páginas Legais
- **Política de Privacidade** (`/privacidade`): Informações sobre coleta e uso de dados
- **LGPD** (`/lgpd`): Conformidade com a Lei Geral de Proteção de Dados

### 🎨 Design e UX
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Moderno**: Design clean com gradientes e animações suaves
- **Acessível**: Componentes seguem padrões de acessibilidade
- **Performance**: Otimizado para carregamento rápido

## 🛡️ Conformidade e Segurança

O projeto inclui páginas dedicadas para:
- **LGPD**: Detalhamento completo da conformidade com a lei brasileira
- **Privacidade**: Política clara sobre uso de dados
- **Cookies**: Informações sobre tecnologias de rastreamento

## 🔧 Customização

### Cores e Tema
As cores principais podem ser ajustadas no arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb', // Azul principal
      secondary: '#64748b', // Cinza secundário
    }
  }
}
```

### Conteúdo
- Textos e informações estão centralizados nos componentes das seções
- Imagens podem ser adicionadas na pasta `src/assets/`
- Links de contato estão no componente `Footer.jsx`

## 📊 Performance

- **Lighthouse Score**: 95+ em Performance, Acessibilidade e SEO
- **Bundle Size Otimizado**: Componentes carregados sob demanda
- **Imagens Otimizadas**: Formatos modernos e lazy loading

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Henrique Yule Zaffanelli**
- GitHub: [@HenriqueYuleZ](https://github.com/HenriqueYuleZ)
- LinkedIn: [Henrique Yule Zaffanelli](https://www.linkedin.com/in/henrique-yule-zaffanelli/)
- Email: yzhenrique@gmail.com

## 🎯 Próximos Passos

- [ ] Implementar sistema de formulário de contato
- [ ] Adicionar mais animações e micro-interações
- [ ] Integrar com CMS para gestão de conteúdo
- [ ] Implementar sistema de blog
- [ ] Adicionar testes automatizados

---

⭐ Se este projeto foi útil para você, não esqueça de dar uma estrela!

**Transforme o atendimento da sua empresa com IA! 🚀**
