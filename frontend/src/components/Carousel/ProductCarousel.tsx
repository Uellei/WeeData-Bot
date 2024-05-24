import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import ImageComponent from "../ImageComponent/ImageComponent"

const ProductCarousel = ({ data, headers }: any) => {
  const priceFormatted = (salePrice: any) => {
    if (typeof salePrice !== 'string') {
      return { wholePart: null, fractionalPart: null };
    }
  
    const priceArray = salePrice.split(' ');
    if (priceArray.length < 2) {
      return { wholePart: null, fractionalPart: null };
    }
  
    // Consider both '.' and ',' as possible decimal separators
    let numberPart = priceArray[1].replace('.', ',');
    const [wholePart, fractionalPart] = numberPart.split(',');
  
    return { wholePart, fractionalPart };
  }
  

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4.84,
    speed: 500,
    rows: 2,
    slidesPerRow: 1
  }

  return (
    <Slider {...settings}>
      {data.map((d: any, index: any) => {
        const { wholePart, fractionalPart } = priceFormatted(d.salePrice)
        return (
          <div key={index} className="text-white rounded-xl p-4 h-full my-1 w-48">
            <div className="bg-[#191919] p-2 rounded-t-lg h-52">
              <ImageComponent imageUrl={d.image} headers={headers} referrer={d.referrer} />
            </div>
            <div className="bg-[#191919] h-48 flex flex-col items-center rounded-b-lg">
              <p className="px-2 mt-4 w-full text-white text-xl font-semibold truncate ...">{d.nameItem}</p>
              <div className="flex w-full px-2 py-1.5 items-center">
                <div className="text-white text-sm">
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={solidStar} />
                  <FontAwesomeIcon icon={regularStar} />
                </div>
                <p className="text-white text-base ml-4">{d.sales}</p>
              </div>
              <div className="flex w-full px-2 text-center items-end">
                <p className="text-white text-lg font-bold">
                  R$
                  <span className="text-3xl"> {wholePart}</span>
                  <span className="text-lg">,{fractionalPart}</span>
                </p>
                <p className="line-through text-gray-500 ml-3 text-lg">{d.originalPrice}</p>
              </div>
              <a href={d.productId} target="_blank" rel="noreferrer" className="bg-white text-black font-bold hover:bg-gray-300 text-lg px-6 rounded-full py-1 my-2 mt-6 w-7/12 text-center">Visualizar</a>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}

export default ProductCarousel