import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

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
export default Header;