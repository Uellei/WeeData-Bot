import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar, faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

const StarRating = ({ rating }: any) => {
  // Verifica se o rating é uma string e se contém o caractere "de"
  if (typeof rating === 'string') {
    if (rating.includes("de")) {
      rating = rating.split(" ")[0]
    }
    // Converte o rating para um número, substituindo vírgulas por pontos
    rating = parseFloat(rating.replace(",", "."))
  }

  // Se o rating não for um número válido, define como 0
  if (isNaN(rating)) {
    rating = 0
  }

  // Arredonda a avaliação para o meio mais próximo
  let roundedRating = Math.round(rating * 2) / 2

  // Ajusta o arredondamento de acordo com as regras especificadas
  if (roundedRating > 4.9) {
    roundedRating = 5
  } else if (roundedRating > 4.4 && roundedRating <= 4.9) {
    roundedRating = 4.5
  }

  // Calcula o número de estrelas inteiras, meias e vazias
  const fullStars = Math.floor(roundedRating)
  const hasHalfStar = roundedRating % 1 !== 0
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="text-white text-sm">
      {rating ? (
        <>
          {Array(fullStars).fill(<FontAwesomeIcon icon={solidStar} />)}
          {hasHalfStar && <FontAwesomeIcon icon={halfStar} />}
          {Array(emptyStars).fill(<FontAwesomeIcon icon={regularStar} />)}
        </>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default StarRating
