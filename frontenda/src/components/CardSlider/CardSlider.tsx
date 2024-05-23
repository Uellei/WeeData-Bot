import React from 'react';

interface CardSliderProps {
  name: string,
  stars: string,
  sales: string,
  salePrice: string,
  originalPrice: string
}

const Card = ({ name, stars, sales, salePrice, originalPrice }: CardSliderProps) => (
  <div className="bg-[#000] text-white rounded-xl p-4 w-44 mx-4 my-4">
    <div className="bg-indigo-500 p-4 rounded-t-lg">
      <img src={""} alt={name} className="h-36 w-full" />
    </div>
    <div className="flex flex-col justify-center items-center">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-sm">{stars}</p>
      <p className="text-sm">{sales}</p>
      <p className="text-lg font-bold">{salePrice}</p>
      <p className="line-through text-gray-500">{originalPrice}</p>
      <button className="bg-indigo-500 text-white text-lg px-6 rounded-full py-1">Visualizar</button>
    </div>
  </div>
);

const CardGrid = ({ data }: any) => (
  <div className='bg-[#131313] min-h-screen overflow-hidden'>
    <div className="container mx-auto py-8">
      <div className="flex flex-wrap justify-center">
        {data.map((d: any, index: any) => (
          <Card
            key={index}
            name={d.name}
            stars={d.stars}
            sales={d.sales}
            salePrice={d.salePrice}
            originalPrice={d.originalPrice}
          />
        ))}
      </div>
    </div>
  </div>
);

export default CardGrid;
