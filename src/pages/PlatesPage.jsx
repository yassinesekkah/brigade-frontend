import { useState } from 'react';
import PlateCard from '../components/PlateCard';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { plates } from '../data/plates';



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
              <Link key={plate.id} to={`/plates/${plate.id}`}>
              <PlateCard name={plate.name} price={plate.price} is_available={plate.is_available} imageUrl={plate.imageUrl} />
              </Link>
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
export  default PlatesPage;