// ===== CONFIGURAÇÃO CENTRALIZADA - PATAGONIA PREMIUM EXPERIENCE =====

const SITE_CONFIG = {
    // ===== INFORMAÇÕES BÁSICAS =====
    site: {
        name: "Patagonia Premium Experience",
        description: "Experiências exclusivas na Patagônia Argentina",
        url: "https://patagoniapremium.com",
        email: "contato@patagoniapremium.com",
        phone: "(11) 99999-9999",
        address: "São Paulo, SP - Brasil"
    },

    // ===== PALETA DE CORES DA MARCA =====
    colors: {
        primary: "rgb(45, 61, 85)",      // Azul sofisticado
        secondary: "rgb(254, 158, 28)",   // Laranja premium  
        accent: "rgb(208, 70, 47)",      // Vermelho elegante
        nature: "rgb(66, 95, 48)",       // Verde natural
        neutral: "rgb(226, 226, 204)",   // Bege minimalista
        dark: "#2d3d55",
        white: "#ffffff"
    },

    // ===== CONTATOS =====
    contact: {
        whatsapp: "5511999999999",
        whatsappMessage: "Olá! Gostaria de saber mais sobre os pacotes premium para Bariloche",
        email: "contato@patagoniapremium.com",
        phone: "(11) 99999-9999"
    },

    // ===== PACOTES E PREÇOS =====
    packages: {
        inverno: {
            name: "INVERNO PREMIUM",
            price: 8900,
            period: "Junho - Setembro",
            features: [
                "Esqui em Cerro Catedral",
                "Snowboard com instrutores",
                "Passeios de trenó",
                "Chocolate quente premium",
                "Spas com vista para montanhas"
            ]
        },
        verao: {
            name: "VERÃO EXCLUSIVO",
            price: 6900,
            period: "Dezembro - Março",
            features: [
                "Navegação pelos lagos",
                "Trekking no Cerro Tronador",
                "Passeios de barco",
                "Piqueniques à beira do lago",
                "Observação de aves"
            ]
        },
        spring: {
            name: "SPRING BREAK",
            price: 5900,
            period: "Setembro - Novembro",
            features: [
                "Floração das cerejeiras",
                "Passeios tranquilos",
                "Fotografia de paisagens",
                "Gastronomia local",
                "Visitas a vinícolas"
            ]
        }
    },

    // ===== TIPOS DE PACOTES =====
    packageTypes: {
        familia: {
            name: "Família Premium",
            price: 6900,
            features: [
                "Guias especializados em família",
                "Atividades para todas as idades",
                "Hospedagem em hotéis familiares",
                "Refeições inclusas",
                "Seguro completo"
            ]
        },
        aventura: {
            name: "Aventura Extrema",
            price: 8900,
            features: [
                "Esportes radicais",
                "Guias certificados",
                "Equipamentos premium",
                "Fotografia profissional",
                "Certificado de conquista"
            ]
        },
        casal: {
            name: "Casal Romântico",
            price: 7900,
            features: [
                "Jantares românticos",
                "Suítes com vista",
                "Passeios privativos",
                "Decoração especial",
                "Fotógrafo profissional"
            ]
        },
        corporativo: {
            name: "Corporativo Executive",
            price: 9900,
            features: [
                "Salas de reunião",
                "WiFi premium",
                "Translado executivo",
                "Eventos corporativos",
                "Relatório de ROI"
            ]
        }
    },

    // ===== CONFIGURAÇÕES DE CONVERSÃO =====
    conversion: {
        countdownDate: "2025-03-31T23:59:59",
        maxGroupsPerMonth: 8,
        urgencyMessage: "Esgota em 48h na alta temporada",
        exitIntentDiscount: 10,
        exitIntentCode: "EXIT10"
    },

    // ===== REDES SOCIAIS =====
    social: {
        instagram: "https://instagram.com/patagoniapremium",
        facebook: "https://facebook.com/patagoniapremium",
        youtube: "https://youtube.com/patagoniapremium",
        linkedin: "https://linkedin.com/company/patagoniapremium"
    },

    // ===== ANALYTICS =====
    analytics: {
        googleAnalytics: "GA_MEASUREMENT_ID", // Substitua pelo seu ID
        facebookPixel: "YOUR_PIXEL_ID", // Substitua pelo seu ID
        hotjar: "YOUR_HOTJAR_ID" // Substitua pelo seu ID
    },

    // ===== CONFIGURAÇÕES DO CHATBOT =====
    chatbot: {
        name: "Sofia",
        welcomeMessage: "Olá! Sou a Sofia, sua assistente virtual. Como posso ajudar você hoje?",
        autoOpenDelay: 30000, // 30 segundos
        responses: {
            pacotes: {
                inverno: "O pacote Inverno Premium (R$ 8.900) inclui esqui, snowboard, passeios de trenó e spas. Período: Junho a Setembro. Gostaria de mais detalhes?",
                verao: "O pacote Verão Exclusivo (R$ 6.900) inclui navegação pelos lagos, trekking e atividades aquáticas. Período: Dezembro a Março. Posso ajudar com a reserva?",
                spring: "O pacote Spring Break (R$ 5.900) é ideal para quem busca flores, menos multidão e preços menores. Período: Setembro a Novembro. Interessado?"
            },
            concierge: "Nosso concierge 24h funciona via WhatsApp dedicado. Resolvemos qualquer imprevisto em até 2 horas. É nosso diferencial exclusivo!",
            pagamento: "Aceitamos PIX (5% desconto), cartão (12x sem juros), Bitcoin/crypto (3% desconto) e parcelamento próprio em até 24x.",
            cancelamento: "Cancelamento gratuito até 7 dias antes da viagem. Entre 7 e 3 dias: 50% de reembolso. Menos de 3 dias: caso a caso."
        }
    },

    // ===== CONFIGURAÇÕES DE PAGAMENTO =====
    payment: {
        methods: [
            { name: "PIX", discount: 5, description: "5% de desconto" },
            { name: "Cartão", installments: 12, description: "12x sem juros" },
            { name: "Bitcoin/Crypto", discount: 3, description: "3% de desconto" },
            { name: "Parcelamento Próprio", installments: 24, description: "Até 24x" }
        ]
    },

    // ===== ESTATÍSTICAS E SOCIAL PROOF =====
    stats: {
        experiences: 847,
        rating: 4.9,
        recommendationRate: 98,
        responseTime: "2 horas"
    },

    // ===== CERTIFICAÇÕES =====
    certifications: [
        "ABTA",
        "IATA", 
        "ANV"
    ],

    // ===== CONFIGURAÇÕES DE PERFORMANCE =====
    performance: {
        lazyLoading: true,
        preloadCritical: true,
        serviceWorker: true,
        pwa: true
    }
};

// ===== FUNÇÕES UTILITÁRIAS =====

// Formatar preço em reais
function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

// Gerar URL do WhatsApp
function getWhatsAppUrl(message = SITE_CONFIG.contact.whatsappMessage) {
    return `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Atualizar configurações dinamicamente
function updateConfig(newConfig) {
    Object.assign(SITE_CONFIG, newConfig);
}

// Exportar configuração para uso global
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
    window.formatPrice = formatPrice;
    window.getWhatsAppUrl = getWhatsAppUrl;
    window.updateConfig = updateConfig;
}

// Exportar para Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SITE_CONFIG,
        formatPrice,
        getWhatsAppUrl,
        updateConfig
    };
}
