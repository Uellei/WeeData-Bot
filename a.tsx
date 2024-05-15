import React, { useState } from 'react';
interface Item {
  image: string;
  nameItem: string;
  sales: string;  // Ajustado de number para string, pois os dados de exemplo são strings
  salePrice: string;
  originalPrice: string;
}

// Removido a interface Product pois não é mais necessária

function App() {
  const [productName, setProductName] = useState('');
  const [productDetails, setProductDetails] = useState<Item[]>([]);

  const fetchProductDetails = async () => {
    try {
      setProductDetails([])
      const response = await fetch('http://localhost:8000/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: productName, bot: "Aliexpress" })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProductDetails(data)
    } catch (error) {
      console.error('Failed to fetch products:', error);
      setProductDetails([]);
    }
  };
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productDetails.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + productDetails.length) % productDetails.length);
  };

  return (
    <div className="App flex flex-col items-center justify-center">
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="border p-2 mb-4"
      />
      <button onClick={() => {}} className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
        Buscar Produto
      </button>
      <div className="relative flex items-center">
        <button onClick={handlePrev} className="absolute left-0 bg-gray-300 text-black p-2 rounded-full">‹</button>
        <div className="carousel flex space-x-4 overflow-hidden">
          {productDetails.map((item, index) => {
            const offset = index - currentIndex;
            const isCenter = offset === 0;
            const absOffset = Math.abs(offset);
            const direction = offset > 0 ? 1 : -1;

            return (
              <div
                key={item.nameItem}
                className={`card-container bg-white p-4 rounded shadow-md flex-none w-64 transform transition-transform duration-300 ease-out
                  ${isCenter ? 'scale-110 z-10' : ''}
                  ${!isCenter ? `rotate-y-${direction * absOffset * 10} scale-${1 - absOffset * 0.1}` : ''}
                `}
                style={{
                  transform: `
                    rotateY(${offset * 20}deg)
                    scale(${1 - absOffset * 0.1})
                    translateX(${direction * absOffset * 20}px)
                  `,
                }}
              >
                <div className='image-container'>
                  <img src={item.image ? `https://${item.image.split('//')[1]}` : ''} alt={item.nameItem} className="w-full h-40 object-cover mb-4" />
                </div>
                <div>
                <h2 className="bg-blue-600 text-white p-2">{item.nameItem}</h2>
                <p>Vendas: {item.sales}</p>
                <p>Preço de Venda: {item.salePrice}</p>
                <p>Preço Original: {item.originalPrice || 'N/A'}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={handleNext} className="absolute right-0 bg-gray-300 text-black p-2 rounded-full">›</button>
      </div>
    </div>
  );
}

export default App;
