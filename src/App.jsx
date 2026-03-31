import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// ==================== DATA ====================
const plates = [
  { id: 1, name: "Pizza Margherita", price: 42, is_available: true, imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop" },
  { id: 2, name: "Tajine Poulet", price: 94, is_available: false, imageUrl: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop" },
  { id: 3, name: "Burger Gourmet", price: 55, is_available: true, imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
  { id: 4, name: "Couscous Royal", price: 120, is_available: true, imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop" },
  { id: 5, name: "Pastilla au Poulet", price: 85, is_available: true, imageUrl: "https://images.unsplash.com/photo-1626645738196-c2a72c7dc1d0?w=400&h=300&fit=crop" },
  { id: 6, name: "Salade César", price: 38, is_available: false, imageUrl: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop" },
  { id: 7, name: "Spaghetti Bolognaise", price: 48, is_available: true, imageUrl: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop" },
  { id: 8, name: "Sushi Mix", price: 95, is_available: true, imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop" },
];

// ==================== COMPONENTS ====================

// Header Component
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navLinkClass = (path) => `font-medium transition-colors ${isActive(path) ? 'text-orange-500 font-bold' : 'text-gray-600 hover:text-orange-500'}`;

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900">Bri<span className="text-orange-500">gade</span></span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/plates" className={navLinkClass('/plates')}>Plates</Link>
            <Link to="/login" className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg">Login</Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600 focus:outline-none">
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className={`block py-2 ${navLinkClass('/')}`}>Home</Link>
          <Link to="/plates" onClick={() => setIsOpen(false)} className={`block py-2 ${navLinkClass('/plates')}`}>Plates</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center bg-orange-500 text-white py-3 rounded-xl font-semibold">Login</Link>
        </div>
      )}
    </nav>
  );
}

// PlateCard Component
function PlateCard({ name, price, is_available, imageUrl }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${is_available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {is_available ? 'Disponible' : 'Indisponible'}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{name}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-extrabold text-orange-500">{price}</span>
            <span className="text-sm text-gray-400 ml-1">MAD</span>
          </div>
          <div className={`w-3 h-3 rounded-full ${is_available ? 'bg-green-400' : 'bg-red-400'}`} />
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                </svg>
              </div>
              <span className="text-xl font-bold">Bri<span className="text-orange-500">gade</span></span>
            </div>
            <p className="text-gray-400 text-sm">Découvrez les meilleurs plats de notre restaurant.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Home</Link></li>
              <li><Link to="/plates" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Plates</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>contact@brigade.ma</li>
              <li>+212 5XX XXX XXX</li>
              <li>Casablanca, Maroc</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Brigade. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

// ==================== PAGES ====================

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

// Plates Page
function PlatesPage() {
  const [search, setSearch] = useState('');
  const filteredPlates = plates.filter((plate) => plate.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Nos <span className="text-orange-500">Plats</span></h1>
          <p className="text-gray-600 max-w-xl mx-auto">Découvrez notre sélection de plats préparés avec soin</p>
        </div>
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher un plat..." className="w-full px-5 py-3 pl-12 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>
        {filteredPlates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlates.map((plate) => (
              <PlateCard key={plate.id} name={plate.name} price={plate.price} is_available={plate.is_available} imageUrl={plate.imageUrl} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <p className="text-xl text-gray-500 font-medium">Aucun plat trouvé</p>
            <p className="text-gray-400 mt-2">Essayez un autre terme de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Login Page
function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log('Login:', formData); };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900">Bon retour !</h1>
          <p className="text-gray-600 mt-2">Connectez-vous à votre compte</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg">Se connecter</button>
          </form>
          <p className="text-center text-gray-600 mt-6">Pas encore de compte ? <Link to="/register" className="text-orange-500 font-semibold hover:underline">S'inscrire</Link></p>
        </div>
      </div>
    </div>
  );
}

// Register Page
function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); if (formData.password !== formData.confirmPassword) { alert('Les mots de passe ne correspondent pas'); return; } console.log('Register:', formData); };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-gray-900">Créer un compte</h1>
          <p className="text-gray-600 mt-2">Rejoignez-nous dès maintenant</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Votre nom" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label htmlFor="reg-email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="reg-email" name="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <input type="password" id="reg-password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">Confirmer le mot de passe</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="••••••••" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg">S'inscrire</button>
          </form>
          <p className="text-center text-gray-600 mt-6">Déjà un compte ? <Link to="/login" className="text-orange-500 font-semibold hover:underline">Se connecter</Link></p>
        </div>
      </div>
    </div>
  );
}

// ==================== APP ====================
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plates" element={<PlatesPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
