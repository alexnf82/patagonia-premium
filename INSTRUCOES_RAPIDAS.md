# 🚀 Instruções Rápidas - Patagonia Premium Experience

## ⚡ Configuração Rápida (5 minutos)

### 1. Configurar Contatos
Edite `config.js` e atualize:
```javascript
contact: {
    whatsapp: "5511999999999", // Seu número
    email: "seu@email.com",
    phone: "(11) 99999-9999"
}
```

### 2. Configurar Analytics
No `index.html`, substitua:
- `GA_MEASUREMENT_ID` pelo seu Google Analytics ID
- `YOUR_PIXEL_ID` pelo seu Facebook Pixel ID

### 3. Adicionar Imagens
Crie a pasta `images/` e adicione:
- `hero-bg.jpg` (imagem de fundo)
- `logo.png` (logo da empresa)
- Imagens das experiências

### 4. Adicionar Vídeos
Crie a pasta `videos/` e adicione:
- `bariloche-hero.mp4` (vídeo de fundo)
- Vídeos dos depoimentos

### 5. Subir para Servidor
Faça upload de todos os arquivos para seu servidor web.

## 🎯 Principais Funcionalidades

### Chatbot Sofia
- Abre automaticamente após 30 segundos
- Responde sobre pacotes, preços e concierge
- Integração com WhatsApp

### Sistema de Conversão
- **Exit Intent**: Popup com desconto ao sair
- **Scroll Depth**: CTAs em 75% e 90% do scroll
- **Contador Regressivo**: Urgência para reservas
- **Múltiplos CTAs**: Estratégicos em cada seção

### Formulários
- **Reserva**: Captura dados completos
- **Consultoria**: Agendamento personalizado
- **Newsletter**: Lista de e-mails

## 📱 Responsividade
- Mobile-first design
- Funciona em todos os dispositivos
- Touch-friendly (44px mínimo)
- PWA instalável

## 🔧 Personalizações Comuns

### Mudar Preços
Edite `config.js`:
```javascript
packages: {
    inverno: { price: 8900 },
    verao: { price: 6900 },
    spring: { price: 5900 }
}
```

### Mudar Cores
Edite `css/styles.css`:
```css
:root {
    --primary: #2c5aa0;    /* Azul principal */
    --secondary: #d4af37;  /* Dourado */
    --accent: #228b22;     /* Verde */
}
```

### Mudar Textos
Edite diretamente no `index.html` ou use `config.js` para dados dinâmicos.

## 📊 Métricas Importantes

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms  
- **CLS**: < 0.1

### Conversão
- Taxa de conversão esperada: 3-5%
- Tempo médio no site: 2-3 minutos
- Páginas mais visitadas: Hero, Pacotes, Depoimentos

## 🚨 Problemas Comuns

### Chatbot não funciona
- Verifique se `js/main.js` está carregando
- Confirme IDs dos elementos no HTML

### Formulários não enviam
- Configure backend para receber dados
- Verifique campos obrigatórios

### Imagens não carregam
- Verifique caminhos na pasta `images/`
- Confirme permissões do servidor

## 📞 Suporte

- **WhatsApp**: (11) 99999-9999
- **Email**: suporte@patagoniapremium.com
- **Documentação**: README.md completo

## ⚡ Dicas de Performance

1. **Otimize imagens** (WebP recomendado)
2. **Comprima vídeos** (MP4 otimizado)
3. **Use CDN** para recursos externos
4. **Ative cache** no servidor
5. **Monitore Core Web Vitals**

## 🎨 Personalização Avançada

### Adicionar Novos Pacotes
1. Edite `config.js` - seção `packages`
2. Adicione HTML correspondente no `index.html`
3. Atualize JavaScript se necessário

### Mudar Chatbot
1. Edite `config.js` - seção `chatbot.responses`
2. Personalize mensagens automáticas
3. Configure integração com IA se necessário

### Adicionar Páginas
1. Crie novo arquivo HTML
2. Atualize navegação no `index.html`
3. Adicione ao `sitemap.xml`

---

**✅ Site pronto para produção!**
**🎯 Otimizado para conversão máxima!**
**📱 Totalmente responsivo!**
