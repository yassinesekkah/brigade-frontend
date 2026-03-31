import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["Tout", "Tajines", "Couscous", "Pastilla", "Desserts"];

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900">
              FOOD<span className="text-orange-500">DZIGN</span>
            </span>
          </div>

          {/* 2. Desktop Navigation (Links) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-900 font-bold hover:text-orange-500 transition-colors">Home</a>
            <a href="#" className="text-gray-500 font-medium hover:text-orange-500 transition-colors">Menu</a>
            <a href="#" className="text-gray-500 font-medium hover:text-orange-500 transition-colors">À propos</a>
            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-orange-500 transition-all shadow-lg shadow-gray-200">
              Commander
            </button>
          </div>

          {/* 3. Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Sub-Header: Categories (Scrollable) */}
      <div className="bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-4 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button 
              key={cat} 
              className="whitespace-now8 text-sm font-semibold px-4 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-all shadow-sm"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
          <a href="#" className="block text-lg font-bold text-gray-900">Home</a>
          <a href="#" className="block text-lg font-medium text-gray-600">Menu</a>
          <a href="#" className="block text-lg font-medium text-gray-600">À propos</a>
          <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold">Commander</button>
        </div>
      )}
    </nav> 
  );
}

export default Header;