
import StarSvg from 'img/StarSvg'
import React from 'react'
import { styled } from '../styles'

const StarButton = styled('button', {
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
  '&.selected': {
    backgroundColor: '$magenta'
  }
})

export interface ButtonStarProps {
  onChange: () => void
  index: number
  rating: number | 5
}

const ButtonStar: React.FC<ButtonStarProps> = ({ onChange, index, rating }) => {
  const isSelected = rating > index

  return (
    <StarButton
      aria-label={`Avaliar com ${index + 1} estrelas`}
      className={isSelected ? 'selected' : ''}
      onClick={() => { onChange() }}
      type="button"
    >
      <StarSvg
        fill={isSelected ? '#fff700' : '#fff'}
      />
    </StarButton>
  )
}

export default ButtonStar
