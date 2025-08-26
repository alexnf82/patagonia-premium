// ===== CONFIGURAÇÕES GLOBAIS =====
const CONFIG = {
    countdownDate: new Date('2025-03-31T23:59:59').getTime(),
    whatsappNumber: '5511999999999',
    chatbotResponses: {
        pacotes: {
            inverno: 'O pacote Inverno Premium (R$ 8.900) inclui esqui, snowboard, passeios de trenó e spas. Período: Junho a Setembro. Gostaria de mais detalhes?',
            verao: 'O pacote Verão Exclusivo (R$ 6.900) inclui navegação pelos lagos, trekking e atividades aquáticas. Período: Dezembro a Março. Posso ajudar com a reserva?',
            spring: 'O pacote Spring Break (R$ 5.900) é ideal para quem busca flores, menos multidão e preços menores. Período: Setembro a Novembro. Interessado?'
        },
        concierge: 'Nosso concierge 24h funciona via WhatsApp dedicado. Resolvemos qualquer imprevisto em até 2 horas. É nosso diferencial exclusivo!',
        pagamento: 'Aceitamos PIX (5% desconto), cartão (12x sem juros), Bitcoin/crypto (3% desconto) e parcelamento próprio em até 24x.',
        cancelamento: 'Cancelamento gratuito até 7 dias antes da viagem. Entre 7 e 3 dias: 50% de reembolso. Menos de 3 dias: caso a caso.'
    }
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupMobileMenu();
    setupTabs();
    setupFAQ();
    setupScrollAnimations();
    setupChatbot();
    setupModals();
    setupForms();
    setupTracking();
    setupScrollDepth();
}

// ===== MENU MOBILE =====
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
    }
}

// ===== SISTEMA DE TABS =====
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and target content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Track tab interaction
            trackEvent('tab_click', { tab: targetTab });
        });
    });
}

// ===== FAQ INTERATIVO =====
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                const faqAnswer = faq.querySelector('.faq-answer');
                faqAnswer.style.maxHeight = '0';
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                
                // Track FAQ interaction
                const questionText = this.textContent.trim();
                trackEvent('faq_open', { question: questionText });
            }
        });
    });
}

// ===== CONTADOR REGRESSIVO REMOVIDO =====
// Função removida para melhor UX

// ===== ANIMAÇÕES NO SCROLL =====
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.diferencial-card, .pacote-card, .experiencia-card, .garantia-card');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ===== CHATBOT SOFIA =====
function setupChatbot() {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    
    if (!chatbot || !chatbotToggle) return;
    
    // Toggle chatbot
    chatbotToggle.addEventListener('click', toggleChatbot);
    
    // Send message on Enter
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Auto-open chatbot after 30 seconds
    setTimeout(() => {
        if (!chatbot.classList.contains('active')) {
            showChatbotGreeting();
        }
    }, 30000);
}

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.toggle('active');
    
    if (chatbot.classList.contains('active')) {
        trackEvent('chatbot_open');
    }
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Simulate typing delay
    setTimeout(() => {
        const response = generateChatbotResponse(message);
        addMessage(response, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const messages = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

function generateChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('pacote') || lowerMessage.includes('preço')) {
        if (lowerMessage.includes('inverno')) {
            return CONFIG.chatbotResponses.pacotes.inverno;
        } else if (lowerMessage.includes('verão') || lowerMessage.includes('verao')) {
            return CONFIG.chatbotResponses.pacotes.verao;
        } else if (lowerMessage.includes('spring')) {
            return CONFIG.chatbotResponses.pacotes.spring;
        } else {
            return 'Temos 3 pacotes principais: Inverno Premium (R$ 8.900), Verão Exclusivo (R$ 6.900) e Spring Break (R$ 5.900). Qual te interessa mais?';
        }
    } else if (lowerMessage.includes('concierge') || lowerMessage.includes('24h')) {
        return CONFIG.chatbotResponses.concierge;
    } else if (lowerMessage.includes('pagamento') || lowerMessage.includes('pix') || lowerMessage.includes('cartão')) {
        return CONFIG.chatbotResponses.pagamento;
    } else if (lowerMessage.includes('cancelamento') || lowerMessage.includes('cancelar')) {
        return CONFIG.chatbotResponses.cancelamento;
    } else if (lowerMessage.includes('olá') || lowerMessage.includes('oi') || lowerMessage.includes('hello')) {
        return 'Olá! Sou a Sofia, sua assistente virtual. Posso ajudar com informações sobre pacotes, preços, concierge 24h e formas de pagamento. O que gostaria de saber?';
    } else {
        return 'Desculpe, não entendi. Posso ajudar com informações sobre nossos pacotes, concierge 24h, formas de pagamento ou política de cancelamento. O que gostaria de saber?';
    }
}

function showChatbotGreeting() {
    const messages = document.getElementById('chatbot-messages');
    const greeting = 'Olá! Vejo que você está interessado em nossos pacotes para Bariloche. Posso ajudar com alguma dúvida específica?';
    addMessage(greeting, 'bot');
}

// ===== SISTEMA DE MODAIS =====
function setupModals() {
    // Close modals when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal.id);
            }
        }
    });
}

function openReserva() {
    const modal = document.getElementById('modal-reserva');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    trackEvent('modal_open', { modal: 'reserva' });
}

