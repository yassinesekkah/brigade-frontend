import { ShoppingCart } from 'lucide-react';

function PlateCard({ 
  name, 
  price, 
  is_available, 
  category = "Plat Principal", 
  imageUrl
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 w-72">
      
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Status Badge */}
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
          is_available 
          ? 'bg-green-500/90 text-white' 
          : 'bg-red-500/90 text-white'
        }`}>
          {is_available ? 'Disponible' : 'Indisponible'}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        
        {/* Category */}
        <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
          {category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-900 mt-1">
          {name}
        </h2>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">
          
          <div>
            <span className="text-2xl font-extrabold text-gray-900">
              {price}
            </span>
            <span className="text-sm text-gray-400 ml-1">MAD</span>
          </div>

          <button 
            disabled={!is_available}
            className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
              is_available 
              ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-300/40 hover:scale-110'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlateCard;