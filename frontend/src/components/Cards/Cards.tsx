import React from "react"
import ImageComponent from "../ImageComponent/ImageComponent"
import StarRating from "../StarRating/StarRating";

export interface Card {
  image: string
  referrer: string
  nameItem: string
  salePrice: string
  sales: string
  stars: string
  originalPrice: string
  productId: string
}

export interface CustomHeaders {
  [key: string]: string
}

interface CardProps {
  card: Card
  headers: CustomHeaders
}

const Cards = ({ card, headers }: CardProps) => {
  const priceFormatted = (salePrice: string) => {
    if (typeof salePrice !== 'string') {
      return { wholePart: null, fractionalPart: null }
    }

    const priceArray = salePrice.split(' ')
    if (priceArray.length < 2) {
      return { wholePart: null, fractionalPart: null }
    }

    let numberPart = priceArray[1]
    const decimalSeparator = numberPart.includes(',') ? ',' : '.'
    const [wholePart, fractionalPart] = numberPart.split(decimalSeparator)

    return { wholePart, fractionalPart }
  }

  const { wholePart, fractionalPart } = priceFormatted(card.salePrice)

  // Converta CustomHeaders para Headers
  const convertToHeaders = (customHeaders: CustomHeaders): Headers => {
    const headers = new Headers()
    Object.entries(customHeaders).forEach(([key, value]) => {
      headers.append(key, value)
    })
    return headers
  }
  console.log(card.image)
  const headersObj = convertToHeaders(headers)

  return (
    <div className="relative text-white rounded-xl h-full my-1 w-full max-w-md bg-[#181818] mx-auto border-solid border-[1px] border-[#292929]">
      <div className={`rounded-t-xl ${card.image.includes('adidas') ? "bg-[#EAEEEF]" : "bg-[#fff]"} w-full h-52 flex items-center justify-center overflow-hidden`}>
        <ImageComponent imageUrl={card.image} headers={headersObj} referrer={card.referrer} />
      </div>
      <div className="h-[200px] flex flex-col items-center justify-between py-2 px-2">
        <p className="mt-4 w-full text-white text-xl font-semibold truncate ...">{card.nameItem}</p>
        <div className="flex w-full py-1.5 items-center">
          <div className="text-white text-sm">
            <StarRating rating={card.stars}/>
          </div>
          <p className="text-white text-base ml-4">{card.sales}</p>
        </div>
        <div className="flex w-full text-center items-end">
          <p className="text-white text-lg font-bold">
            R$
            <span className="text-3xl"> {wholePart}</span>
            <span className="text-lg">,{fractionalPart}</span>
          </p>
          <p className="line-through text-gray-500 ml-3 text-lg">{card.originalPrice}</p>
        </div>
        <div className="mt-6 text-center">
          <a href={card.productId} target="_blank" rel="noreferrer" className="block w-52 bg-white text-black font-bold hover:bg-gray-300 text-lg px-6 rounded-full py-1">Visualizar</a>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl border-solid border-[1px] border-[#292929] pointer-events-none"></div>
    </div>
  )
}

export default Cards
