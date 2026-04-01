import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';


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

export default Footer;
