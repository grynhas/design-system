
import React, { useState } from 'react'
import { Box } from '../components/Box'
import ButtonStar from '../components/ButtonStar'

export interface RatingProps {
  onChange: (rating: number) => void
  numberStars: number | 5 // 5 é o valor padrão
}

const Rating: React.FC<RatingProps> = ({ onChange, numberStars }) => {
  const [rating, setRating] = useState(0)
  const stars = []
  for (let i = 0; i < numberStars; i++) {
    stars.push(
        <ButtonStar key={i} index={i} rating={rating} onChange={() => {
          setRating(i + 1)
          onChange(i + 1)
        }} />
    )
  }
  return (
    <Box
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '$2',
      width: '100%',
      maxWidth: '$80'
    }}>
        {stars}
    </Box>
  )
}

export default Rating