function openConsultoria() {
    const modal = document.getElementById('modal-consultoria');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    trackEvent('modal_open', { modal: 'consultoria' });
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ===== SISTEMA DE FORMULÁRIOS =====
function setupForms() {
    // Reserva form
    const reservaForm = document.querySelector('.reserva-form');
    if (reservaForm) {
        reservaForm.addEventListener('submit', handleReservaSubmit);
    }
    
    // Consultoria form
    const consultoriaForm = document.querySelector('.consultoria-form');
    if (consultoriaForm) {
        consultoriaForm.addEventListener('submit', handleConsultoriaSubmit);
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
}

function handleReservaSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        nome: formData.get('nome') || document.getElementById('nome').value,
        email: formData.get('email') || document.getElementById('email').value,
        telefone: formData.get('telefone') || document.getElementById('telefone').value,
        pacote: formData.get('pacote') || document.getElementById('pacote').value,
        data: formData.get('data') || document.getElementById('data').value,
        pessoas: formData.get('pessoas') || document.getElementById('pessoas').value
    };
    
    // Simulate form submission
    showLoading(e.target);
    
    setTimeout(() => {
        hideLoading(e.target);
        showSuccess('Reserva enviada com sucesso! Entraremos em contato em até 2 horas.');
        closeModal('modal-reserva');
        trackEvent('form_submit', { form: 'reserva', pacote: data.pacote });
    }, 2000);
}

function handleConsultoriaSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        nome: formData.get('nome') || document.getElementById('nome-cons').value,
        email: formData.get('email') || document.getElementById('email-cons').value,
        data: formData.get('data') || document.getElementById('data-cons').value,
        preferencia: formData.get('preferencia') || document.getElementById('preferencia').value
    };
    
    showLoading(e.target);
    
    setTimeout(() => {
        hideLoading(e.target);
        showSuccess('Consultoria agendada! Enviaremos confirmação por e-mail.');
        closeModal('modal-consultoria');
        trackEvent('form_submit', { form: 'consultoria' });
    }, 2000);
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    
    showLoading(e.target);
    
    setTimeout(() => {
        hideLoading(e.target);
        showSuccess('Inscrição realizada! Você receberá nossas ofertas exclusivas.');
        e.target.reset();
        trackEvent('newsletter_signup', { email: email });
    }, 1000);
}

function showLoading(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="loading-spinner"></span> Enviando...';
}

function hideLoading(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = false;
    submitBtn.innerHTML = submitBtn.getAttribute('data-original-text') || 'Enviar';
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

// ===== FUNÇÕES DE CONVERSÃO =====
function selectPacote(pacote) {
    trackEvent('pacote_select', { pacote: pacote });
    openReserva();
    
    // Pre-fill pacote in form
    const pacoteSelect = document.getElementById('pacote');
    if (pacoteSelect) {
        pacoteSelect.value = pacote;
    }
}

function reservarPacote(tipo) {
    trackEvent('reserva_click', { tipo: tipo });
    openReserva();
}

function testarConcierge() {
    trackEvent('concierge_test');
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=Olá! Gostaria de testar o serviço de concierge 24h`, '_blank');
}

// ===== TRACKING E ANALYTICS =====
function setupTracking() {
    // Track page views
    trackEvent('page_view', { 
        page: window.location.pathname,
        title: document.title 
    });
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll % 25 === 0) { // Track every 25%
                trackEvent('scroll_depth', { depth: maxScroll });
            }
        }
    });
    
    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        trackEvent('time_on_page', { seconds: timeOnPage });
    });
}

function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, parameters);
    }
    
    // Console log for development
    console.log('Event tracked:', eventName, parameters);
}

// ===== EXIT INTENT REMOVIDO =====
// Pop-ups de urgência removidos para melhor UX

// ===== SCROLL DEPTH TRACKING SIMPLIFICADO =====
function setupScrollDepth() {
    let triggers = {
        50: false,
        75: false,
        90: false
    };
    
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        Object.keys(triggers).forEach(percent => {
            if (scrollPercent >= parseInt(percent) && !triggers[percent]) {
                triggers[percent] = true;
                // Apenas tracking, sem pop-ups
                trackEvent(`scroll_${percent}_percent`);
            }
        });
    });
}

// ===== UTILITÁRIOS =====
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        'images/hero-bg.jpg',
        'images/logo.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// ===== SERVICE WORKER REGISTRATION =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    trackEvent('javascript_error', {
        message: e.error.message,
        filename: e.filename,
        lineno: e.lineno
    });
});

// ===== EXPORT FUNCTIONS FOR GLOBAL USE =====
window.PatagoniaPremium = {
    openReserva,
    openConsultoria,
    selectPacote,
    reservarPacote,
    testarConcierge,
    toggleChatbot,
    sendMessage,
    trackEvent
};

// Funções globais para compatibilidade com HTML
window.openReserva = openReserva;
window.openConsultoria = openConsultoria;
window.selectPacote = selectPacote;
window.reservarPacote = reservarPacote;
window.testarConcierge = testarConcierge;
window.toggleChatbot = toggleChatbot;
window.sendMessage = sendMessage;
window.closeModal = closeModal;
window.toggleFAQ = toggleFAQ;
