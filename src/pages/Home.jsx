
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// Home Page
function Home() {
  return (
    <div className="min-h-[calc(100vh-200px)]">
      <section className="relative bg-gradient-to-br from-orange-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                Découvrez nos<span className="text-orange-500 block">délicieux plats</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                Des saveurs authentiques préparées avec passion. Explorez notre menu et laissez-vous tenter.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/plates" className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:scale-105">
                  Voir les plats
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/register" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full border-2 border-gray-200 hover:border-orange-500 hover:text-orange-500 transition-all">
                  Créer un compte
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl transform -translate-y-4"></div>
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=500&fit=crop" alt="Delicious food" className="relative rounded-3xl shadow-2xl w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Rapide</h3>
              <p className="text-gray-600">Service rapide et efficace</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Qualité</h3>
              <p className="text-gray-600">Ingrédients frais et de qualité</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Avec amour</h3>
              <p className="text-gray-600">Préparé avec passion</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;