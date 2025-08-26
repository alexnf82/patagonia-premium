# 🏔️ Patagonia Premium Experience - Site de Viagens para Bariloche

Site premium para agência de viagens especializada em Bariloche, Argentina, com foco em conversão máxima, SEO otimizado e design mobile-first.

## ✨ Características Principais

- **Design Premium**: Interface moderna e exclusiva transmitindo luxo e confiança
- **Mobile-First**: Design responsivo otimizado para todos os dispositivos
- **SEO Otimizado**: Meta tags, Schema markup e performance otimizada
- **Chatbot IA**: Assistente virtual "Sofia" integrado
- **Sistema de Conversão**: Múltiplos CTAs, exit intent, scroll depth triggers
- **Animações Suaves**: Micro-interações e transições fluidas
- **Performance**: Core Web Vitals otimizados (LCP < 2.5s, FID < 100ms, CLS < 0.1)

## 🚀 Instalação

### Pré-requisitos
- Servidor web (Apache, Nginx, ou servidor local)
- Navegador moderno com suporte a ES6+

### Passos para Instalação

1. **Clone ou baixe os arquivos**
   ```bash
   git clone [url-do-repositorio]
   cd patagonia-premium-site
   ```

2. **Configure o servidor web**
   - Coloque todos os arquivos na pasta raiz do seu servidor web
   - Certifique-se de que o servidor suporta HTML5, CSS3 e JavaScript

3. **Configure as variáveis**
   - Edite `js/main.js` e atualize:
     - `CONFIG.whatsappNumber`: Seu número do WhatsApp
     - `CONFIG.countdownDate`: Data limite para ofertas
   - Edite `index.html` e atualize:
     - Google Analytics ID
     - Facebook Pixel ID
     - URLs das redes sociais

4. **Adicione as imagens e vídeos**
   - Crie a pasta `images/` e adicione:
     - `hero-bg.jpg` (imagem de fundo do hero)
     - `logo.png` (logo da empresa)
     - Imagens das experiências exclusivas
     - Thumbnails dos depoimentos
   - Crie a pasta `videos/` e adicione:
     - `bariloche-hero.mp4` (vídeo de fundo do hero)
     - Vídeos dos depoimentos
     - `concierge-explicativo.mp4`

## 📁 Estrutura do Projeto

```
patagonia-premium-site/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos CSS
├── js/
│   └── main.js             # JavaScript principal
├── images/                 # Imagens do site
├── videos/                 # Vídeos do site
├── fonts/                  # Fontes personalizadas (opcional)
├── favicon.ico             # Ícone do site
└── README.md               # Este arquivo
```

## 🎨 Personalização

### Cores
As cores estão definidas como variáveis CSS em `css/styles.css`:

```css
:root {
    --primary: #2c5aa0;      /* Azul patagônico */
    --secondary: #d4af37;    /* Dourado premium */
    --neutral: #f8f9fa;      /* Cinza moderno */
    --accent: #228b22;       /* Verde natureza */
}
```

### Tipografia
- **Headers**: Montserrat (Google Fonts)
- **Body**: Open Sans (Google Fonts)

### Conteúdo
Edite o arquivo `index.html` para personalizar:
- Textos e descrições
- Preços dos pacotes
- Informações de contato
- Links das redes sociais

## 🔧 Configurações Avançadas

### Google Analytics
1. Crie uma conta no Google Analytics
2. Substitua `GA_MEASUREMENT_ID` no `index.html` pelo seu ID real
3. Configure eventos personalizados conforme necessário

### Facebook Pixel
1. Crie um pixel no Facebook Business Manager
2. Substitua `YOUR_PIXEL_ID` no `index.html` pelo seu ID real
3. Configure conversões personalizadas

### WhatsApp Business
1. Configure o número do WhatsApp no `js/main.js`
2. Personalize as mensagens automáticas
3. Configure respostas rápidas

### Chatbot Sofia
O chatbot está configurado com respostas automáticas para:
- Informações sobre pacotes
- Preços e disponibilidade
- Concierge 24h
- Formas de pagamento
- Política de cancelamento

Para personalizar as respostas, edite o objeto `CONFIG.chatbotResponses` em `js/main.js`.

## 📱 Funcionalidades Mobile

- **Menu hambúrguer** responsivo
- **Touch-friendly** com botões de 44px mínimo
- **Swipe gestures** para navegação
- **Otimização de performance** para conexões lentas
- **PWA ready** com service worker

## 🎯 Elementos de Conversão

### CTAs Estratégicos
- **Header**: "Consultoria Grátis" e "Reservar Agora"
- **Hero**: Cards dos pacotes com preços
- **Scroll Depth**: CTAs aparecem em 75% e 90% do scroll
- **Exit Intent**: Popup com desconto ao sair da página

### Urgência e Escassez
- Contador regressivo para ofertas
- "Apenas 8 grupos por mês"
- "Esgota em 48h na alta temporada"
- Indicadores de vagas limitadas

### Social Proof
- Avaliações 4.9/5 estrelas
- 847 experiências realizadas
- Depoimentos em vídeo
- Certificações (ABTA, IATA, ANV)

## 🔍 SEO e Performance

### Meta Tags Otimizadas
- Title otimizado para conversão
- Description com call-to-action
- Open Graph para redes sociais
- Schema markup para agência de viagens

### Performance
- **Lazy loading** de imagens
- **CSS crítico** inline
- **Minificação** de recursos
- **CDN** para fontes e recursos externos
- **Service Worker** para cache

### Core Web Vitals
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

## 🛠️ Manutenção

### Atualizações Regulares
- Verificar e atualizar preços dos pacotes
- Atualizar disponibilidade de vagas
- Manter depoimentos recentes
- Verificar links e formulários

### Monitoramento
- Google Analytics para métricas de conversão
- Google Search Console para SEO
- Testes de velocidade regulares
- Verificação de links quebrados

## 🚨 Troubleshooting

### Problemas Comuns

**Chatbot não funciona**
- Verifique se o JavaScript está carregando
- Confirme se os IDs dos elementos estão corretos
- Verifique o console do navegador para erros

**Formulários não enviam**
- Verifique a configuração do servidor
- Confirme se os campos obrigatórios estão preenchidos
- Verifique se o JavaScript está funcionando

**Imagens não carregam**
- Verifique se os caminhos estão corretos
- Confirme se as imagens existem na pasta `images/`
- Verifique as permissões do servidor

**Vídeos não reproduzem**
- Verifique se os formatos são suportados (MP4 recomendado)
- Confirme se os arquivos estão na pasta `videos/`
- Teste em diferentes navegadores

## 📞 Suporte

Para suporte técnico ou dúvidas sobre implementação:

- **Email**: suporte@patagoniapremium.com
- **WhatsApp**: (11) 99999-9999
- **Documentação**: Este README

## 📄 Licença

Este projeto foi desenvolvido para a Patagonia Premium Experience. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para proporcionar experiências únicas na Patagônia Argentina**
