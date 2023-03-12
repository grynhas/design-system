
import StarSvg from 'img/StarSvg'
import React, { useState } from 'react'
import { styled } from '../styles'

const Star = styled('button', {
  color: '$darkHigh',
  cursor: 'pointer',
  backgroundColor: '$darkLow',
  borderRadius: '50%',
  border: 'none',
  width: '$10',
  height: '$10',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '&:focus': {
    borderColor: '$magenta'
  },
  '&.certo': {
    // backgroundColor: '$magenta'
  }
})

export interface RatingProps {
  onChange: (rating: number) => void
  numberStars: number | 5 // 5 é o valor padrão
}

const Rating: React.FC<RatingProps> = ({ onChange, numberStars }) => {
  const [rating, setRating] = useState(0)
  const stars = []
  for (let i = 0; i < numberStars; i++) {
    stars.push(
      <Star
        aria-label={`Avaliar com ${i + 1} estrelas`}
        key={i}
        className={rating > i ? 'certo' : ''}
        onClick={() => {
          setRating(i + 1)
          onChange(i + 1)
        }}>
            <StarSvg
                fill={rating > i ? '#fff700' : '#fff'}
            />
         </Star>
    )
  }
  return (
    <>
        {stars}
    </>
  )
}

export default Rating
