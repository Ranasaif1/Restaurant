import React from 'react';

const pastas = [
  { id: 1, name: 'Bolognese', price: '$18', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=400&auto=format&fit=crop' },
  { id: 2, name: 'Carbonara', price: '$20', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=400&auto=format&fit=crop' },
  { id: 3, name: 'Seafood Pasta', price: '$24', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=400&auto=format&fit=crop' },
  { id: 4, name: 'Pesto Penne', price: '$16', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=400&auto=format&fit=crop' },
];

const PastaGrid = () => {
  return (
    <section className="py-20 bg-[#111] text-white">
      <div className="text-center mb-16">
        <span className="text-[#C59D5F] text-xs md:text-sm tracking-[0.3em] font-semibold uppercase">Tasty Format</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-2 tracking-widest uppercase">Fresh Pasta</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pastas.map((pasta) => (
          <div key={pasta.id} className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
              <img 
                src={pasta.image} 
                alt={pasta.name} 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-2">
              <h3 className="text-lg font-serif tracking-wide">{pasta.name}</h3>
              <span className="text-[#C59D5F] font-serif">{pasta.price}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Traditional Italian Recipe</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastaGrid;