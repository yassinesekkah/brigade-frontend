function PlateCard({ name, price, is_available, imageUrl }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-100">
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Availability Badge */}
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
          is_available 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {is_available ? 'Disponible' : 'Indisponible'}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-extrabold text-orange-500">
              {price}
            </span>
            <span className="text-sm text-gray-400 ml-1">MAD</span>
          </div>

          <div className={`w-3 h-3 rounded-full ${
            is_available ? 'bg-green-400' : 'bg-red-400'
          }`} />
        </div>
      </div>
    </div>
  );
}

export default PlateCard;