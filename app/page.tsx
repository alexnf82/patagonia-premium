import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { Mountain, Sun, Flower, Star } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        {/* Nossos Diferenciais */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-center items-center gap-16 flex-wrap">
              <div className="flex flex-col items-center gap-3 text-center p-6">
                <div className="w-12 h-12 text-primary-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="font-medium text-slate-800 text-lg">Experiências Exclusivas</span>
              </div>
              <div className="flex flex-col items-center gap-3 text-center p-6">
                <div className="w-12 h-12 text-primary-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <span className="font-medium text-slate-800 text-lg">Concierge 24h</span>
              </div>
              <div className="flex flex-col items-center gap-3 text-center p-6">
                <div className="w-12 h-12 text-primary-500">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z"/>
                  </svg>
                </div>
                <span className="font-medium text-slate-800 text-lg">Garantia Premium</span>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Pacotes */}
        <section id="pacotes" className="py-24 bg-neutral-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-serif font-semibold text-center text-slate-800 mb-4">
              Experiências Premium
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mb-16"></div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Inverno Premium */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="text-center mb-6">
                  <Mountain className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1} />
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">Inverno Premium</h3>
                  <p className="text-4xl font-serif font-semibold text-orange-500 mb-2">R$ 8.900</p>
                  <p className="text-neutral-600 text-lg">Esqui, neve e experiências exclusivas</p>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-slate-700 to-emerald-700 hover:from-slate-800 hover:to-emerald-800 text-white rounded-full font-semibold transition-all transform hover:-translate-y-0.5">
                  Reservar
                </button>
              </div>

              {/* Verão Exclusivo */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-orange-500 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform scale-105">
                <div className="text-center mb-6">
                  <Sun className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1} />
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">Verão Exclusivo</h3>
                  <p className="text-4xl font-serif font-semibold text-orange-500 mb-2">R$ 6.900</p>
                  <p className="text-neutral-600 text-lg">Lagos, trekking e aventuras</p>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-slate-700 to-emerald-700 hover:from-slate-800 hover:to-emerald-800 text-white rounded-full font-semibold transition-all transform hover:-translate-y-0.5">
                  Reservar
                </button>
              </div>

              {/* Spring Break */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="text-center mb-6">
                  <Flower className="w-16 h-16 text-orange-500 mx-auto mb-4" strokeWidth={1} />
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">Spring Break</h3>
                  <p className="text-4xl font-serif font-semibold text-orange-500 mb-2">R$ 5.900</p>
                  <p className="text-neutral-600 text-lg">Flores, tranquilidade e natureza</p>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-slate-700 to-emerald-700 hover:from-slate-800 hover:to-emerald-800 text-white rounded-full font-semibold transition-all transform hover:-translate-y-0.5">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <blockquote className="text-3xl font-serif italic text-slate-800 mb-8 leading-relaxed">
              "Experiência única na Patagônia. O concierge 24h fez toda a diferença."
            </blockquote>
            <cite className="text-neutral-600 text-lg block mb-8">— Maria Silva, São Paulo</cite>
            <div className="flex justify-center items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={20} className="text-orange-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-medium text-slate-800">4.9/5 • 847+ clientes</span>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-gradient-to-br from-slate-700 to-emerald-700 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-serif font-semibold mb-6">
              Pronto para sua experiência premium?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Planeje sua viagem dos sonhos para Bariloche
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-lg transition-all transform hover:-translate-y-1 min-w-[200px]">
                Começar Agora
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur text-white rounded-full font-semibold text-lg transition-all transform hover:-translate-y-1 min-w-[200px]">
                Falar com Especialista
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contato" className="bg-slate-900 text-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-orange-400 mb-4">
                  Patagonia Premium Experience
                </h3>
                <p className="text-neutral-300 mb-6">
                  Experiências exclusivas na Patagônia Argentina
                </p>
              </div>
              
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contato@patagoniapremium.com</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-center md:justify-end gap-4">
                  <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-orange-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-700 mt-12 pt-8 text-center">
              <p className="text-neutral-400">
                © 2025 Patagonia Premium Experience
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
